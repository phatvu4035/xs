$(document).ready(function () {
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-16y" });
    $("#end_date").datepicker("update", "20-01-2021");
    $('#count').TouchSpin({min:1,max:300,step:1,postfix:' ngày', buttondown_class: "btn btn-default", buttonup_class: "btn btn-default"});
    $(".btn").tooltip();
});