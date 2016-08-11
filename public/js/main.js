$.ajax({
  url: '/parent'
}).done(function(response) {
  $('#username').html(response.parent[0].username)
})
