$(document).ready(function() {
    $("#a").hide()
    $(window).scroll(function() {
        var t = $(this).scrollTop()
        if (t >= 100)
            $("#a").show(500)
        else
            $("#a").hide(500)
    })

    $("#a").click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 1000)
    })
    $(".right").hide()
    $(window).scroll(function() {
        var t = $(this).scrollTop()
        if (t >= 270 && t <= 27500)
            $(".right").show(0)
        else
            $(".right").hide(0)
    })
    
    $("#anhien").click(function(){
        $("#anhien2").slideToggle(0);
    })

    $("#nav").hide()
    $(window).scroll(function() {
        var a = $(this).scrollTop()
        if (a >= 310)
            $("#nav").show(0)
        else
            $("#nav").hide(0)
    })
})
