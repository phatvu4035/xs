var fade_duration = 500;
$(document).ready(function () {
    $("#begin_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-16y" });
    link_selector_dpicker($("form#main_form select#code"), $("form#main_form input#begin_date"));
    disable_combine("mb", $("form#main_form input#begin_date"));
    $("#begin_date").datepicker("update", "20-12-2020");
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-17y" });
    link_selector_dpicker($("form#main_form select#code"), $("form#main_form input#end_date"));
    disable_combine("mb", $("form#main_form input#end_date"));
    $("#end_date").datepicker("update", "19-01-2021");
    $(".emphasis2").each(function () {
        $(this).html(
            $(this)
                .html()
                .substr(0, $(this).html().length - 2) +
            "<span style='font-size:17px;' class='dosam'>" +
            $(this).html().substr(-2) +
            "</span>"
        );
    });
    $("table#dacbiettuan td").click(function () {
        $(this).toggleClass("act");
    });

    $("#first-digit-switch").change(function () {
        console.log($(this).onstyle);
        if ($(this).prop("checked")) $("span.first-digit").fadeIn(fade_duration);
        else $("span.first-digit").fadeOut(fade_duration);
    });
    $("#last-digit-switch").change(function () {
        if ($(this).prop("checked")) $("span.last-digit").fadeIn(fade_duration);
        else $("span.last-digit").fadeOut(fade_duration);
    });
    $("#last-2-switch").change(function () {
        if ($(this).prop("checked")) $("span.last-2-digit").fadeIn(fade_duration);
        else $("span.last-2-digit").fadeOut(fade_duration);
    });
    $("#sum-switch").change(function () {
        if ($(this).prop("checked")) $("span.sum-2-digit").fadeIn(fade_duration);
        else $("span.sum-2-digit").fadeOut(fade_duration);
    });
});
