const disabled_day_of_week = {};
var disabled_days = {'mb':['03-02-2000','04-02-2000','05-02-2000','06-02-2000','23-01-2001','24-01-2001','25-01-2001','26-01-2001','10-02-2002','11-02-2002','12-02-2002','13-02-2002','14-02-2002','31-01-2003','01-02-2003','02-02-2003','03-02-2003','04-02-2003','21-01-2004','22-01-2004','23-01-2004','24-01-2004','08-02-2005','09-02-2005','28-01-2006','29-01-2006','16-02-2007','17-02-2007','06-02-2008','07-02-2008','25-01-2009','26-01-2009','13-02-2010','14-02-2010','15-02-2010','16-02-2010','02-02-2011','03-02-2011','04-02-2011','05-02-2011','22-01-2012','23-01-2012','24-01-2012','25-01-2012','09-02-2013','10-02-2013','11-02-2013','12-02-2013','30-01-2014','31-01-2014','01-02-2014','02-02-2014','18-02-2015','19-02-2015','20-02-2015','21-02-2015','07-02-2016','08-02-2016','09-02-2016','10-02-2016','27-01-2017','28-01-2017','29-01-2017','30-01-2017','15-02-2018','16-02-2018','17-02-2018','18-02-2018','04-02-2019','05-02-2019','06-02-2019','07-02-2019',],};
$(function () {
    $('#left_menu').metisMenu();
    $(document).ready(function(){
        $("#smoothmenu ul li").hover(
            function() {
                $(this).children("ul").stop().slideDown(300);
            },
            function () {
                $(this).children("ul").stop().slideUp(300);
            }
        );
        
        $('#left_date').datepicker({format:'d-m-yyyy',language:'vi',endDate:new Date(),weekStart:1,todayBtn:'linked',todayHighlight:true,startDate:'-14y',daysOfWeekDisabled:[]}).on('changeDate',function(e){date_obj=e.date;new_link='/xo-so-truyen-thong.php?ngay='+("0"+date_obj.getDate()).slice(-2)+'-'+("0"+(date_obj.getMonth()+1)).slice(-2)+'-'+date_obj.getFullYear();window.location.href=new_link;
        });
        disable_combine('mb',$('div#left_date'));
        var pageUrl = new URL(window.location.href);
        var searchParams = new URLSearchParams(pageUrl.search);
        var ngay = searchParams.get("ngay");
        $('#left_date').datepicker('update',ngay);
    });
});

$(document).ready(function(){
    $('input:radio[name=mb_result_length]').change(function(){
        var new_length=$(this).val();
        result_shortern('div.result_div#result_mb','mb',new_length);
    });
});

function disable_combine(p_code,obj){
    set_disabled_days(p_code,obj);
    set_disabled_day_of_week(p_code,obj);
    return true;
}

function link_selector_dpicker(obj1, obj2) {
    obj1.change(function () {
        p_code = obj1.val();
        disable_combine(p_code, obj2);
        return true;
    });
}

function set_disabled_days(p_code,obj){
    if(p_code in disabled_days){
        obj.datepicker('setDatesDisabled',disabled_days[p_code]);
    }
}

function set_disabled_day_of_week(p_code,obj){
    if(p_code in disabled_day_of_week){
        obj.datepicker('setDaysOfWeekDisabled',disabled_day_of_week[p_code]);
    }
    return true;
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