function link_selector_dpicker(obj1, obj2) {
    obj1.change(function () {
        p_code = obj1.val();
        disable_combine(p_code, obj2);
        return true;
    });
}
function balloon_toggle(num) {
    if (0 == num) {
        ds = "#baloon-left";
        as = "#toggle-bl-left";
    } else if (1 == num) {
        ds = "#baloon-right";
        as = "#toggle-bl-right";
    } else {
        return false;
    }
    $(ds).toggleClass("inactive");
    $(as).text($(ds).hasClass("inactive") ? "" : "Ẩn quảng cáo");
    return true;
}
var amountScrolled = 300;
$(window).scroll(function () {
    if ($(window).scrollTop() > amountScrolled) {
        $("a.back-to-top").fadeIn("slow");
    } else {
        $("a.back-to-top").fadeOut("slow");
    }
});
$("a.back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 700);
    return false;
});
function countdown() {
    $("span.countdown").each(function (index) {
        var value_attribute_name = "value",
            finished_parent_string_attribute_name = "finished_parent_string",
            finished_parent_string = $(this).attr(finished_parent_string_attribute_name),
            current_time = $(this).attr(value_attribute_name);
        if (current_time <= 0) {
            $(this).removeClass("countdown");
            $(this).parent("a").parent("p").find("img.irc_mi").show();
            var pa = $(this).parent("a").text(finished_parent_string);
        }
        current_time--;
        var min = Math.floor(current_time / 60),
            sec = current_time - min * 60,
            min_string = ("000" + min).substr(-2),
            sec_string = ("000" + sec).substr(-2),
            countdown_string = min_string + ":" + sec_string;
        $(this).text(countdown_string);
        $(this).attr(value_attribute_name, current_time);
    });
}
$(document).ready(function () {
    setInterval(countdown, 1000);
    console.log("Ready");
});
function show_kq_modal(modal_search_string, province, date, highlight_numbers) {
    if (highlight_numbers == undefined) {
        highlight_numbers = [];
    }
    var DAY_OF_WEEK_NAME = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    var target_date_base = new Date(date),
        target_date = new Date(target_date_base.getTime() + target_date_base.getTimezoneOffset() * 60000),
        date_string = DAY_OF_WEEK_NAME[target_date.getDay()] + " ngày " + [target_date.getDate(), (target_date.getMonth() + 1).toString().padStart(2, "000"), target_date.getFullYear()].join("-");
    var site_date = [target_date.getDate(), (target_date.getMonth() + 1).toString().padStart(2, "000"), target_date.getFullYear()].join("-");
    $.post(
        "/api/ket-qua",
        { code: province, date: site_date },
        function (result_data) {
            if (result_data["err"] != 0) {
                return false;
            }
            result = result_data["result"];
            var target_base = modal_search_string + " div.modal-body .result_div#result_" + province;
            $(target_base + " span#result_date").html(date_string);
            var loto_begin_with = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [] },
                loto_special = undefined;
            for (var prize_index in result) {
                var result_data = result[prize_index];
                for (j = 0; j < result_data.length; j++) {
                    var cell_search_string = " .result_div#result_" + province + " #rs_" + prize_index + "_" + j,
                        prize_string = result_data[j],
                        final_display_string = prize_string,
                        span_class = prize_index == 0 ? "chu31" : "chu23";
                    for (var i = 0; i < highlight_numbers.length; i++) {
                        var num = highlight_numbers[i],
                            highlight_regex = new RegExp(num + "$", "g");
                        final_display_string = final_display_string.replace(highlight_regex, '<span class="' + span_class + ' mauxanh">' + num + "</span>");
                    }
                    $(cell_search_string).html(final_display_string);
                    if (!isNaN(prize_string) && prize_string.length >= 2) {
                        var num = prize_string.substr(-2, 2),
                            first_char = parseInt(num.substr(0, 1));
                        loto_begin_with[first_char].push(num);
                        if (prize_index == 0 && j == 0) {
                            loto_special = num;
                        }
                    }
                }
            }
            for (var digit = 0; digit < 10; digit++) {
                loto_begin_with[digit].sort();
                var begin_with_selector = target_base + " td#begin_with_" + digit,
                    display_string = loto_begin_with[digit].join("; "),
                    loto_special_regex = new RegExp(loto_special),
                    final_display_string = display_string.replace(loto_special_regex, '<span class="maudo">' + loto_special + "</span>");
                for (var i = 0; i < highlight_numbers.length; i++) {
                    var num = highlight_numbers[i],
                        highlight_regex = new RegExp(num, "g");
                    final_display_string = final_display_string.replace(highlight_regex, '<span class="chu19 mauxanh">' + num + "</span>");
                }
                $(begin_with_selector).html(final_display_string);
            }
            $(modal_search_string).modal("toggle");
            return true;
        },
        "json"
    );
    return;
}
var kq_region_page = ["/xo-so-mien-nam", "/xo-so-mien-trung", "/xo-so-mien-nam.php", "/xo-so-mien-trung.php"].indexOf(window.location.pathname) != -1;
function result_shortern(modal_search_string, province, new_length) {
    var full_result_attrib_name = "full-result";
    var prize_index_end = province == "mb" ? 7 : 8;
    for (var prize_index = 0; prize_index <= prize_index_end; prize_index++) {
        for (var j = 0; j < 8; j++) {
            var cell_search_string = modal_search_string + (kq_region_page ? " #" + province + "_rs_" + prize_index + "_" + j : " #rs_" + prize_index + "_" + j),
                all_target_cells = $(cell_search_string);
            if (all_target_cells.length == 0) {
                continue;
            }
            for (var k = 0; k < all_target_cells.length; k++) {
                var target_cell = $(all_target_cells[k]);
                var current_full_length = target_cell.attr(full_result_attrib_name);
                var full_result = target_cell.text();
                if (current_full_length == undefined) {
                    target_cell.attr(full_result_attrib_name, full_result);
                } else {
                    full_result = current_full_length;
                }
                var new_text = full_result.substr(-1 * new_length);
                target_cell.text(new_text);
            }
        }
    }
    var radio_button_selector = modal_search_string + ' input[type="radio"]#only_' + new_length,
        all_radio_buttons = $(radio_button_selector);
    for (var k = 0; k < all_radio_buttons.length; k++) {
        var current_button = $(all_radio_buttons[k]);
        current_button.attr("checked", "checked");
    }
    return true;
}

$(document).ready(function () {
    $("#begin_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-16y" });
    link_selector_dpicker($("form#main_form select#code"), $("form#main_form input#begin_date"));
    disable_combine("mb", $("form#main_form input#begin_date"));
    $("#begin_date").datepicker("update", "13-12-2020");
    $("#end_date").datepicker({ autoclose: true, language: "vi", format: "d-m-yyyy", weekStart: 1, endDate: new Date(), todayBtn: "linked", todayHighLight: true, startDate: "-16y" });
    link_selector_dpicker($("form#main_form select#code"), $("#end_date"));
    disable_combine("mb", $("form#main_form input#end_date"));
    $("#end_date").datepicker("update", "13-01-2021");
});