// import './../css/style.css';
import './../sass/style.scss';

$(function () {
    // register a service
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('/sw.js')
            .then(function () { console.log('Service Worker Registered yeah!'); });
    }
    // this will get the full URL at the address bar
    var url = window.location.href;

    // passes on every "a" tag
    $('.nav-menu__link').each(function () {
        // checks if its the same on the address bar
        if (url == (this.href)) {
            $(this).children('.menu__item').addClass('active');
        }
    });

    $('.see-more__link').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 900);
        return false;
    });

    //menu

    $('.toggle-button').click(function () {
        $(this).toggleClass('toggle-active');
        $('.overlay').toggleClass('nav-active');
    });

    //make a div clickable
    $('.portfolio__grid:not(.single-post) .article-card').click(function () {
        window.location = $(this).find('.article-card__btn').attr('href');
        return false;
    });

    // toggle filter effect on cards
    $('.article-card').hover(function () {
        $(this).find('.article-card__img').toggleClass('filter--none');
    });


    // sidebar fix in safari
    $(window).on('resize', function () {
        if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
            if ($(window).width() >= 769) {
                $('aside').addClass('fix');
            }
            if ($(window).width() >= 1024) {
                $('aside').addClass('margin--top');
            }
            else {
                $('.about__grid .grid__sidebar').removeClass('margin--top');
            }
        }
    });

    // filtering function

    var $grid = $('.portfolio__grid:not(.single-post)  .grid__main').isotope({
        itemSelector: '.article-card ',
        layoutMode: 'fitRows'
    });


    // bind filter button click
    $('.filters-button-group').on('click', '.button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        $grid.isotope({ filter: filterValue });
        // change is-checked class on buttons
        $('.button-group').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.button', function () {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    });

    // add beforeinstallprompt
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
    });

    // game
    $('.game').blockrain();
});
