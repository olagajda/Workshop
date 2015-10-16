/**
 * Created by aleksandragajda on 16.10.15.
 */

$(function(){

    var menu = $("#mainMenu");
    var lastPositionTop = 0;
    var menuHeight = menu.height();

    $(window).scroll(function(event){

        if (menu.hasClass("sticky")===false && (menu.offset().top) < ($(this).scrollTop())){


            //scrollTop zwraca nam odległość od góry strony
            //offset zwraca odległość od elementu od góry strony


            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");

            menu.animate({
                height: (menuHeight/3).toString() +"px"
            }, 300)





        };

        if (menu.hasClass("sticky") && (lastPositionTop > ($(this).scrollTop()))) {

            menu.removeClass("sticky");
            menu.animate({
                height: (menuHeight).toString() +"px"

            }, 300)

        }

    });


















});