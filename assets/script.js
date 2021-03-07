var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(todayDate)
	

$('.saveBtn').on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});





