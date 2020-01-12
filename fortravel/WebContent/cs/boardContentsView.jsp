<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="boarder.bean.BoardDto"%>
<%@ page import="boarder.dao.BoardDao"%>
<%@ page import="java.util.ArrayList" %>
<% request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>

	  <script>
	    function btn_click(str){                             
	        if(str=="update"){                                 
	            view.action="boardWriteDBUpdate.jsp";
	            return true;
	        } else(str=="del"){      
	            view.action="boardWriteDBDelete.jsp";
	            return true;
	        } 
	    }
	</script>
<head>
<meta charset="EUC-KR">
<title>boardView</title>
</head>
<body>
<jsp:useBean id="board" class="boarder.dao.BoardDao"/>
<%
String no=request.getParameter("NO");
String hits=request.getParameter("hits");
board.hitsUpdate(hits,no);
%>
<form onsubmit="" action="boardWriteDBUpdate.jsp" name="view" id="view" method="post">


<%

ArrayList<BoardDto> list=board.BoardContentsView(request.getParameter("NO"));
//out.print(list.size());
	out.print("<tr>"+"<td width=100 align=center>"+"<input type=text name='number' value='"+list.get(0).getNumber()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='category' value='"+list.get(0).getCategory()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='title'  value='"+list.get(0).getTitle()+"'>"+"</a>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='contents'  value='"+list.get(0).getContents()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+"<input type=text name='writer'  value='"+list.get(0).getWriter()+"'>"+"</td>");
	out.print("<td width=100 align=center>"+list.get(0).getDate()+"</td>");
	out.print("<td width=150 align=center>"+list.get(0).getHits()+"</td>"+"<tr>");
	
%>
<input name="update" id="update" type="submit" onclick="btn_click(update)" value="수정">

</form>
<input name="delete" id="delete" type="submit" onclick="btn_click(del)" value="삭제">
</body>
</html>