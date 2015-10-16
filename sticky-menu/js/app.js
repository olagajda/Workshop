/**
 * Created by aleksandragajda on 16.10.15.
 */

$(function(){

    var menu = $("#mainMenu");
    var lastPositionTop = 0;

    $(window).scroll(function(event){

        if (menu.hasClass("sticky")===false && (menu.offset().top) < ($(this).scrollTop())){


            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");



        };

        if (menu.hasClass("sticky") && (lastPositionTop > ($(this).scrollTop()))) {

            menu.removeClass("sticky");

        }

    });


















});