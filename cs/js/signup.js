

   function idcheck(){
	  var str=SIGNIN.idd.value
	  if (str=="")
	  {
	  alert("Id를 입력하세요")
	  }
	  else{
		location.href="idcheck.jsp?idd="+str		
	  }







function check() {
      var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	  var getCheckid= RegExp(/^[a-zA-Z0-9]{5,8}$/);
      var getCheck= RegExp(/^[a-zA-Z0-9]{8,12}$/);
      var getName= RegExp(/^[가-힣]+$/);
      var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //형식 설정
      var buf = new Array(13); //주민등록번호 배열
 
    //이름 공백 확인
      if($("#username").val() == ""){
        alert("이름을 입력하세요");
        $("#userid").focus();
        return false;
      }
     //이름 유효성
      if (!getName.test($("#username").val())) {
        alert("이름이 형식에 맞지 않습니다");
        $("#username").val("");
        $("#username").focus();
        return false;
      }
 
      //아이디 공백 확인
      if($("#userid").val() == ""){
        alert("아이디를 입력하세요");
        $("#userid").focus();
        return false;
      }
 
      //이름의 유효성 검사
      if(!getCheckid.test($("#userid").val())){
        alert("형식에 맞게 입력해주세요");
        $("#userid").val("");
        $("#userid").focus();
        return false;
      }
 
      //비밀번호
      if(!getCheck.test($("#password").val())) {
      alert("형식에 맞춰서 PW를 입력해주세요");
      $("#password").val("");
      $("#password").focus();
      return false;
      }
 
      //아이디랑 비밀번호랑 같은지
      if ($("#userid").val()==($("#password").val())) {
      alert("비밀번호가 ID와 똑같으면 안됩니다");
      $("#password").val("");
      $("#password").focus();
    }
 
      //비밀번호 똑같은지
      if($("#password").val() != ($("#passwordRepeat").val())){ 
      alert("비밀번호가 다릅니다.");
      $("#password").val("");
      $("#passwordRepeat").val("");
      $("#password").focus();
      return false;
     }
 
     //이메일 공백 확인
      if($("#email").val() == ""){
        alert("이메일을 입력해주세요");
        $("#email").focus();
        return false;
      }
           
      //이메일 유효성 검사
      if(!getMail.test($("#email").val())){
        alert("이메일형식에 맞게 입력해주세요")
        $("#email").val("");
        $("#email").focus();
        return false;
      }

	   //휴대폰번호 공백 확인
      if($("#userphone").val() == ""){
        alert("휴대폰번호를 입력해주세요");
        $("#userphone").focus();
        return false;
      }

 
 
    return true;
  }

