$(document).ready(function () {
	const search = $('.header__search-wrapper');
	const search_page = $('.search-page');
	const close_page = $('.search-page-to-close')

  search.on('click', function () {
   search_page.toggleClass('open');
 });

  close_page.on('click', function() {
   $(".search-page").removeClass('open');
 });
}); // строка поиска


$(document).ready(function () {
	const btn = $('.header__menu-button');
	const menu = $('.main-menu');
	const closer = $('.main-menu-to-close');


  btn.on('click', function () {
   menu.toggleClass('open');
   $('.body_light').toggleClass('body_blur');
 });

  closer.on('click', function() {
   $('.main-menu').removeClass('open');
   $('.body_light').removeClass('body_blur');
 });
});  // главное меню


$(document).ready(function() {
  $('.filters-title').click(function(e) {
    const currentHeader = e.currentTarget;
    $('.filters__item-config').toggleClass('rotate');
    currentHeader.nextElementSibling.classList.toggle('open');
    e.preventDefault();
  });
}); // откр фильтры


$(document).ready(function() {
  $('.filters_mobile-1').click(function() {
   $('.category_mobile').slideDown('fast');
 });
  $('.popup-to-close').click(function () {
    $('.category_mobile').slideUp('fast');
  });
});  // моб категории


$(document).ready(function() {
  $('.filters_mobile-2').click(function() {
   $('.fs_mobile').slideDown('fast');
 });
  $('.popup-to-close').click(function () {
    $('.fs_mobile').slideUp('fast');
  });
});   // моб фильтры и сортировка по клику


$(document).ready(function() {
  $('.price-trade-in').click(function() {
   $('.client-order__client-message').toggleClass('open_flex');
 });
  $('.client-order__client-message__btn').click(function () {
    $('.client-order__client-message').removeClass('open_flex');
  });
});  // trade-in блок откр


$(document).ready(function() {
  $('.catalog__item-main__btn').click(function() {
    $('.overlay').toggleClass('open');
    $('#popup-added').toggleClass('open_flex');
  });
  $('.popup-to-close').click(function () {
    $('#popup-added').removeClass('open_flex');
    $('.overlay').removeClass('open');
  });
});  // окно товар добавлен


$(document).ready(function() {
  $('.trade-in__btn').click(function() {
    $('.overlay').toggleClass('open');
    $('.popup-trade-in').toggleClass('open_flex');
  });
  $('.popup-to-close').click(function () {
    $('.popup-trade-in').removeClass('open_flex');
    $('.overlay').removeClass('open');
  });
});   // окно рассчитать трейд-ин


$(document).ready(function() {
  $('.client-order-config').click(function() {
    $('.client-order-config').toggleClass('rotate');
   $('.client-order__result-items').toggleClass('open');
 });
}); // товары в заказе откр

 $(document).ready(function() {
  $('.sorting_mobile').click(function() {
    $('.sorting_mobile-wrapper').toggleClass('hidden');
    $('.filters-wrapper').toggleClass('hidden');
    $('.sorting_mobile').css('border-bottom', 'none');
    $('.filters_mobile').css('border-bottom', '1px solid #e3e3e3');
 });
  $('.filters_mobile').click(function () {
    $('.sorting_mobile-wrapper').toggleClass('hidden');
    $('.filters-wrapper').removeClass('hidden');
    $('.sorting_mobile').css('border-bottom', '1px solid #e3e3e3');
    $('.filters_mobile').css('border-bottom', 'none');
  });
 });  // моб сортировка и фильтры переключатель

 $(document).ready(function() {
  $('.call-option__btn').click(function() {
    $('.overlay').toggleClass('open');
    $('#popup-consultation').toggleClass('open');
  });
  $('.popup-to-close').click(function () {
    $('#popup-consultation').removeClass('open');
    $('.overlay').removeClass('open');
  });
}); // кнопка заказать звонок

$(document).ready(function() {
  $('.popup-consultation__btn').click(function() {
    $('#popup-consultation').toggleClass('hidden');
    $('.popup-success').toggleClass('open');
  });
});  // мы получили ваше сообщение после заказа звонка

$(document).ready(function() {
  alert('Action!');
});