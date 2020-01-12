<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    <%@ page import="boarder.bean.BoardDto"%>
<%@ page import="boarder.dao.BoardDao"%>
<% request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>boardWriteDBDelete</title>
</head>
<body>
<jsp:useBean id="board" class="boarder.dao.BoardDao"/>
<%
String num=request.getParameter("number");
//out.print(num);
board.BoardDelete(num);
%>
</body>
</html>