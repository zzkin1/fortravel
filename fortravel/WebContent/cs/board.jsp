<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="boarder.bean.BoardDto"%>
<%@ page import="boarder.dao.BoardDao"%>
<%@ page import="java.util.ArrayList" %>
<% request.setCharacterEncoding("UTF-8"); %>
<!doctype html>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

<style>
th{
background:yellow;
}
</style>
<html lang="en">
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
<a href="boardContentsView.jsp?NO=<%= 5 %>">
<%

String opt="writer";
String sel="zzkin1";
opt=request.getParameter("Boardselectmenu");
sel=request.getParameter("searchinfo");
//out.print(opt+sel);
if(opt==null||sel==null){
ArrayList<BoardDto> list=board.List();
//out.print(list.size());
 for(int i=0; i<list.size(); i++){
	out.print("<tr>"+"<td width=100 align=center>"+list.get(i).getNumber()+"</td>");
	out.print("<td width=100 align=center>"+list.get(i).getCategory()+"</td>");
	out.print("<td width=100 align=center>"+"<a href='boardContentsView.jsp?NO="+list.get(i).getNumber()+"&hits="+list.get(i).getHits()+"'>"+list.get(i).getTitle()+"</a>"+"</td>");
	out.print("<td width=100 align=center>"+list.get(i).getWriter()+"</td>");
	out.print("<td width=100 align=center>"+list.get(i).getDate()+"</td>");
	out.print("<td width=150 align=center>"+list.get(i).getHits()+"</td>"+"<tr>");
 }
}
else{
	 ArrayList<BoardDto> list=board.List(opt,sel);
	 for(int i=0; i<list.size(); i++){
			out.print("<tr>"+"<td width=100 align=center>"+list.get(i).getNumber()+"</td>");
			out.print("<td width=100 align=center>"+list.get(i).getCategory()+"</td>");
			out.print("<td width=100 align=center>"+"<a href='boardContentsView.jsp?NO="+list.get(i).getNumber()+"'>"+list.get(i).getTitle()+"</a>"+"</td>");
			out.print("<td width=100 align=center>"+list.get(i).getWriter()+"</td>");
			out.print("<td width=100 align=center>"+list.get(i).getDate()+"</td>");
			out.print("<td width=150 align=center>"+list.get(i).getHits()+"</td>"+"<tr>");
		 }
}

%>
</table>
<a href="boardWrite.jsp"><input type=button value="글쓰기"/></a>
<form name="boardsearchform" action="board.jsp" method="post">
<select class="sel" name="Boardselectmenu" id="Boardselectmenu">
<option value="" selected>전체</option>
<option value="category">카테고리</option>
<option value="title">제목</option>
<option value="contents">내용</option>
<option value="writer">작성자</option>
<input type="text" value="" name="searchinfo">
<input type="submit" value="검색">
</select>
</form>


 </body>
</html>
