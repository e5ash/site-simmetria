var w = $(window);
var body = $('body');
var banner = $('header');
var navigation = $('#panel');
var nav = $('#navigation');
var sT = w.scrollTop();

function scrollW(){
    if ($(window).scrollTop() >= banner.height()) {
    	navigation.addClass('fixedMenu');
    }
    else{
        navigation.removeClass('fixedMenu');
    }
}
w.on("scroll", function() {
    scrollW();
});

scrollW();



$('.caret a').click(function() {
	var ul = $(this).next();
	$(this).removeAttr('href');
	ul.slideToggle(400).addClass('open');
	var i = $(this).find('i');
	i.toggleClass('rotate180');
});


$('button#sticks').click(function() {
	$(this).toggleClass('close');
	nav.slideToggle(400);
});

$('#reviews .this').slick({
	'appendArrows': $('#reviews .arrows'),
	'prevArrow': '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button">Previous</button> /',
	'nextPrev': '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button">Next</button>'
});


w.on('resize load', function() {
	
	if (w.width()>=780) {
		nav.fadeIn();
		$('button#sticks').removeClass('close');
	}
	else {
		nav.fadeOut();
		$('button#sticks').removeClass('close');
	}
});

$('#banner .icon').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
    if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
    $('html, body').animate({ scrollTop: $(scroll_el).offset().top+50 }, 1000); // анимируем скроолинг к элементу scroll_el
    }
    return false; // выключаем стандартное действие
});