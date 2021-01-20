function week_number_select(num_of_week) {
    if (num_of_week == undefined || isNaN(num_of_week)) {
        return false;
    }
    $("tr.result_row")
        .filter(function () {
            return parseInt($(this).attr("weekindex")) >= num_of_week;
        })
        .hide();
    $("tr.result_row")
        .filter(function () {
            return parseInt($(this).attr("weekindex")) < num_of_week;
        })
        .show();
    return true;
}
$(document).ready(function () {
    $('#count').TouchSpin({min:1,max:300,step:1,postfix:' ngày', buttondown_class: "btn btn-default", buttonup_class: "btn btn-default"})
        .change(function () {
            var val = parseInt($(this).val());
            return week_number_select(val);
        });
    $('#headsize').TouchSpin({min:1,max:300,step:1,postfix:' ngày', buttondown_class: "btn btn-default", buttonup_class: "btn btn-default"})
        .change(function () {
            var val = parseInt($(this).val());
            $("span.result_head").each(function () {
                $(this).attr("textsize", val);
            });
        });
    $('#tailsize').TouchSpin({min:1,max:300,step:1,postfix:' ngày', buttondown_class: "btn btn-default", buttonup_class: "btn btn-default"})
        .change(function () {
            var val = parseInt($(this).val());
            $("span.result_tail").each(function () {
                $(this).attr("textsize", val);
            });
        });
    $("span.result_tail").each(function () {
        $(this).css("color", "#ff0000");
    });
    $("span.result_head").each(function () {
        $(this).css("color", "#000000");
    });
    $("input#headcolour").change(function () {
        var colour = $(this).val();
        $("span.result_head").each(function () {
            $(this).css("color", colour);
        });
    });
    $("input#tailcolour").change(function () {
        var colour = $(this).val();
        $("span.result_tail").each(function () {
            $(this).css("color", colour);
        });
    });
    $("input#bgcolour").change(function () {
        var colour = $(this).val();
        $("tr.result_row").each(function () {
            $(this).css("background-color", colour);
        });
    });
    week_number_select(50);
});
