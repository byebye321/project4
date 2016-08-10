$.ajax({
  url: '/sitter'
}).done(function(response) {
  $('#username').html(response.sitter[0].username)
})
