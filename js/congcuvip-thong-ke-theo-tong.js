function generate_number_sequence(sequence_type) {
    result = [];
    for (i = 0; i < 10; i++) {
        for (j = 0; j < 10; j++) {
            number_value = i * 10 + j;
            if ((i + j) % 10 == sequence_type % 10) result.push(number_value);
        }
    }
    return result;
}
function display_qtk(sequence_type) {
    fade_period = 500;
    display_rows = generate_number_sequence(sequence_type);
    if (display_rows.length) {
        $("div#common").fadeIn(fade_period);
        $("div#by_head").fadeOut(fade_period);
        $("div#by_tail").fadeOut(fade_period);
        $("div#top15").fadeOut(fade_period);
        $("div#bottom15").fadeOut(fade_period);
        for (i = 0; i < 100; i++) {
            select_string = "tr#" + i;
            if (display_rows.indexOf(i) == -1) $(select_string).fadeOut(fade_period);
            else $(select_string).fadeIn(fade_period);
        }
    } else {
        $("div#common").fadeOut(fade_period);
        $("div#by_head").fadeOut(fade_period);
        $("div#by_tail").fadeOut(fade_period);
        $("div#top15").fadeOut(fade_period);
        $("div#bottom15").fadeOut(fade_period);
        console.log("here");
        console.log(sequence_type);
        switch (sequence_type) {
            case "9":
                $("div#by_head").fadeIn(fade_period);
                break;
            case "10":
                $("div#by_tail").fadeIn(fade_period);
                break;
            case "11":
                $("div#top15").fadeIn(fade_period);
                break;
            case "12":
                $("div#bottom15").fadeIn(fade_period);
                break;
        }
    }
}
$(document).ready(function () {
    $("#begin_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "01-01-2001" });
    $("#begin_date").datepicker("update", "01-01-2014");
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "01-01-2001" });
    $("#end_date").datepicker("update", "24-01-2021");
    $("#view_method").change(function () {
        display_qtk(this.value);
    });
    display_qtk(0);
});
