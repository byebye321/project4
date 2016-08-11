$(function() {

  //get the date that the parent input to find a sitter and put this date back into the search bodyParser
  var date = $.cookie('sitter-available-date')
  $('#searchbardate').val(date)

  $.ajax({
    url: '/sitter/available?date=' +date
  }).done(function(response){

    response.sitters.forEach(function(sitter){
      console.log(sitter);
      var element = $(
        "<div class='row sitter-hover' style='padding-top:10px;padding-bottom:10px'>" +
          "<div class='col-md-2 col-md-offset-3' style='color:#272663'>" +
          "  <img src="+ sitter.image +" class='cute-girl' width='45px'/>" +
        "</div>" +
          "<div class='col-md-3' style='color:#272663;text-align:left;margin-left:-50px'>" +
            "<p style='font-size:24px'>" +
              "<a href='/parent-sitter' style='color:#272663'>" + sitter.fullname + " </a>" +
            "</p>" +
            "<p style='margin-top:-10px'>" +
            "  <i class='fa fa-star' aria-hidden='true'></i>" +
              "<span style='color:#FF4500'>Experienced</span>" +
              "<span style='padding-left:25px'>" +
              "  <i class='fa fa-star' aria-hidden='true'></i>" +
              "  <span style='color:#FF4500'>Reliable</span>" +
            "  </span>" +
          "  </p>" +
          "</div>" +
          "<div class='col-md-3' style='margin-left:-90px;'>" +
          "  <div style='background-color:white;min-width:80px;display:inline-block'>" +
              "<span style='color:#FF4500;font-size:24px'>48</span> <br/>" +
              "Reviews" +
          "  </div>" +
          "  <div style='background-color:white;min-width:80px;display:inline-block;margin-left:20px'>" +
              "<span style='color:#FF4500;font-size:24px'>99%</span> <br/>" +
              "Ratings" +
            "</div>" +
        "  </div>" +
        "</div>"
      )

      $('#pokemon_row').append(element);
    })

  })

})
