$(document).ready(function () {
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: "+1w", todayBtn: "linked", todayHighLight: true, startDate: "-16y" });
    $("#end_date").datepicker("update", "21-01-2021");
    $(".emphasis2").each(function () {
        $(this).html(
            $(this)
                .html()
                .substr(0, $(this).html().length - 2) +
            "<span style='font-size:16px;' class='maudo'>" +
            $(this).html().substr(-2) +
            "</span>"
        );
    });
});