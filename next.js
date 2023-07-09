(function($){
'use strict'
//code start
$('.mobile-menu-icon').on('click',function(){
$('.mobile-menu').slideToggle();


});
$(window).resize(function(){
var secreensize = $(window).width();
if(secreensize > 991){
   $('.mobile-menu').removeAttr('style');
}
});
$('.mobile-menu li').on('click',function(){
$('.mobile-menu').slideUp();


});
$(window).scroll(function(){
var scrollbar = $(window).scrollTop();
if(scrollbar > 530){
 $('.clicktop').fadeIn();
}else{
$('.clicktop').fadeOut();
}

});
$('.clicktop').on('click',function(){
$('html').animate({

scrollTop:0,
 
});
});





})(jQuery);