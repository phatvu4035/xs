$(document).ready(function () {
    $("table#dacbiettuan td").click(function () {
        $(this).toggleClass("act");
    });
    $(".emphasis2").each(function () {
        $(this).html(
            $(this)
                .html()
                .substr(0, $(this).html().length - 2) +
            "<span style='font-size:15px;' class='dosam'>" +
            $(this).html().substr(-2) +
            "</span>"
        );
    });
});
