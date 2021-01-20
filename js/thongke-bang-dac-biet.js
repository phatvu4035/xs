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
});
