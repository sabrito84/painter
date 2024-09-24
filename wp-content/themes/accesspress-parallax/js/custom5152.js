jQuery(document).ready(function ($) {
    $('#main-slider .bx-slider').slick({
        slidesToShow: 1,
        dots: JSON.parse(ap_params.accesspress_show_pager),
        speed: ap_params.accesspress_slider_speed,
        arrows: JSON.parse(ap_params.accesspress_show_controls),
        autoplaySpeed: ap_params.accesspress_slider_pause,
        autoplay: JSON.parse(ap_params.accesspress_auto_transition),
        fade: JSON.parse(ap_params.accesspress_slider_transition),
        infinite: true
    });

    var headerHeight = $('#masthead').outerHeight();
    $('#go-top, .next-page').localScroll({
        offset: {
            top: -headerHeight
        }
    });

    $(window).resize(function () {
        var winHeight = $(window).height();
        var headerHeight = $('#masthead').outerHeight();
        $('#main-slider.full-screen-yes .main-slides').height(winHeight - headerHeight);
    }).resize();

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('#go-top').fadeIn();
        } else {
            $('#go-top').fadeOut();
        }
    });

    $('.main-navigation .single-page-nav.nav, .main-navigation .menu').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 1500,
        scrollOffset: headerHeight,
        scrollThreshold: 0.5,
    });

    $('.single-page-nav.nav a').click(function () {
        $('.single-page-nav.nav').hide();
    });

    $(window).resize(function () {
        var headerHeight = $('#masthead').outerHeight();
        $('.parallax-on #content').css('padding-top', headerHeight);
    }).resize();

    $('.team-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.team-slider'
    });

    $('.team-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.team-content',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0,
        infinite: true,
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.testimonial-slider').slick({
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 8000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        dots: false,
        prevArrow: '<i class="fa fa-angle-left"></i>',
        nextArrow: '<i class="fa fa-angle-right"></i>',
    });

    $(window).bind('load', function () {
        $('.googlemap-content').hide();
    });

    var open = false;
    $('.googlemap-toggle').on('click', function () {
        if (!open) {
            open = true;
        }
        $('.googlemap-content').slideToggle();
        $(this).toggleClass('active');
    });

    $('.social-icons a').each(function () {
        var title = $(this).attr('data-title')
        $(this).find('span').text(title);
    });

    $('.gallery-item a').each(function () {
        $(this).addClass('fancybox-gallery').attr('data-lightbox-gallery', 'gallery');
    });

    $(".fancybox-gallery").nivoLightbox();

    $('body').on('click keypress','.menu-toggle',function (e) {
        e.preventDefault();
        $(this).next('ul').slideToggle();
    });

    $("#content").fitVids();

    $(window).on('load', function () {
        $('.parallax-section, .ap-parallax .elementor-element, .ap-parallax .elementor-column-wrap').jarallax({
            speed: 0.2
        });
    });
    var $window       = $( window );
        var lastScrollTop = 0;
        var $header       = $( '#masthead' );
        var headerBottom  =  $( '#masthead' ).outerHeight( true );
        $window.on('scroll', function() {
            var windowTop  = $window.scrollTop();
            // Add custom sticky class 
            if ( windowTop >= headerBottom ) {
                $header.addClass( 'ap-fixed' );
            } else {
                $header.removeClass( 'ap-fixed' );
                $header.removeClass( 'show-nav' );
            }
            // Show/hide
            if ( windowTop > headerBottom && windowTop < lastScrollTop ) {
                $header.addClass( 'show-nav' );
            } else {
                $header.removeClass( 'show-nav' );
            }
            lastScrollTop = windowTop;
        });


    // *only* if we have anchor on the url
    if (window.location.hash) {

        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - headerHeight
        }, 1000);

    }


    $(window).resize(function () {
        var socialHeight = $('.social-icons').outerHeight();
        $('.social-icons').css('margin-top', -(socialHeight / 2));
    }).resize();

});