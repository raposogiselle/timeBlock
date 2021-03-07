var todayDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(todayDate)

/*$(function(){
  
    loaddata(); //Load the saved data
    // function loadData
    function loaddata() {
        $('.textarea').html(localStorage.mydata);
    }
*/



//save to local storage
//$(document).ready(function() {

//});	

//$('.saveBtn').on('click', function(){

   // $('input[type="text"]').each(function(){    
        //var id = $(this).attr('id');
        //var value = $(this).val();
       //localStorage.setItem(id, value);

   // });   
//});
// Get data hour value
//moment().hour(Number); //

var eventList = localStorage.getItem('savedEvents');

// for (let i = 0; i < eventList.length; i++) {
//     console.log(eventList[i]);
// }

if (eventList == null) {
    console.log("NO EVENTS IN MEMORY");
    var savedEvents = [];
} else {
    var savedEvents = [];

    // push each new DESCRIPTION
    // as a STRING ELEMENT to the savedEvents
    // ARRAY

    // find a way
    // to iterate through this array and
    // set the VALUES of each TIMEBLOCK
    savedEvents.push(eventList);
}

console.log(savedEvents);

// We need to create a function that will
// be called whenever we click a "Save" button

// This function will CREATE an event
function addEvent(hour) {
    var description = document.getElementById(`data-hour-${hour}`).value;

    var event = description;

    savedEvents.push(event);

    localStorage.setItem('savedEvents', savedEvents);
}




