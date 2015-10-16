$(function(){



    var images = $(".slider li");
    var visibleImage = 0;
    images.eq(visibleImage).show();


    images.on("click", function(event){



        images.eq(visibleImage).hide(0);




        if(event.offsetX < $(this).width()/2) {

            visibleImage--;

        }


        else {

            visibleImage++;


        }



        if( visibleImage >= images.length) {
            visibleImage = 0;
        }

        if( visibleImage < 0) {
            visibleImage = images.length-1;
        }



        images.eq(visibleImage).show(0);

    });











    //$(".right").on("click", function(event){
    //
    //    images.eq(visibleImage).hide(0);
    //    visibleImage++;
    //
    //    if( visibleImage >= images.length) {
    //        visibleImage = 0;
    //    }
    //
    //    images.eq(visibleImage).show(0);
    //
    //});
    //
    //$(".left").on("click", function(event){
    //
    //    images.eq(visibleImage).hide(0);
    //    visibleImage--;
    //
    //    if( visibleImage < 0) {
    //        visibleImage = images.length-1;
    //    }
    //
    //    images.eq(visibleImage).show(0);
    //
    //});











});