$(document).ready(function(){
	$(".lines img,.textArea,.diamonds").hide();
	$(".splash").show().fadeOut(1500);
	$(".diamonds").delay(1000).fadeIn(1500);
	$(".yellowLine,.blackLine").delay(1500).slideToggle(500);
	$(".orangeLine").delay(2000).slideToggle(500);
	$(".textArea").delay(1000).slideDown(1500);
});
function yellowBouncing(){
	$(".yellow").animate({"top":"113"});
	$(".yellow").animate({"top":"119"});
};
function stopYellowBouncing(){
	$(".yellow").animate({"top":"119"});
};
function orangeBouncing(){
	$(".orange").animate({"top":"243"});
	$(".orange").animate({"top":"237"});
};
function stopOrangeBouncing(){
	$(".orange").animate({"top":"237"});
};
function blackBouncing(){
	$(".black").animate({"top":"359"});
	$(".black").animate({"top":"353"});
};
function stopBlackBouncing(){
	$(".black").animate({"top":"353"});
};
