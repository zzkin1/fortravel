
	//���̵�޴�
$(window).scroll(  
    function(){  
        //��ũ���� ��ġ�� ��ܿ��� 800���� ũ��  
        if($(window).scrollTop() > 738){  
            $('aside').addClass("sidefixed");  
            //���� if���� ���� ���� ������ fixed��� class�� �ο���  
        }else{  
            $('aside').removeClass("sidefixed");  
            //���� if���� ���� ���� �ƴѰ�� fixed��� class�� ������  
        }  
    }  
);  

