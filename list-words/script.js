var words = ["A","B","C","D","E","F","G","H","I","J","k","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
$("button").click(function(){
    $(".character").text(words[[Math.floor(Math.random() * 26)]]);
    var c = $(".character").text();
    $(".input input").attr("placeholder",`Enter a word starting from ${c}`);
    $(".show").append(`${$(".input input").val()}<br>`);
    $(".input input").val(null);
})
