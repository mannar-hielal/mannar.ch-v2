var $ = require('jquery');
var Isotope = require('isotope-layout');
var jQueryBridget = require('jquery-bridget');
jQueryBridget('isotope', Isotope, $);
var imagesLoaded = require('imagesloaded');
imagesLoaded.makeJQueryPlugin($);

$(function () {
    // filtering function
    var $grid = $('.portfolio__grid:not(.single-post)  .grid__main').imagesLoaded( function() {
        // init Isotope after all images have loaded
        $grid.isotope({
            itemSelector: '.article-card ',
            layoutMode: 'fitRows'
        });
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
});
