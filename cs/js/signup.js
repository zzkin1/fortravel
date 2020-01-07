

   function idcheck(){
	  var str=SIGNIN.idd.value
	  if (str=="")
	  {
	  alert("Id¸¦ ÀÔ·ÂÇÏ¼¼¿ä")
	  }
	  else{
		location.href="idcheck.jsp?idd="+str		
	  }







function check() {
      var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	  var getCheckid= RegExp(/^[a-zA-Z0-9]{5,8}$/);
      var getCheck= RegExp(/^[a-zA-Z0-9]{8,12}$/);
      var getName= RegExp(/^[°¡-ÆR]+$/);
      var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //Çü½Ä ¼³Á¤
      var buf = new Array(13); //ÁÖ¹Îµî·Ï¹øÈ£ ¹è¿­
 
    //ÀÌ¸§ °ø¹é È®ÀÎ
      if($("#username").val() == ""){
        alert("ÀÌ¸§À» ÀÔ·ÂÇÏ¼¼¿ä");
        $("#userid").focus();
        return false;
      }
     //ÀÌ¸§ À¯È¿¼º
      if (!getName.test($("#username").val())) {
        alert("ÀÌ¸§ÀÌ Çü½Ä¿¡ ¸ÂÁö ¾Ê½À´Ï´Ù");
        $("#username").val("");
        $("#username").focus();
        return false;
      }
 
      //¾ÆÀÌµğ °ø¹é È®ÀÎ
      if($("#userid").val() == ""){
        alert("¾ÆÀÌµğ¸¦ ÀÔ·ÂÇÏ¼¼¿ä");
        $("#userid").focus();
        return false;
      }
 
      //ÀÌ¸§ÀÇ À¯È¿¼º °Ë»ç
      if(!getCheckid.test($("#userid").val())){
        alert("Çü½Ä¿¡ ¸Â°Ô ÀÔ·ÂÇØÁÖ¼¼¿ä");
        $("#userid").val("");
        $("#userid").focus();
        return false;
      }
 
      //ºñ¹Ğ¹øÈ£
      if(!getCheck.test($("#password").val())) {
      alert("Çü½Ä¿¡ ¸ÂÃç¼­ PW¸¦ ÀÔ·ÂÇØÁÖ¼¼¿ä");
      $("#password").val("");
      $("#password").focus();
      return false;
      }
 
      //¾ÆÀÌµğ¶û ºñ¹Ğ¹øÈ£¶û °°ÀºÁö
      if ($("#userid").val()==($("#password").val())) {
      alert("ºñ¹Ğ¹øÈ£°¡ ID¿Í ¶È°°À¸¸é ¾ÈµË´Ï´Ù");
      $("#password").val("");
      $("#password").focus();
    }
 
      //ºñ¹Ğ¹øÈ£ ¶È°°ÀºÁö
      if($("#password").val() != ($("#passwordRepeat").val())){ 
      alert("ºñ¹Ğ¹øÈ£°¡ ´Ù¸¨´Ï´Ù.");
      $("#password").val("");
      $("#passwordRepeat").val("");
      $("#password").focus();
      return false;
     }
 
     //ÀÌ¸ŞÀÏ °ø¹é È®ÀÎ
      if($("#email").val() == ""){
        alert("ÀÌ¸ŞÀÏÀ» ÀÔ·ÂÇØÁÖ¼¼¿ä");
        $("#email").focus();
        return false;
      }
           
      //ÀÌ¸ŞÀÏ À¯È¿¼º °Ë»ç
      if(!getMail.test($("#email").val())){
        alert("ÀÌ¸ŞÀÏÇü½Ä¿¡ ¸Â°Ô ÀÔ·ÂÇØÁÖ¼¼¿ä")
        $("#email").val("");
        $("#email").focus();
        return false;
      }

	   //ÈŞ´ëÆù¹øÈ£ °ø¹é È®ÀÎ
      if($("#userphone").val() == ""){
        alert("ÈŞ´ëÆù¹øÈ£¸¦ ÀÔ·ÂÇØÁÖ¼¼¿ä");
        $("#userphone").focus();
        return false;
      }

 
 
    return true;
  }

