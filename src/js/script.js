
/*переключение влкадок и подробности*/
$(document).ready(function () {
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content')
            .removeClass('catalog__content_active')
            .eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide (item) {
        $(item).each(function (i){
            $(this).on('click', function (e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal window (модальные окна)

    $("[data-modal=consultation]").on('click',function(){
        $('.overlay, #consultation').fadeIn('slow');

    });
    $('.modals__close').on('click',function (){
        $(".overlay, #consultation,#thanks,#order").fadeOut('slow');
    });


    $('.button_mini').each(function (i){
        $(this).on('click',function(){
            $('#order .modals__desc').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
/**Валидация форм*/
    function validate(form){
        $(form).validate({
            rules:{
                name: "required",
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Пожалуйста введите свое имя",
                phone: "Пожалуйста введите свой номер телефона",
                email: {
                    required: "Пожалуйста введите свою почту",
                    email: "Введите правильно почту, пример -> name@domain.com"
                }
            }
        });
    }

    validate('#consultation-form');
    validate('#consultation form');
    validate('#order form');
/*маска для инпута с телефоном*/
    $('input[name=phone]').mask("(099) 999-99-99");
/***ajax отправка формы на имейл локально***/
    $('form').submit(function (e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url:"mailer/smart.php",
            data: $(this).serialize()
        }).done(function (){
            $(this).find("input").val("");
            $('#consultation,#order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset')
        });
        return false;
    })
/**Плавнй сролл вверх по клике на стрелку и ее появление на середине страницы**/
    $(window).scroll(function (){
        if($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
            $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
            });
        }else{
            $('.pageup').fadeOut();
        }
    })
});

