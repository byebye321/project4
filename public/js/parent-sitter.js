$(function () {

  var sitter_id = $.cookie("sitter-selected-id")
  $.ajax({
    url: '/sitter/'+sitter_id
  }).done(function(sitter){
    $("#sitter-name").html(sitter.fullname)
  })

//get parent id in the global scope and call parent api and set parent id to the first id
var parentId = ''
$.ajax({
  url: '/parent'
}).done(function(response){
  parentId = response.parent[0]._id
})

//when book a session button is clicked, the following function is executed
$('#bookSession').on('click', function(e){
//get the date and sitter id and make booking detail object
  var date = $.cookie('sitter-available-date')
  var sitter_id = $.cookie('sitter-selected-id')

  var booking_details = {
    parentId: parentId,
    bookedDate: date
  }
  //make AJAX request to the backend to make a booking request

  $.ajax({
    type: 'POST',
    url: '/sitter/book/' + sitter_id,
    data: JSON.stringify(booking_details),
    dataType: "json",
    contentType: "application/json;charset=UTF-8"
  }).done(function(e){
    alert("booking done" + date)
  })


})
})
