import 'popper.js';
// import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/collapse';
// import 'bootstrap-select';
// import 'bootstrap/js/dist/modal';

import GreenAudioPlayer from './audio-player';

class global {
    constructor() {
        this.events();
        this.myModal = document.getElementById('exampleModal');
        this.stickyHeader();
        this.megamenuPopup();
        this.toggleContent();
        this.audioJs();
        this.readMore();
        this.focusLabel();
        this.focusTextarea();
        if (document.documentElement.clientWidth < 580){
            this.dropdown();
        }
    }

    stickyHeader() {
        var elemBody = $('body');
        var pageHeader = $('.theme-header');
        if ($(elemBody).hasClass('home')) {
            $(pageHeader).addClass('theme-header--dark');
        }

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.theme-header').addClass('sticky');
            } else {
                $('.theme-header').removeClass('sticky');
            }
        });
    }

    megamenuPopup() {
        var siteLogo = $('.theme-header .site-logo');
        var backBtn = $('.site-logo .back-link');
        var toggleBar = $('.navbar-toggle');
        var popupMenu = $('.megamenu-popup');
        var nestedMenucontainer = $('.menu-container--nested')
        var menuContainer = $('.menu-container');
        var nestedLink = $('.menu-container > a');
        // var closePopup = $('.close-menu');
        var hamburgerSpin = $('.hamburger--spin');

        $(toggleBar).click(function () {
            // $(popupMenu).addClass('active');
            // $(hamburgerWrap).addClass('is-active');
            $(popupMenu).toggleClass('active');
            $(hamburgerSpin).toggleClass('is-active');
            $('body').toggleClass('prevent-scrolling');
            $('.theme-header').toggleClass('theme-header--nav-active');
        });

        nestedMenucontainer.on('click', function(){
            siteLogo.toggleClass('site-logo--toggle-link');
            menuContainer.toggleClass('menu-container--toggle-link');
            $(this).find('.nested-menu').toggleClass('nested-menu--toggle');
        })

        backBtn.on('click', function(){
            siteLogo.toggleClass('site-logo--toggle-link');
            menuContainer.toggleClass('menu-container--toggle-link');
            nestedMenucontainer.find('.nested-menu').each((i, e)=>{
                $(e).removeClass('nested-menu--toggle');
            })
        })
    }

    toggleContent() {
        var toggleContent = $('.toggle-text');
        var viewBtn = $('.toggleRead');
        $(viewBtn).click(function () {
            $(this).toggleClass('active');
            $(toggleContent).toggleClass('active');
        });
    }

    readMore() {
        $('.readmore').click(function () {
            $('.collapse-text').addClass('expand');
            $(this).hide();
        });
    }

    focusLabel() {
        $('.form-group input, .form-group textarea')
            .on('focus blur', function (e) {
                $(this)
                    .parents('.form-group')
                    .toggleClass('is-focused', e.type === 'focus' || this.value.length > 0);
            })
            .trigger('blur');
    }

    focusTextarea() {
        $('.control-group textarea')
            .on('focus blur', function (e) {
                $(this)
                    .parents('.control-group')
                    .toggleClass('is-focused', e.type === 'focus' || this.value.length > 0);
            })
            .trigger('blur');
    }

    // Hover Events
    hoverEvents() {
        $('.site-navigation .dropdown').hover(function (e) {
            $(this).toggleClass('dropdown-is-on', e.type === 'mouseenter');
        });
    }

    // Click Event
    clickEvents() {
        //Preventing body scroll when modal fires
        $('.form-search .form-search-reset').on('click', function (e) {
            $(this)
                .parents('.form-group')
                .toggleClass('is-focused', e.type === 'mouseout');
        });
    }

    //Audio Player
    audioJs() {
        GreenAudioPlayer.init({
            selector: '.ot-audio', // inits Green Audio Player on each audio container that has class "player"
            stopOthersOnPlay: true,
        });
    }

    events() {
        this.clickEvents();
        this.hoverEvents();
    }

    dropdown() {

        $('.filter-list .filter-list__item').click(function () {

            // opening and closing the dropdown
            var parent = $(this).closest('.filter-list');
            var is_open = parent.hasClass('open');
            if (is_open) {
                parent.removeClass('open');
            } else {
                parent.addClass('open');
            }

            // Closing dropdown on clicking elsewhere
            $(document).mouseup(function (event) {
                var target = event.target;
                var select = $('.filter-list');
                if (!select.is(target) && select.has(target).length === 0) {
                    select.removeClass('open');
                }
            });

            // var selected_value = $(this);
            // var first_li = $('.filter-list .filter-list__item:first-child');

            var filter_list = $('.filter-list .filter-list__item');
            var selected_value = $(this).html();
            var first_li = $('.filter-list .filter-list__item:first-child').html();
            $('.filter-list .filter-list__item:first-child').html(selected_value);
            $(this).html(first_li);

            if($(first_li).data('placeholder') != true && $(selected_value).data('type') != 'placeholder'){
                filter_list.each((i,e) => {
                    if($($(e).html()).data('placeholder') && i !=1){
                        let temp1 = $(filter_list[1]).html();
                        let temp2 = $(e).html();
                        $(filter_list[1]).html(temp2);
                        $(e).html(temp1);
                    }
                })
            }
        });
    }
}

export default global;
new global();
