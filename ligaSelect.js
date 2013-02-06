/**
 * Created with JetBrains PhpStorm.
 * User: misha
 * Date: 01.02.13
 * Time: 18:10
 * To change this template use File | Settings | File Templates.
 */

$.fn.ligaSelect = function(options){
    var options = $.extend({
        optionHead: 'Выберите вариант'
    }, options);



    this.hide();

    // Создание html-каркаса для select'a
    this.before('<div class="ligaSelect"></div>');
    this.prev().html('<div class="selectPanel"><div class="selectArrow"><div class="triangle"></div></div><div class="selectOption">'+ options.optionHead +'</div></div>');
    this.prev().append('<ul class="selectOptions"></ul>');

    // Подстановка списка option из select'a в список UL
    this.children('option').each(function(){
        var optionVal = $(this).val();
        $(this).parent().prev().find('.selectOptions').append('<li>' + optionVal + '</li>');
    });

    // Выборка активности у select'a. Выбор значения и передача значения в заголовок
    $('.ligaSelect .selectOptions').on('click', 'li', function(){
        var current = $(this);
        var indexN = current.index();
        var select = current.parents('.ligaSelect').next();
        var optionVal = current.text();

        // Выборка активности у select'a.
        select.find('option').removeAttr('selected');
        select.find('option:eq(' + indexN + ')').attr('selected', 'selected');

        // Выбор значения и передача значения в заголовок
        current.parents('.ligaSelect').find('.selectOption').text(optionVal);

        current.parent().hide();

    });

    $('.ligaSelect .selectPanel').on('click', function(event){
        $('.ligaSelect .selectOptions').hide();
        $(this).next().show();
        event.stopPropagation();
    });


    $('body').click(function(event){
        $('.ligaSelect .selectOptions').hide();
    });
};

