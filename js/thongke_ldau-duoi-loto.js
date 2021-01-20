$(document).ready(function(){
    $('#date').datepicker({
        autoclose:true,
        language:'vi',
        format:'d-m-yyyy',
        endDate:new Date(),
        todayBtn:'linked',
        todayHighLight:true,
        startDate:'-19y'
    });
    $('#date').datepicker('update','09-01-2021');
    $('#count').TouchSpin({min:1,max:300,step:1,postfix:' ngày', buttondown_class: "btn btn-default", buttonup_class: "btn btn-default"});
});