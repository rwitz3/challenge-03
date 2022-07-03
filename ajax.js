
$(document).ready(function(){
    $.getJSON("list.json",function(data){
        var LIST_data="";
        $.each(data,function(key,value){
                LIST_data += '<tr>';
                LIST_data += '<td>'+value.serialnumber+'</td>';
                LIST_data += '<td>'+value.product+'</td>';
                LIST_data += '<td>'+value.Quantity+'</td>';
                LIST_data += '<td>'+value.unit+'</td>';
                LIST_data += '<td>'+value.Department+'</td>';
                LIST_data += '<td>'+value.notes+'</td>';
                LIST_data += '</tr>';

        });
        $("table").append(LIST_data);
    });
});