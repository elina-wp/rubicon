import $ from 'jquery';
class formUiJS {
    constructor() {
        this.events();
        this.formUi();
    }

    formUi() {
        console.log('imhrere');
        $(document).on('can_embed_loaded', function () {
            // do your work here, after the widget is loaded
            $('input[name="commit"]').val('Sign My Awesome Petition');
            $('input[name="answer[first_name]"]').parents('.core_field').addClass('wrapping');
            $('input[name="answer[last_name]"]').parents('.core_field').addClass('wrapping');
            $('.wrapping').wrapAll('<div class="first_last_name"></div>');
            $('.js-d_sharing input[type=checkbox] + input').each(function () {
                $(this.nextSibling).wrap('<span></span>');
            });
            $('.control-group textarea')
                .on('focus blur', function (e) {
                    $(this)
                        .parents('.control-group')
                        .toggleClass('is-focused', e.type === 'focus' || this.value.length > 0);
                })
                .trigger('blur');
            $('.form-wrapper form input[type=submit]').wrap('<div class="submit-btn-wrapper"></div>');
            var submitValue = $('.form-wrapper form input[type=submit]').val();
            $('.form-wrapper form input[type=submit]').after('<span>'+submitValue+'</span>');
        });
    }

    events() {}
}
new formUiJS();
