
// scroll on buttons
$(document).ready(function(){
    $('.js--scroll-to-plans').click(function(e){
     var linkHref = $(this).attr('href');
     $('html,body').animate({
       scrollTop: $('.js--section-plans').offset().top},1000);
    
        e.preventDefault();

    });

    $('.js--scroll-to-start').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.js--section-features').offset().top},1000);
       
           e.preventDefault();
   
       });
       
      //navigation scroll 
    $('.js--food-delivery').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.js--section-features').offset().top},1000);
       
           e.preventDefault();
   
       });

       $('.js--how-it-works').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.js--how').offset().top},1000);
       
           e.preventDefault();
   
       });

       $('.js-cities').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.js--the-cities').offset().top},1000);
       
           e.preventDefault();
   
       });
       $('.js--sign-up').click(function(e){
        var linkHref = $(this).attr('href');
        $('html,body').animate({
          scrollTop: $('.js--section-plans').offset().top},1000);
       
           e.preventDefault();
   
       });

       //mobile nav drop-down
       $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon =$('.js--nav-icon i');
        nav.slideToggle(200);

        if(icon.hasClass('ion-navicon-round'))
        {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round');
        }
        else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

       })

      
});


