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
    $("#nav").hide()
    $(window).scroll(function() {
        var a = $(this).scrollTop()
        if (a >= 300)
            $("#nav").show(0)
        else
            $("#nav").hide(0)
    })
})
