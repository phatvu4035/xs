$(document).ready(function () {
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "01-01-2001" });
    link_selector_dpicker($("form#chuky_form select#code"), $("form#chuky_form input#end_date"));
    disable_combine("mb", $("form#chuky_form input#end_date"));
    $("#end_date").datepicker("update", "19-01-2021");
});