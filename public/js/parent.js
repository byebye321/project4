$(function () {
	$('#datetimepicker1').datetimepicker();



$.ajax({
	url: '/sitter'
}).done(function(response){

response.sitter.forEach(function(sitter){

	var element = $(
		"<div class='col-md-3'>" +
			"<div class='margin:10px'>" +
				"<img src="+ sitter.image +" class='cute-girl' width='150px' height='170px'/>" +
		"</div>"+
		"<div class='row' style='padding-top:5px'>" +
			"<div class='col-md-6 col-md-offset-2' style='color:#272663'> "+ sitter.fullname + ", 24 </div>" +

			"<div class='col-md-3' style='color:#272663; border-left:1px solid #272663; padding-left:0px; margin-left:-15px'>" +
				"99% <br /> <span style='font-size:8px'> rating </span>" +
			"</div>" +
		"</div>"
	)

$('#pokeball').append(element)
$('#pokemon').append($(element).clone())

})

})



$("#button").on('click', function(chicken){
	var date = $('#date').val().split(' ')[0];
	//
	date = date.replace("-").replace("/", "-");

	$.cookie("sitter-available-date", date);

	window.location.replace("/frontend/sitter-available.html");
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
