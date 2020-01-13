<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>boardWrite</title>
</head>
<body>
<form action="boardWriteDBinsert.jsp"  method="post" >
<input type=text name="category" value="category" >
<input type=text name="title" value="title">
<input type=text name="writer" value=${ID}>
<input type=text name="contents" value="contents">
<input type="submit"value="등록">
<input type="reset" value="취소">
</form>
</body>
</html>