fade_time = 10;
$(document).ready(function () {
    $("#viewmode").change(function () {
        selected_view = $("#viewmode").val();
        console.log("Viewing: " + selected_view);
        $("div .viewpart").fadeOut(fade_time);
        $("div #" + selected_view).fadeIn(fade_time);
    });
    $("#viewmode").change();
});
