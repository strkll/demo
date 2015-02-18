/*
    Modal
*/
(function($){

$.fn.modal = function(opt){
    var settings;
    var createModal, closeModal;
    var body = $('body');

    settings = $.extend({
        'modal': 'jquery-modal',
        'close': 'jquery-modal-close',
        'closeText': '',
        'shade': 'jquery-modal-shade'
    }, opt);

    createModal = function(data){
        var shade, close, modal;

        shade = $('<div />', {
            class: settings.shade
        }).on('click', function(){

            closeModal(modal, shade);

        });

        close = $('<a />', {
            text: settings.closeText,
            class: settings.close,
            href: '#'
        }).on('click', function(){

            closeModal(modal, shade);

        })

        modal = $('<div />', {
            html: data,
            class: settings.modal
        }).append(close);

        body.prepend(shade, modal);

    };

    closeModal = function(modal, shade){

        shade.remove();
        modal.remove();

    };

    this.on('click', function(){
        var self = $(this);

        $.ajax({

            url: self.data('manifesto'),
            type: 'get',
            cache: false

        }).done(function(data){

            createModal(data);

        }).error(function(){

            createModal('Oopss');

        });

    });

};

})(jQuery);