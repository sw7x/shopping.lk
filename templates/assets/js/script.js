window.addEventListener('scrollc', function() {
    var element = document.getElementById('header-bottom'); // Replace 'yourElementId' with the actual ID of your element
    var width   = window.innerWidth || document.documentElement.clientWidth;





    if (width >= 992) {
        
        var scrolledHeight = window.scrollY;
        console.log(scrolledHeight);

        var header = document.querySelector('header');
        var headerHeight = header.offsetHeight;


        if (scrolledHeight > headerHeight) {
        //if (window.scrollY > 0) {
            element.classList.add('sticky-header');
        } else {
            element.classList.remove('sticky-header');
        }
    } else {
        element.classList.remove('sticky-header');
    }
});





window.addEventListener('scroll', stickyHeader);
window.addEventListener("load", stickyHeader);

function stickyHeader(){
    var element             = document.getElementById('header-bottom'); // Replace 'yourElementId' with the actual ID of your element
    //var quickViewElem     = document.getElementById('header-right-quick-view');
    var quickViewElem       = document.querySelector(".header-right-quick-view");
    var headerRightElem     = document.querySelector(".header-middle .header-right");


    var width   = window.innerWidth || document.documentElement.clientWidth;




    if (width >= 992) {
        
        var scrolledHeight = window.scrollY;
        console.log(scrolledHeight);

        var header = document.querySelector('header');
        var headerHeight = header.offsetHeight;


        if (scrolledHeight > headerHeight) {
        //if (window.scrollY > 0) {
            element.classList.add('sticky-header');
            quickViewElem.classList.add('show');
            headerRightElem.classList.add('invisible');
        } else {
            element.classList.remove('sticky-header');
            quickViewElem.classList.remove('show');
            headerRightElem.classList.remove('invisible');
        }
    } else {
        element.classList.remove('sticky-header');
        quickViewElem.classList.remove('show');
        headerRightElem.classList.remove('invisible');

    }
}













$('.mobile-menu-toggler').on('click', function (e) {
    $('body').toggleClass('mmenu-active');
    $(this).toggleClass('active');
    e.preventDefault();
});

$('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
    $('body').removeClass('mmenu-active');
    $('.mobile-menu-toggler').removeClass('active');
    //$('.menu-toggler').removeClass('active');
    e.preventDefault();
});


$(window).resize(function(){
    var width   = window.innerWidth || document.documentElement.clientWidth;
    if (width >= 992 && $('body').hasClass('mmenu-active')) {
        $('body').removeClass('mmenu-active');
        $('.mobile-menu-toggler').removeClass('active');
    }
});









/*============== Search Dropdown Toggle ==============*/ 
$('.search-toggle').on('click', function (e) {
    $('.header-search-wrapper').toggleClass('show');
    e.preventDefault();
});

$('body').on('click', function (e) {
    if ($('.header-search-wrapper').hasClass('show')) {
        $('.header-search-wrapper').removeClass('show');
        $('body').removeClass('is-search-active');
    }
});

$('.header-search').on('click', function (e) {
    e.stopPropagation();
});
/* ================================================== */







$('.mobile-menu').find('li').each(function () {
    var $this = $(this);

    if ($this.find('ul').length) {
        //$('<span/>', {'class': 'mmenu-btn'}).appendTo($this.children('a'));
    }
});




// Mobile Menu Toggle
$('.mmenu-btn').on('click', function (e) {
    var $parent = $(this).closest('li'),
    $targetUl = $parent.find('ul').eq(0);

    if (!$parent.hasClass('open')) {
        $targetUl.slideDown(300, function () {
            $parent.addClass('open');
        });
    } else {
        $targetUl.slideUp(300, function () {
            $parent.removeClass('open');
        });
    }

    e.stopPropagation();
    e.preventDefault();
});
