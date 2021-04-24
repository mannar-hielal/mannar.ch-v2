$(document).ready(function () {
    var nav = $('.nav--main');
    var topPosition = nav.offset().top;
    var leftPosition = nav.offset().left;
    // var list=$('nav .nav__list');

    //the sticky menu on top
    $(document).on('scroll', function () {
        // console.log(list.offset().left);
        if (window.pageYOffset >= topPosition) {
            $('.nav--main').addClass('sticky');
        } else {
            $('.nav--main').removeClass('sticky');
        }
    });
    $('.text-image-block__image-item,.text-image-block__image-item2').hover(function () {
        $(this).toggleClass('blur-me');

    });


    // the interactivity on pinguin image in king penguin section
    var tooltip = $('.tooltip__dot').hover(function () {
        if ($(this).hasClass("tooltip__dot--down")) {
            $('.tooltip__third-e').toggleClass('tooltip__info').toggleClass('hide').toggleClass('tooltip__info--position-bottom');
        }
        if ($(this).hasClass("tooltip__dot--middle")) {
            $('.tooltip__second-e').toggleClass('tooltip__info').toggleClass('hide').toggleClass('tooltip__info--position-middle');
        }
        if ($(this).hasClass("tooltip__dot--top")) {
            $('.tooltip__first-e').toggleClass('tooltip__info').toggleClass('hide').toggleClass('tooltip__info--position-top');
        }
    });
    $('button').click(function () {
        $('.tooltip__third-e').toggleClass('tooltip__info').toggleClass('hide').toggleClass('tooltip__info--position-bottom');
        $('.tooltip__second-e').toggleClass('tooltip__info').toggleClass('hide').toggleClass('tooltip__info--position-middle');
        $('.tooltip__first-e').toggleClass('tooltip__info').toggleClass('hide').toggleClass('tooltip__info--position-top');
    });


    //the interactivity of slideshow section
    var counter = 1;
    //listem on clicks on the prev button
    $('.slideshow__element--next').on('click', function () {
        //move forward
        counter++;
        //if counter exceeded 3 reset it
        if (counter > 3) {
            counter = 1;
        }
        //hide all images
        $('.slideshow-container .active').removeClass('active');
        //move to the next one
        
        // show the one where the counter point to
        $('.slideshow__item'+counter).addClass('active');
        console.log(counter);  
    });

    // interactiviy on prev next button
    $('.slideshow__element--prev.tooltip__dot,.slideshow__element--next.tooltip__dot').hover(function(){
        $(this).toggleClass('animate');
    });

       //listem on clicks on the next button
       $('.slideshow__element--prev').on('click', function () {
           //move backward
        counter--;
        //if counter reached 0 set it to 3
        if (counter <= 0) {
            counter = 3;
        }
        //hide all images
        $('.slideshow-container .active').removeClass('active');

        // show the one where the counter point to
        $('.slideshow__item'+counter).addClass('active');
        console.log(counter); 
    });

    //adding interactivtiy to the menu
    $('.nav--burger').on('click',function(){
        $('.nav__list.list--inline').slideToggle();
    });
});
