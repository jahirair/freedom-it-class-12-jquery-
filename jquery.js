//Focus

$(document).ready(function(){
	$("input").focus(function(){
		$(this).css("background-color","red");
	});
	$("input").blur(function(){
		$(this).css("background-color","orange");
	});
});

//On Method

$(document).ready(function(){
	$("p").on("click",function(){
		$(this).hide();
	});
});

//jQuery Event Speed

// 1 Second = 1000 Mili Second

$(document).ready(function(){
	$("#hide").click(function(){
		$("#fit").hide(2000);
	});
	$("#show").click(function(){
		$("#fit").show(4000);
	});
});


// jQuery Toggle

$(document).ready(function(){
	$("#hide_show").click(function(){
		$("#fit_slogan").toggle(2000);
	});
});

//jQuery Fade

$(document).ready(function(){
	$("#fade_in_out").click(function(){
		$("#div1").fadeToggle(2000);
		$("#div2").fadeToggle(3000);
		$("#div3").fadeToggle(5000);
	});
});

//jQuery Slide

$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle();
	});
	$("#flip_one").click(function(){
		$("#panel_one").slideToggle();
	});
	$("#flip_two").click(function(){
		$("#panel_two").slideToggle();
	});
});


//jQuery Animation

$(document).ready(function() {
	$("#click_to_animate").click(function(){
		$("#animate").animate({
			height: '200px',
			width: '200px',
			left: '300px',
			top: '800px',
		});
	});
});


// jQuery Animation Two 

$(document).ready(function() {
	$("#animate_button").click(function(){
		var cool = $("#animate_block");
		cool.animate({width:'150px'});
		cool.animate({height:'150px'},2000);
		cool.animate({width:'200px'},3000);
		cool.animate({height:'200px'},1000);
		cool.animate({width:'250px'},3000);
		cool.animate({height:'250px'},1000);
		cool.animate({left:'300px'},4000);
		cool.animate({fontSize:'40px'},5000);


	});
});


