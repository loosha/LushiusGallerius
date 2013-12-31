// very good! :)
// $(document).ready...

//alert('yey! i was loaded!');
// ok my language was hebrew.. oops

$(document).ready(function(){

    // the DOM is ready

    // a button is clicked
    $('.kaftor').click(function() {
        // find the source of the image that was clicked
        var imgSrc = $(this)
            .find('img')
            .attr('src');

        // change main image
        $('#main-image').css('background-image', 'url(' + imgSrc + ')');
        $('#dissapear').fadeOut('fast');
    });








    // this is one way of doing it
/*
    $("#one").click(function() {
       // $(".main").toggleClass()
        $(".main").html("<p><img src='https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/298184_10150444734705973_715739271_n.jpg' width='100%' height='100%'/></p>");
    })
    $("#two").click(function() {
        $(".main").html("<p><img src='https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/298184_10150444734705973_715739271_n.jpg' width='100%' height='100%'/></p>");
    })
    $("#three").click(function() {
        $(".main").html("<p><img src='https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/298184_10150444734705973_715739271_n.jpg' width='100%' height='100%'/></p>");
    })
    $("#four").click(function() {
        $(".main").html("<p><img src='https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/298184_10150444734705973_715739271_n.jpg' width='100%' height='100%'/></p>");
    })
    $("#five").click(function() {
        $(".main").html("<p><img src='https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-frc3/298184_10150444734705973_715739271_n.jpg' width='100%' height='100%'/></p>");
    })
*/

        });

/*
var c = document.getElementById("#myCanvas");
var ctx= c.getContext();
ctx.font="30px Ariel";
ctx.strokeText("Lusha's Site", 80, 80);*/
