
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

	//��ũ�ѷ� �޴���ġȮ��
$(document).ready(function() {
	var jbOffset = $ ('nav').offset();
	$(window).scroll(function(){
		if($(document).scrollTop()>jbOffset.top) {
			$('nav').addClass('jbFixed');
			}
			else{
				$('nav').removeClass('jbFixed');
				}
				});
});


 $( function() {

    $( "#tabs" ).tabs();

  } );
