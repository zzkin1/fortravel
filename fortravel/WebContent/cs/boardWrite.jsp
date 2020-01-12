<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>boardWrite</title>
</head>
<body>
ㅎㅇ
<form action="boardWriteDBinsert.jsp"  method="post" >
<input type=text name="category" value="category" >
<input type=text name="title" value="title">
<input type=hidden name="writer" value=${ID}>
<input type=text name="contents" value="contents">
<input type="submit"value="�깅�">
<input type="reset" value="痍⑥��">
</form>
</body>
</html>