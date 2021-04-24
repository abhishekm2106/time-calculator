var ts = 0;

$('.num').keydown(function (event) {
    // check for hyphen
    if (event.which === 13) {
        event.preventDefault();
        $(this).next('.num').focus();
    }
});

$('.sm').keydown(function (event) {
    if (event.which === 13) {
        var str = "   " + Number($('#hour').val()) + "  :  " + Number($('#min').val()) + "  :  " + Number($('#sec').val())
        $("ol").append(
            "<li>" + str + "</li>"
        );

        ts += (Number($('#hour').val()) * 3600);
        ts += (Number($('#min').val()) * 60);
        ts += Number($('#sec').val());
        tmp = ts
        var hrs = Math.floor(tmp / 3600);
        tmp = tmp % 3600;
        var mints = Math.floor(tmp / 60);
        tmp = tmp % 60;
        var secs = tmp;

        var hs = hrs.toString()
        if (hs.length == 1) hs = "0" + hs;
        var ms = mints.toString()
        if (ms.length == 1) ms = "0" + ms;
        var ss = secs.toString()
        if (ss.length == 1) ss = "0" + ss;

        var out = hs + " : " + ms + " : " + ss

        $('span').text(out);


        $('.num').val("");
        event.preventDefault();
        $('#hour').focus();
    }
});

$('#reset').on('click', function () {
    ts = 0;
    var out = "00 : 00 : 00"

    $('span').text(out);

    $('li')
        .fadeOut(500, function () {
            $('li').remove();
        });
})