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
    $(".menu2").hide()
    $(window).scroll(function() {
        var t = $(this).scrollTop()
        if (t >= 450 && t <= 3700)
            $(".menu2").show(600)
        else
            $(".menu2").hide(0)
    })
    $("#nav").hide()
    $(window).scroll(function() {
        var a = $(this).scrollTop()
        if (a >= 450)
            $("#nav").show(0)
        else
            $("#nav").hide(0)
    })

})

