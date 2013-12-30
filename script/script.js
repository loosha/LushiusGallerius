/**
 * Created by eyalz on 25/12/13.
 */
$(document).ready(function(){
    var place = $("#place option:selected").val(  );
    switch (place) {
        case "אילת" :
            $(".weather").html("21-40");
            break;
        case "תל אביב":
            $('.weather').html("12-31");
            break;
        case "יירושלים":
            $('.weather').html("10-25");
            break;
        default:
            $('.weather').html("Please choose location");


    }

});

