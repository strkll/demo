/*
    Modal
*/
(function($){

$.fn.modale = function(opt){
    var settings;
    var createModale, closeModale;
    var body = $('body');

    settings = $.extend({
        'modale': 'jquery-modale',
        'close': 'jquery-modale-close',
        'closeText': '',
        'shade': 'jquery-modale-shade'
    }, opt);

    createModale = function(data){
        var shade, close, modale;

        shade = $('<div />', {
            class: settings.shade
        }).on('click', function(){

            closeModale(modale, shade);

        });

        close = $('<a />', {
            text: settings.closeText,
            class: settings.close,
            href: '#'
        }).on('click', function(){

            closeModale(modale, shade);

        })

        modale = $('<div />', {
            html: data,
            class: settings.modale
        }).append(close);

        body.prepend(shade, modale);

    };

    closeModale = function(modale, shade){

        shade.remove();
        modale.remove();

    };

    this.on('click', function(){
        var self = $(this);

        $.ajax({

            url: self.data('manifesto'),
            type: 'get',
            cache: false

        }).done(function(data){

            createModale(data);

        }).error(function(){

            createModale('Oopss');

        });

    });

};

})(jQuery);