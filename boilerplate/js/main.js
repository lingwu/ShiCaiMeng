$(document).ready(function () {
    $(".focus").mouseover(function () {
        $(this).children("img").show();
    }).mouseout(function () {
        $(this).children("img").hide();
    })

    //tab切换
    $(".proSlider").slide({
        titCell: ".grid-tabs li",
        mainCell: ".grid-content"
    });

    $(".producingLists li:nth-child(4n)").css("margin-right", "0px");

    $(".picFocus").slide({
        mainCell: ".bd ul",
        effect: "left"
    });
})