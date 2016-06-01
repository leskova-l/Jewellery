$(function () {
    $("#menu").click(function () {
        $("nav.main").toggle();
    })

    var anchor = $("#top");
    $(window).on("scroll", showAnchor)
    
function showAnchor () {
    var top = $("body").scrollTop();
    if (top > 700) anchor.fadeIn(1000);
    else anchor.fadeOut(1000);
}

$(".jewelery img, .photoblog img").click(function () { // добавити стрілки вліво вправоб закрити
        $("#shadow").fadeIn();
        var src = $(this).attr("src");
        $("#shadow img").attr("src", src);
    })
})