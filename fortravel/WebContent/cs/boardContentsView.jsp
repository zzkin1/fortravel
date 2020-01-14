<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="boarder.bean.BoardDto"%>
<%@ page import="boarder.dao.BoardDao"%>
<%@ page import="java.util.ArrayList" %>
<% request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script>
function btn_click(){ 
	    	alert(클릭);
	    	return false;
	      /*   if(str=="update"){                                 
	            view.action="boardWriteDBUpdate.jsp";
	            return true;
	        } else if(str=="del"){      
	            view.action="boardWriteDBDelete.jsp";
	            return true;
	        }  */
	    }
</script>
<script>
$(document).ready(function() {//게시글 상세보기를 했을때 세션ID값과 작성자ID가 동일하면 히든버튼 활성화 수정 삭제 가능하게 함
	
	var writer=$("#writer").val();
	var sessionID=$("#sessionID").val();
	
	if(writer==sessionID){
		//alert("d");
		$("#update").attr("type","button");
		$("#delete").attr("type","button");		
	}
});
</script>
<script>
function del(){
	alert("야");
}
function up(){
	$("#update").attr("value","등록");
	$("#category").removeAttr("readonly");
	$("#title").removeAttr("readonly");
	$("#contents").removeAttr("readonly");
	$("#update").attr("type","submit");
	return false;
}
</script>
<head>
<meta charset="UTF-8">
<title>boardView</title>
</head>
<body>
<jsp:useBean id="board" class="boarder.dao.BoardDao"/>
<%
String no=request.getParameter("NO");
String hits=request.getParameter("hits");
board.hitsUpdate(hits,no);
%>
<form action="boardWriteDBUpdate.jsp" name="view" id="view" method="post">
<input type="hidden" name="sessionID" id="sessionID" value=${ID}>
<%

ArrayList<BoardDto> list=board.BoardContentsView(request.getParameter("NO"));
//out.print(list.size());
	out.print("<tr>"+"<td width=100 align=center>"+"<input type='hidden' name='number' value='"+list.get(0).getNumber()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='category' id='category' readonly value='"+list.get(0).getCategory()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='title' id='title' readonly value='"+list.get(0).getTitle()+"'>"+"</a>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='contents' id='contents' readonly  value='"+list.get(0).getContents()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=hidden name='writer' id='writer' value='"+list.get(0).getWriter()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+list.get(0).getDate()+"</td>");
	out.print("<td width=150 align=center>"+"<input type=text name='hits' id='hits' readonly value='"+list.get(0).getHits()+"'>"+"</td>"+"<tr>");
	
%>
<input name="update" id="update" type="hidden" id="update" onclick="return up()" value="수정">
<input name="delete" id="delete" type="hidden" id="delete" onclick="del()" value="삭제">
</form>
</body>
</html>