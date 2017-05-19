$(function() {

$('.bxslider').bxSlider();

// $(document).ready(function(){
// 	$("#main-menu").on("click","a", function (event) {
// 		//отменяем стандартную обработку нажатия по ссылке
// 		event.preventDefault();

// 		//забираем идентификатор бока с атрибута href
// 		var id  = $(this).attr('href'),

// 		//узнаем высоту от начала страницы до блока на который ссылается якорь
// 			top = $(id).offset().top;
		
// 		//анимируем переход на расстояние - top за 1500 мс
// 		$('body,html').animate({scrollTop: top}, 1000);
// 	});
// });

// $(document).ready(function(){
//  $(window).scroll(function(){
// if ($(this).scrollTop() > 100) {
// $('.scrollup').fadeIn();
// } else {
// $('.scrollup').fadeOut();
// }
// });
 
// $('.scrollup').click(function(){
// $("html, body").animate({ scrollTop: 0 }, 600);
// return false;
// });
 
// });

// //E-mail Ajax Send
// 	//Documentation & Example: https://github.com/agragregra/uniMail
// 	$("ffs").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
// 			setTimeout( function() {
// 				$(th).find('.success').removeClass('active').fadeOut();
// 				th.trigger("reset");
// 			}, 3000);
// 		});
// 		return false;
// 	});


  // $(window).on("load",function(){
  	// $(document).ready(function(){
    $("a[rel='m_PageScroll2id'], .scroll-to-top").mPageScroll2id({
    	scrollSpeed: 900,
    	scrollEasing: "easeInOutQuart",
    	offset:0

    });
  // });

  $("#send-email").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#send-email").trigger("reset");
		});
		return false;
	});

	$(window).scroll(function() {
		if ($(this).scrollTop()+100 > $(this).height()) {
			$('.scroll-to-top').addClass('active');
		} else {
			$('.scroll-to-top').removeClass('active');
		}
	});
	$('scroll-to-top').click(function(){
		$('html, body').stop().animate(
			{scrollTop:0}, 'slow', 'swing');
	});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

});