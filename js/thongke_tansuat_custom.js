var view_state = true;
window.__cfRLUnblockHandlers = true;
$(document).ready(function () {
    $("#date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-16y" });
    link_selector_dpicker($("form#main_form select#code"), $("form#main_form #date"));
    disable_combine("mb", $("form#main_form input#date"));
    $("#date").datepicker("update", "16-01-2021");
    $('#count').TouchSpin({min:1,max:300,step:1,postfix:' ngày', buttondown_class: "btn btn-default", buttonup_class: "btn btn-default"});
    $("#change_view").click(function () {
        $("#change_view").toggleClass("btn-warning");
        $("#change_view").toggleClass("btn-success");
        view_state = !view_state;
        if (view_state) {
            $("#change_view").text("Xem theo chiều ngang");
            $("#normtable").show();
            $("#transtable").hide();
        } else {
            $("#change_view").text("Xem theo chiều dọc");
            $("#normtable").hide();
            $("#transtable").show();
        }
        if (Cookies.get(tslt_se_cookie) != undefined) {
            showing_selected = all_numbers;
            set_selected(JSON.parse(Cookies.get(tslt_se_cookie)));
            console.log("Restored view from cookie");
        } else {
            set_view(0);
            console.log("Set all view");
        }
    });
});
