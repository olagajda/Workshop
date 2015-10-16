/**
 * Created by aleksandragajda on 16.10.15.
 */


$(function(){


    var tabs = $("#tabs").find("li");
    var paragraphs = $(".par");
    var activeParagraph = 0;

    paragraphs.eq(activeParagraph).show();

    tabs.on("click", function(event){

        if (activeParagraph !== order) {
            var order = $(this).data("order");

            paragraphs.eq(activeParagraph).hide(1000, function () {
                paragraphs.eq(order).show(1000);
                activeParagraph = order;
            });
        }

    });




























});
