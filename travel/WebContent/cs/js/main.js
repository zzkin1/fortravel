

$(function(){
    var autocomplete_text =["��õ�������� (ICN)","���� ���� (GMP)","����ī (OSAA)","���� (TYOA)","ȫ�� ���� (HKG)","��ī�� (MFM)","Ÿ�̺��� (TPET)",
	"ī���� (KHH)","������ (CSHA)","Ī�ٿ� (TAO)","���� (BKKT)","�̰����� (SINS)","Ǫ�� (HKT)","��Ʈ�� �ٳ� (DAD)","��Ʈ�� ȣġ�ν�Ƽ (SGN)","��Ʈ�� ��Ʈ�� (��¯) į�� (CXR)",
	"�ĸ� (PARI)","�θ� (ROME)","���� (LOND)","�ٸ����γ� (BCN)","�̽�ź�� (ISTA)","���𺸽���ũ (VVO)"];
         $("#autocomplete").autocomplete({
            source: autocomplete_text
         });
})
$(function(){
    var autocomplete_text = ["��õ�������� (ICN)","���� ���� (GMP)","����ī (OSAA)","���� (TYOA)","ȫ�� ���� (HKG)","��ī�� (MFM)","Ÿ�̺��� (TPET)",
	"ī���� (KHH)","������ (CSHA)","Ī�ٿ� (TAO)","���� (BKKT)","�̰����� (SINS)","Ǫ�� (HKT)","��Ʈ�� �ٳ� (DAD)","��Ʈ�� ȣġ�ν�Ƽ (SGN)","��Ʈ�� ��Ʈ�� (��¯) į�� (CXR)",
	"�ĸ� (PARI)","�θ� (ROME)","���� (LOND)","�ٸ����γ� (BCN)","�̽�ź�� (ISTA)","���𺸽���ũ (VVO)"];
         $("#autocomplete2").autocomplete({
            source: autocomplete_text
         });
})

$(function() {
    $( "#testDatepicker" ).datepicker({
    });
});
$(function() {
    $( "#testDatepicker2" ).datepicker({
    });
});
	$(document).ready(function() {
		//����� ���
		var $banner = $(".banner").find("ul");

		var $bannerWidth = $banner.children().outerWidth();//��� �̹����� ��
		var $bannerHeight = $banner.children().outerHeight(); // ����
		var $bannerLength = $banner.children().length;//��� �̹����� ����
		var rollingId;

		//������ �ʸ��� �Լ� ����
		rollingId = setInterval(function() { rollingStart(); }, 3500);//���� �̹����� �Ѹ� �ִϸ��̼� �� �ð���
		function rollingStart() {
			$banner.css("width", $bannerWidth * $bannerLength + "px");
			$banner.css("height", $bannerHeight + "px");
			//alert(bannerHeight);
			//����� ���� ��ġ�� �Ű� �ش�.
			$banner.animate({left: - $bannerWidth + "px"}, 3000, function() { //���ڴ� �Ѹ� ����Ǵ� �ð��̴�.
				//ù��° �̹����� ������ ���� ����(�̵��� �ƴ϶� ����)�ؼ� �߰��Ѵ�.
				$(this).append("<li>" + $(this).find("li:first").html() + "</li>");
				//�ڷ� ����� ù���� �̹����� �ʿ� ������ �����Ѵ�.
				$(this).find("li:first").remove();
				//���� �������� ���ؼ� ��� ������ ��ġ���� �ʱ�ȭ �Ѵ�.
				$(this).css("left", 0);
				//�� ������ �ݺ��ϸ鼭 ��� �Ѹ��ϴ� ��ʸ� ���� �� �ִ�.
			});
		}
	}); 

