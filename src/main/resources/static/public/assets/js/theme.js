/*
 Theme Name: Bilogica
 Theme URI: https://psdtowpwork.com/html/bilogica/
 Author: nsstheme
 Author URI: https://themeforest.net/user/nsstheme
 Description: Bilogica - Food Store Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
 */
 
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. All Slider 
 2. Popup
 3. Search Toggle
 4. Widget Toggle
 5. Skills
 6. Funfact
 7. Back To Top
 8. Preloader
 9. Mobile Menu
 10. Fixed Header 
 11. Contact Form Submission
 12. Suffle Filter
 13. Image Transform
 14. Countdown
 */

(function ($) {
    'use strict';
    /*--------------------------------------------------------
    / 1. Init Obj
    /---------------------------------------------------------*/
    var popup_video = $('.popup_video'),
        countdown   = $('.countdown_dashboard'),
        countdown2  = $('.countdown_dashboard02'),
        countdown3  = $('.countdown_dashboard03'),
        select      = $('.search-category select');

    /*--------------------------------------------------------
    / 1. All Slider 
    /----------------------------------------------------------*/
    /*--- Hero Silder 01 ---*/
    if($(".hero-slider-01").length > 0){
       $('.hero-slider-01').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            nav: true,
            navText: ['<i class="icon-arrow-back"></i>', '<i class="icon-arrow-forward"></i>'],
            mouseDrag: false,
            autoplayTimeout: 7000,
            dots: true,
            items: 1
        });
    }
    $('[data-bg-image]').each(function() {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });

    /*--- Hero Silder 02 ---*/
    if($(".hero-slider-02").length > 0){
       $('.hero-slider-02').owlCarousel({
            autoplay: true,
            loop: true,
            margin: 0,
            animateOut: 'fadeOut',
            nav: true,
            navText: ['<i class="nss-angle-left"></i>', '<i class="nss-angle-right"></i>'],
            mouseDrag: false,
            autoplayTimeout: 6000,
            dots: false,
            items: 1
        });
    }
    $('[data-bg-image]').each(function() {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });

    /*--- Category Silder ---*/
    if($(".categorySlider01").length > 0){
       $('.categorySlider01').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 30,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="icon-arrow-back"></i>', '<i class="icon-arrow-forward"></i>'],
            dots: false,
            smartSpeed: 500,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1023: {
                    items: 4
                },
            }
        });
    }
    /*--- Product Silder ---*/
    if($(".productSlider01").length > 0){
       $('.productSlider01').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 30,
            responsiveClass: true,
            nav: true,
            navText: ['<i class="icon-arrow-back"></i>', '<i class="icon-arrow-forward"></i>'],
            dots: false,
            smartSpeed: 500,
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1023: {
                    items: 4
                },
            }
        });
    }

    /*--- Testmonial Silder ---*/
    if($(".testmonialSlider01").length > 0){
       $('.testmonialSlider01').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 30,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="icon-arrow-back"></i>', '<i class="icon-arrow-forward"></i>'],
            dots: true,
            smartSpeed: 500,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }
    if($(".testmonialSlider02").length > 0){
       $('.testmonialSlider02').owlCarousel({
            autoplay: false,
            loop: false,
            margin: 30,
            responsiveClass: true,
            nav: false,
            navText: ['<i class="icon-arrow-back"></i>', '<i class="icon-arrow-forward"></i>'],
            dots: true,
            smartSpeed: 500,
            items: 2,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    /*--------------------------------------------------------
    / 2. Popup
    /----------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    
    /*--------------------------------------------------------------------------
    / 3. All Toggler
    /------------------------------------------------------------------------*/
    $('.btn-search').on('click', function (e) {
        e.preventDefault();
        $('.popup_search_sec').toggleClass('active');
    });
    $('.popup_search_overlay').on('click', function () {
        $('.popup_search_sec').removeClass('active');
    });
    $('.popup_search_form input').on('focus', function(){
        $('.popup_search_form').addClass('focused');
    });
    $('.popup_search_form input').on('blur', function(){
        $('.popup_search_form').removeClass('focused');
    });

    $('.categoryToggle').on('click',function(e){
        e.preventDefault();
        $(this).siblings('.categorie-list').slideToggle();
        $('.categoryToggle').toggleClass('active');
    });

    /*--------------------------------------------------------------------------
    / 4. Widget Toggler
    /------------------------------------------------------------------------*/
    $('.navigator').on('click', function (e) {
        e.preventDefault();
        $('.popup_sidebar_sec').toggleClass('active');
    });
    $('.popup_sidebar_overlay, .widget_closer').on('click', function () {
        $('.popup_sidebar_sec').removeClass('active');
    });

    /*--------------------------------------------------------
    / 5. Skills
    /--------------------------------------------------------*/
    if ($(".single_skill").length > 0)
    {
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }
    /*--------------------------------------------------------
    / 6. Funfact Count
    /---------------------------------------------------------*/
    var skl = true;
    $('.timer').appear();
    $('.timer').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    /*--------------------------------------------------------
    / 7. Back To Top
    /----------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '20px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-20px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    /*--------------------------------------------------------
    / 8. Preloader
    /----------------------------------------------------------*/
    $(window).on('load', function (event) {
        $('.preloader').delay(800).fadeOut(500);
    })

    /*--------------------------------------------------------
    / 9. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    /*--------------------------------------------------------
    / 10. Fixed Header
    /----------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $(".isSticky").addClass('fixedHeader animated slideInDown');
        } else
        {
            $(".isSticky").removeClass('fixedHeader animated slideInDown');
        }
    });

    /*--------------------------------------------------------
    / 11. Contact Form Submission
    /--------------------------------------------------------*/
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr('disabled', 'disabled')
        $('.graptor_loader', this).fadeIn();
        var form_data = $this.serialize();
        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });
        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'assets/mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled');
                    $('.graptor_loader', $this).fadeOut();
                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled');
            $('.graptor_loader', $this).fadeOut();
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Errpr found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }
    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });

    /*--------------------------------------------------------
    / 12. Suffle Filter
    /--------------------------------------------------------*/
    $(window).on('load', function () {
        if ($(".shafull-container").length > 0)
        {
            var $grid = $('.shafull-container');
            $grid.shuffle({
                itemSelector: '.shaf-item',
                sizer: '.shaf-sizer'
            });
            /* reshuffle when user clicks a filter item */
            $('.shaf-filter li').on('click', function () {
                // set active class
                $('.shaf-filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
    });
    /*--------------------------------------------------------
    / 13. Nice Select
    /--------------------------------------------------------*/
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    }
    /*--------------------------------------------------------
    / 14. Countdown
    /--------------------------------------------------------*/
    if(countdown.length>0){
        var d = countdown.attr('data-day');
        var m = countdown.attr('data-month');
        var y = countdown.attr('data-year');
        countdown.countdown({
            until: new Date(y, m - 1, d),
            labels: ['y', 'm', 'w', 'd', 'h', 'm', 's'],
            format: 'DHMS'
        });
    }
    if(countdown2.length>0){
        var d = countdown2.attr('data-day');
        var m = countdown2.attr('data-month');
        var y = countdown2.attr('data-year');
        countdown2.countdown({
            until: new Date(y, m - 1, d),
            labels: ['y', 'm', 'w', 'd', 'Hours', 'Mints', 'Seconds'],
            format: 'HMS'
        });
    }

    /*if (countdown.length > 0) {
        var d = countdown.attr('data-day');
        var m = countdown.attr('data-month');
        var y = countdown.attr('data-year');
        countdown.countdown({
            until: new Date(y, m - 1, d),
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hrs', 'Min', 'Sec'],
            format: 'DHMS'
        });
    }
    if (countdown02.length > 0) {
        var d = countdown02.attr('data-day');
        var m = countdown02.attr('data-month');
        var y = countdown02.attr('data-year');
        countdown02.countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    if (countdown03.length > 0) {
        var d = countdown03.attr('data-day');
        var m = countdown03.attr('data-month');
        var y = countdown03.attr('data-year');
        countdown03.countdown({
            until: new Date(y, m - 1, d),
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
            format: 'HMS'
        });
    }
    if (countdown04.length > 0) {
        var d = countdown04.attr('data-day');
        var m = countdown04.attr('data-month');
        var y = countdown04.attr('data-year');
        countdown04.countdown({
            until: new Date(y, m - 1, d),
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs'],
            format: 'DHMS'
        });
    }*/

})(jQuery);
function searchView() {
    $('#searchViewModal').modal('show');
}