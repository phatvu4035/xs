$(document).ready(function(){
    $('#begin_date').datepicker({
        autoclose:true,
        language:'vi',
        format:'d-m-yyyy',
        endDate:new Date(),
        todayBtn:'linked',
        todayHighLight:true,
        startDate:'-19y'
    });
    $('#begin_date').datepicker('update','09-01-2021');

    $('#end_date').datepicker({
        autoclose:true,
        language:'vi',
        format:'d-m-yyyy',
        endDate:new Date(),
        todayBtn:'linked',
        todayHighLight:true,
        startDate:'-19y'
    });
    $('#end_date').datepicker('update','09-01-2021');
});