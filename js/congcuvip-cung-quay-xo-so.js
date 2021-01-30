function start_cungquay() {
    $("[rs_len]").each(function (index, value) {
        $(value).addClass("rolling");
    });
    $("#start").click(function () {
        return stop_cungquay();
    });
    $("#starticon").removeClass("fa fa-play");
    $("#starticon").addClass("fa fa-square");
    $("#start").removeClass("btn-primary");
    $("#start").contents().last()[0].textContent = " Dừng lại";
    $("#start").addClass("btn-danger");
    return false;
}
function stop_cungquay() {
    $("[rs_len]").each(function (index, value) {
        $(value).removeClass("rolling");
    });
    $("#start").click(function () {
        return start_cungquay();
    });
    $("#starticon").removeClass("fa fa-square");
    $("#starticon").addClass("fa fa-play");
    $("#start").removeClass("btn-danger");
    $("#start").contents().last()[0].textContent = " Bắt đầu";
    $("#start").addClass("btn-primary");
    return false;
}
$(document).ready(function () {
    $("#speed").change(function () {
        quay_interval = $("#speed").val();
    });
    $("#start").click(function () {
        return start_cungquay();
    });
});
