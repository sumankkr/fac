$(document).ready(function () {

	$("#cardRadio").click(function () {

		$("#paypl").removeClass("collapse in").addClass("collapse");

	});



	$("#payplRadio").click(function () {

		$("#Card").removeClass("collapse in").addClass("collapse");

	});




// <<<<<<< HEAD
// =======
	// 	$("#reply-box").addClass("show-box");

	// 	//  $("#apply-btn").text("Send");
	// 	$("#proposal-btn").text("Send");
	// 	$("#apply-btn").attr("id", "proposal-btn"); 
		

	// });
// >>>>>>> 85554481726092b80d8aa9438fb8e90dd38b468f



	$("#userCard").click(function () {

		$("#userCard").addClass("box-border");

	});



	$('#campaignDetails').on('hidden.bs.modal', function () {

		$("#userCard").removeClass("box-border");

	});

	// $("#userCard1").click(function () {

	// 	$("#userCard1").addClass("box-border");

	// });

	// $("#userCard2").click(function () {

	// 	$("#userCard2").addClass("box-border");

	// });

	// $("#userCard3").click(function () {

	// 	$("#userCard3").addClass("box-border");

	// });

});

