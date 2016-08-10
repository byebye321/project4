$(function () {
	$('#datetimepicker1').datetimepicker();



$.ajax({
	url: '/sitter'
}).done(function(response){

response.sitter.forEach(function(sitter){

	var element = $(
		"<div class='col-md-3'>" +
			"<div class='margin:10px'>" +
				"<img src='img/sitter/steph.jpg' class='cute-girl' width='150px' height='170px'/>" +
		"</div>"+
		"<div class='row' style='padding-top:5px'>" +
			"<div class='col-md-6 col-md-offset-2' style='color:#272663'> "+ sitter.username + ", 24 </div>" +

			"<div class='col-md-3' style='color:#272663; border-left:1px solid #272663; padding-left:0px; margin-left:-15px'>" +
				"99% <br /> <span style='font-size:8px'> rating </span>" +
			"</div>" +
		"</div>"
	)

$('#pokeball').append(element)

})

})



});


				//
				// <!-- Sitters each -->

				//
				// 	<div class='row' style='padding-top:5px'>
				// 		<div class='col-md-6 col-md-offset-2' style='color:#272663'> Jane Doh, 24 </div>
				//
				// 		<div class='col-md-3' style='color:#272663; border-left:1px solid #272663; padding-left:0px; margin-left:-15px'>
				// 			99% <br /> <span style='font-size:8px'> rating </span>
				// 		</div>
				// 	</div>
				// </div> <!-- end sitter -->
