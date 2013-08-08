var note = {
	so: {
		selector: "#ukulele .strings .string-so",
		audio: new Audio("audio/so.mp3"),
		top: ["11px", "9px", "10px"]
	},
	do: {
		selector: "#ukulele .strings .string-do",
		audio: new Audio("audio/do.mp3"),
		top: ["24px", "22px", "23px"]
	},
	mi: {
		selector: "#ukulele .strings .string-mi",
		audio: new Audio("audio/mi.mp3"),
		top: ["37px", "35px", "36px"]
	},
	la: {
		selector: "#ukulele .strings .string-la",
		audio: new Audio("audio/la.mp3"),
		top: ["51px", "49px", "50px"]
	}
}

$(function(){
	
	// set audio volume
	note.so.audio.volume = 1;
	note.do.audio.volume = 1;
	note.mi.audio.volume = 1;
	note.la.audio.volume = 1;
	
	// so
	$(note.so.selector).hover(function(){
		$(this)
			.animate({top:note.so.top[0]}, 0.2)
			.delay(0.1)
			.animate({top:note.so.top[1]}, 0.2)
			.delay(0.1)
			.animate({top:note.so.top[2]}, 0.2);
		note.so.audio.currentTime = 0;
		note.so.audio.play();
	});
	
	// do
	$(note.do.selector).hover(function(){
		$(this)
			.animate({top:note.do.top[0]}, 0.2)
			.delay(0.1)
			.animate({top:note.do.top[1]}, 0.2)
			.delay(0.1)
			.animate({top:note.do.top[2]}, 0.2);
		note.do.audio.currentTime = 0;
		note.do.audio.play();
	});
	
	// mi
	$(note.mi.selector).hover(function(){
		$(this)
			.animate({top:note.mi.top[0]}, 0.2)
			.delay(0.1)
			.animate({top:note.mi.top[1]}, 0.2)
			.delay(0.1)
			.animate({top:note.mi.top[2]}, 0.2);
		note.mi.audio.currentTime = 0;
		note.mi.audio.play();
	});
	
	// la
	$(note.la.selector).hover(function(){
		$(this)
			.animate({top:note.la.top[0]}, 0.2)
			.delay(0.1)
			.animate({top:note.la.top[1]}, 0.2)
			.delay(0.1)
			.animate({top:note.la.top[2]}, 0.2);
		note.la.audio.currentTime = 0;
		note.la.audio.play();
	});
});