$lines = document.querySelector(".lines");
$lines.onclick = function(){
    $ournav = document.querySelector(".links");
    $ournav.classList.toggle("show");
};



const lii = document.querySelectorAll(".link");
const sec = document.querySelectorAll("section");
onscroll = function () {
    var scrollpostion = document.documentElement.scrollTop;
    sec.forEach((section) => {
        if(
            scrollpostion >= section.offsetTop  - section.offsetHeight *0.25 &&
            scrollpostion < section.offsetTop + section.offsetHeight - section.offsetHeight *0.25

        ){
            var currentid = section.attributes.id.value;
            removeactiveclass();
            addactiveclass(currentid);
        }



    });
};

var removeactiveclass = function(){
    document.querySelectorAll("nav a").forEach((el)=> {
        el.classList.remove("active");
    });
};

var addactiveclass = function(id){
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("active");
};







(function($, window, document, undefined) {
    'use strict';

    // init cubeportfolio
    $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        loadMore: '#js-loadMore-mosaic',
        loadMoreAction: 'click',
        layoutMode: 'mosaic',
        sortToPreventGaps: true,
        mediaQueries: [{
            width: 1500,
            cols: 5,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });
})(jQuery, window, document);