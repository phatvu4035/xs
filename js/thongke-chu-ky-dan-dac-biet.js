$(document).ready(function () {
    $("#begin_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-14y" });
    link_selector_dpicker($("form#main_form select#code"), $("form#main_form input#begin_date"));
    disable_combine("mb", $("form#main_form input#begin_date"));
    $("#begin_date").datepicker("update", "01-01-2005");
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-4y" });
    link_selector_dpicker($("form#main_form select#code"), $("form#main_form input#end_date"));
    disable_combine("mb", $("form#main_form input#end_date"));
    $("#end_date").datepicker("update", "19-02-2021");
});