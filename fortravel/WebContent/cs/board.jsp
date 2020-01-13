<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="boarder.bean.BoardDto"%>
<%@ page import="boarder.dao.BoardDao"%>
<%@ page import="java.util.ArrayList" %>
<% request.setCharacterEncoding("UTF-8"); %>
<%
String se=null;
se=(String)session.getAttribute("ID");
%>
<!doctype html>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script>
function writepage(){//session 을 ID가sessionchek인 input hidden박스에 value값으로 넣어주고 값 을 비교하여 로그인과 비로그인 구별하여 글쓰기제한둠
	var sessioncheck=$("#sessioncheck").val();
	var check="null";
	if(sessioncheck==check){
		alert("로그인이 필요합니다.");
	} 
	else{
		location.href="boardWrite.jsp";
	}
}
function search(){//검색어를입력안하면 메시지 출력
	var text=$("#searchinfo").val();
	var check="null";
	if(text==check||text==""){
		alert("검색어를 입력하세요.");
		return false;
	}
	true;
}
</script>
<style>
th{
background:yellow;
}
</style>
<html>
 <head>
  <meta charset="UTF-8">

  <title>board</title>
 </head>
 <body>

<jsp:useBean id="board" class="boarder.dao.BoardDao"/>
<table border="solid 1px black ">
<th width=50 align=center>NO</th><th width=50 align=center>카테고리</th>
<th width=200 align=center>제목</th><th width=100 align=center>작성자</th>
<th width=100 align=center>작성일</th><th width=50 align=center>조회수</th></tr>

<%
String opt=null;
String text=null;
opt=(String)request.getParameter("Boardselectmenu");
text=(String)request.getParameter("searchinfo");
//out.print(opt+"   "+text);
if(text==""||opt==null||text==null){//검색어가 없거나 셀렉트값이 없으면 리스트 전체 순서대로 출력
ArrayList<BoardDto> list=board.List();
//out.print(list.size());
 for(int i=0; i<list.size(); i++){
	out.print("<tr>"+"<td width=100 align=center>"+list.get(i).getNumber()+"</td>");
	out.print("<td width=100 align=center>"+list.get(i).getCategory()+"</td>");
	out.print("<td width=100 align=center>"+"<a href='?pageChange=boardContentsView.jsp?NO="+list.get(i).getNumber()+"&hits="+list.get(i).getHits()+"'>"+list.get(i).getTitle()+"</a>"+"</td>");
	out.print("<td width=100 align=center>"+list.get(i).getWriter()+"</td>");
	out.print("<td width=100 align=center>"+list.get(i).getDate()+"</td>");
	out.print("<td width=150 align=center>"+list.get(i).getHits()+"</td>"+"<tr>");
 }
}
else{//검색에따른 리스트 출력 
	 ArrayList<BoardDto> list=board.List(opt,text);
	 for(int i=0; i<list.size(); i++){
			out.print("<tr>"+"<td width=100 align=center>"+list.get(i).getNumber()+"</td>");
			out.print("<td width=100 align=center>"+list.get(i).getCategory()+"</td>");
			out.print("<td width=100 align=center>"+"<a href='?pageChange=boardContentsView.jsp?NO="+list.get(i).getNumber()+"&hits="+list.get(i).getHits()+"'>"+list.get(i).getTitle()+"</a>"+"</td>");
			out.print("<td width=100 align=center>"+list.get(i).getWriter()+"</td>");
			out.print("<td width=100 align=center>"+list.get(i).getDate()+"</td>");
			out.print("<td width=150 align=center>"+list.get(i).getHits()+"</td>"+"<tr>");
		 }
}

%>
</table>
<input type="hidden" name="sessioncheck" id="sessioncheck" value=<%=se%>>
<input type=button onclick="writepage()" name="write" id="btn" value="글쓰기"/>

<form name="boardsearchform" action="?pageChange=board.jsp" onsubmit="return search()" method="post">
<select class="sel" name="Boardselectmenu" id="Boardselectmenu">
<option value="none" selected>전체</option>
<option value="category">카테고리</option>
<option value="title_contents">제목+내용</option>
<option value="title">제목</option>
<option value="contents">내용</option>
<option value="writer">작성자</option>
<input type="text" value="" name="searchinfo" id="searchinfo">
<input type="submit" value="검색">
</select>
</form>


 </body>
</html>
