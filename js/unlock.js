var stod;
var page;

$(document).ready(function()
{
location.href='javascript:document.querySelector(\'body\').webkitRequestFullScreen();';


page=1;
$("#unlock-handle").css('display','block' );
$(".waitinitbtm").removeClass('waitinitbtm').addClass('initbottom');
$("#slide-to-unlock").css('display','block');
$("#unlock-slider-wrapper").css('display','block');
$("#scrolltext").text("slide to login");
	// Set the slider to be sliding
	$("#unlock-slider").slider({
		handle: "#unlock-handle",
		animate:true,
		slide: function(e,ui)
		{
			$("#slide-to-unlock").css("opacity", 1-(parseInt($("#unlock-handle").css("left"))/120));
		},
		stop: function(e,ui)
		{
			if($("#unlock-handle").position().left == 205)
			{
				unlock();
			}
			else
			{
				$("#unlock-handle").animate({left: 0}, 200 );
				$("#slide-to-unlock").animate({opacity: 1}, 200 );
			}
		}
		}
	);
	
	var unlock = function()
	{
		loginla();return false;
	if(page=1){
	if($('input#logged').val()=="0"){
	if($("input#uid").val()==""){
		simplealert("Please fill in username","Log In");
		$("#unlock-handle").animate({left: 0}, 200 );
		$("#slide-to-unlock").animate({opacity: 1}, 200 );
		return;
	}
	if($("input#pw").val()==""){
		simplealert("Please fill in password","Log In");
		$("#unlock-handle").animate({left: 0}, 200 );
		$("#slide-to-unlock").animate({opacity: 1}, 200 );
		return;
	}
	}
	$.post('ajaxlogin.php',{ pw:$("#pw").val(),uid:$("#uid").val()}, function(data) {
	if(data=="0"){$("#unlock-top").addClass('wrongpw');
	$(".wrongpw").html('<br><p class="alertwrong">Invalid username/password combination</p>');
	$("#contentbox").addClass('wiggle');
	var asiuof=setTimeout('$("#contentbox").removeClass(\'wiggle\');',3000);
	$("p.time,p.date").css('display','none');
		$("#unlock-handle").animate({left: 0}, 200 );
		$("#slide-to-unlock").animate({opacity: 1}, 200 );
		$("#pw").val("");
	}
	if(data=="1"){
				$(".myload").css('display','block');
  document.getElementById("audioun").play();
//clearTimeout(hufhbsdfiasf);
//clearInterval(hufhbsdfiasf);
//hufhbsdfiasf=window.clearInterval(hufhbsdfiasf);
//hufhbsdfiasf=null;
stopprevent=1;
			$("#unlock-bottom").animate({bottom: -100}, 500);
			$("#unlock-top").animate({top: -180}, 500);
			$("#contentbox,span").fadeOut();

			document.querySelector('body').webkitRequestFullScreen();
			  var n = $("input:checked").length;
			win2= null	
		{
		//win2.resizeTo(9999,i);
		}//win2.blur()
window.focus()
if(location.search=="?first=1"){location.href="dashbeta.php?first=1";}else{
					location.href="dashbeta.php";
}


			$("#gameframe").load(function() {
var waittoload=setTimeout("waittoload()",1000)
			});
			}
	});

	}
	}
	
	
	// Set the date and time
setdateandtime();
});
function waittoload(){
			$("#gameframe").css('display','block');
			$("#gameframe").css('opacity',1);	$("#gameframe").css('-webkit-transform','scale(1)');
			setTimeout(function(){$("#gameframe").css('-webkit-filter','blur(0px)');		
},300)
			
			var destruct=setTimeout("destruct()",5000);
}
function ajaxregister(){
$("#regbtn").hide();
valimail=validateEmail($("#rc").val());
if($("#rd").val()==$("#rb").val()&&($("#ra").val()!="")&&($("#ra").val()!=""&&$("#rb").val()!=""&&valimail==1)){
$.get('register.php',{ pw:$("#rb").val(),email:$("#rc").val(), u:$("#ra").val()}, function(data) {
if(data!="0"){
alertcontent('iPad Simulator','0','User '+data+' sucessfully registered! Refresh the page now and start playing!','0','OK','','0','window.location.href="index.php"','0','');}
else{simplealert('Username Exist. Pick another one.','Error');$("#regbtn").show();
}
});}else{simplealert('You haven\'t filled in all of the blanks....<br> Is the username or password field filled up?<br>Is the password match?<br> Email Valid?','Oops!...');$("#regbtn").show();
}
}
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 
function register(){
$("#page1,#page3,#page4,#page0,#page5").css('display','none');
$("#page2").css('display','block');
$('.focus').removeClass('focus');
$('#registerbutton').addClass('focus');
page=2;
$("#unlock-handle").css('display','none' );
$(".initbottom").removeClass('initbottom').addClass('waitinitbtm');
$("#slide-to-unlock").css('display','none');
$("#unlock-slider-wrapper").css('display','none');
}
function login(){
page=1;
$("#page2,#page3,#page4,#page0,#page5").css('display','none');
$("#page1").css('display','block');
$('.focus').removeClass('focus');
$('#loginbutton').addClass('focus');
$("#unlock-handle").css('display','block' );
$(".waitinitbtm").removeClass('waitinitbtm').addClass('initbottom');
$("#slide-to-unlock").css('display','block');
$("#unlock-slider-wrapper").css('display','block');
}
function tutorial(){
page=3;
$("#page2,#page1,#page4,#page0,#page5").css('display','none');
$("#page3").css('display','block');
$('.focus').removeClass('focus');
$('#tutorialbutton').addClass('focus');
$("#unlock-handle").css('display','none' );
$(".initbottom").removeClass('initbottom').addClass('waitinitbtm');
$("#slide-to-unlock").css('display','none');
$("#unlock-slider-wrapper").css('display','none');
}
function faq(){
page=4;
$("#page2,#page1,#page3,#page0,#page5").css('display','none');
$("#page4").css('display','block');
$('.focus').removeClass('focus');
$('#faqbutton').addClass('focus');
$("#unlock-handle").css('display','none' );
$(".initbottom").removeClass('initbottom').addClass('waitinitbtm');
$("#slide-to-unlock").css('display','none');
$("#unlock-slider-wrapper").css('display','none');
}
function aboutus(){
page=5;
$("#page2,#page1,#page3,#page0,#page4").css('display','none');
$("#page5").css('display','block');
$('.focus').removeClass('focus');
$('#aboutbutton').addClass('focus');
$("#unlock-handle").css('display','none' );
$(".initbottom").removeClass('initbottom').addClass('waitinitbtm');
$("#slide-to-unlock").css('display','none');
$("#unlock-slider-wrapper").css('display','none');
}
function destruct(){

$('#todestruct').empty().remove();
$('video').empty().remove();
}
function setdateandtime(){
	var d_names = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var m_names = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	var d = new Date();
	var curr_day = d.getDay();
	var curr_date = d.getDate();
	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();
	var curr_hour = d.getHours();
	var curr_min = d.getMinutes();
	$(".date").text(d_names[curr_day] + ", " + m_names[curr_month] + " " + curr_date);
	
	// Adding a "0" when hours / minutes is only one character

	if(curr_min < 10)
	{
		curr_min = "0" + curr_min;
	}
	$("p.time").text(curr_hour + ":" + curr_min);
	sto=setTimeout("setdateandtime()",5000);
	}

