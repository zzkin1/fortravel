

   function idcheck(){
	  var str=SIGNIN.idd.value
	  if (str=="")
	  {
	  alert("Id�� �Է��ϼ���")
	  }
	  else{
		location.href="idcheck.jsp?idd="+str		
	  }







function check() {
      var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	  var getCheckid= RegExp(/^[a-zA-Z0-9]{5,8}$/);
      var getCheck= RegExp(/^[a-zA-Z0-9]{8,12}$/);
      var getName= RegExp(/^[��-�R]+$/);
      var fmt = RegExp(/^\d{6}[1234]\d{6}$/); //���� ����
      var buf = new Array(13); //�ֹε�Ϲ�ȣ �迭
 
    //�̸� ���� Ȯ��
      if($("#username").val() == ""){
        alert("�̸��� �Է��ϼ���");
        $("#userid").focus();
        return false;
      }
     //�̸� ��ȿ��
      if (!getName.test($("#username").val())) {
        alert("�̸��� ���Ŀ� ���� �ʽ��ϴ�");
        $("#username").val("");
        $("#username").focus();
        return false;
      }
 
      //���̵� ���� Ȯ��
      if($("#userid").val() == ""){
        alert("���̵� �Է��ϼ���");
        $("#userid").focus();
        return false;
      }
 
      //�̸��� ��ȿ�� �˻�
      if(!getCheckid.test($("#userid").val())){
        alert("���Ŀ� �°� �Է����ּ���");
        $("#userid").val("");
        $("#userid").focus();
        return false;
      }
 
      //��й�ȣ
      if(!getCheck.test($("#password").val())) {
      alert("���Ŀ� ���缭 PW�� �Է����ּ���");
      $("#password").val("");
      $("#password").focus();
      return false;
      }
 
      //���̵�� ��й�ȣ�� ������
      if ($("#userid").val()==($("#password").val())) {
      alert("��й�ȣ�� ID�� �Ȱ����� �ȵ˴ϴ�");
      $("#password").val("");
      $("#password").focus();
    }
 
      //��й�ȣ �Ȱ�����
      if($("#password").val() != ($("#passwordRepeat").val())){ 
      alert("��й�ȣ�� �ٸ��ϴ�.");
      $("#password").val("");
      $("#passwordRepeat").val("");
      $("#password").focus();
      return false;
     }
 
     //�̸��� ���� Ȯ��
      if($("#email").val() == ""){
        alert("�̸����� �Է����ּ���");
        $("#email").focus();
        return false;
      }
           
      //�̸��� ��ȿ�� �˻�
      if(!getMail.test($("#email").val())){
        alert("�̸������Ŀ� �°� �Է����ּ���")
        $("#email").val("");
        $("#email").focus();
        return false;
      }

	   //�޴�����ȣ ���� Ȯ��
      if($("#userphone").val() == ""){
        alert("�޴�����ȣ�� �Է����ּ���");
        $("#userphone").focus();
        return false;
      }

 
 
    return true;
  }

