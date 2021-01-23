$(document).ready(function () {
    $("#begin_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "2018-01-01" });
    $("#begin_date").datepicker("update", "15-01-2021");
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-20y" });
    $("#end_date").datepicker("update", "22-01-2021");
    $(".btn").tooltip();
});