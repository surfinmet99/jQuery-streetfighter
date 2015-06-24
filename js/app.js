$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		mouseover = true;
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
		mouseover = false;
	})
	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});

$(document).keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
});
	
$(document).keyup(function(e) {
		if (e.keyCode == 88) {
			if(mouseover == false) {
				$('.ryu-still').show();
				$('.ryu-cool').hide();
				$('.ryu-ready').hide();
			}
			if(mouseover == true) {
				$('.ryu-ready').show();
				$('.ryu-still').hide();
				$('.ryu-cool').hide();
			}
		}
});


function playHadouken () {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}