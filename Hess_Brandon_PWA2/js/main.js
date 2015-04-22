/*  
	Your Project Title
	Author: You
*/

(function($){


/* ============================== Tooltip =============================== */

$('.masterTooltip').hover(function(){
	// Hover over code
	var title = $(this).attr('title');
	$(this).data('tipText', title).removeAttr('title');
	$('<p class="tooltip"></p>')
	.text(title)
	.appendTo('body')
	.fadeIn('slow');
}, function() {
	//  Hover out code
	$(this).attr('title', $(this).data('tipText'));
	$('.tooltip').remove();
}).mousemove(function(e) {
	var mousex = e.pageX + 20; // Get X coordnates
	var mousey = e.pageY + 10; // Get Y coordnates
	$('.tooltip')
	.css({ top: mousey, left: mousex })
});



/* ============================== Login ================================== */

$('#signinButton').click(function(){
  	var user = $('#user').val();
  	var pass = $('#pass').val();
  	console.log("This notifies you if the password is working");
  	$.ajax({
      url:'xhr/login.php',
      type: 'post',
      dataType: 'json',
      data: {
        	username: user,
        	password: pass
      },
      success:function(response){
        console.log("Test User");
        if(response.error){
          alert(response.error);
        }else{
          window.location.assign('admin.html')
        };
      }
    });
});

/* ============================== Register ================================= */

$('#register').on('click', function(){
  	var firstname= $('#first').val(),
        lastname= $('#last').val(),
        username= $('#userName').val(),
        email= $('#email').val(),
        password= $('#password').val();
  console.log(firstname+' '+lastname+' '+username+' '+email+' '+password);
  
  	$.ajax({
      	url:'xhr/register.php',
      	type: 'post',
      	dataType: 'json',
      	data: {
      			firstname: firstname,
      			lastname: lastname,
          	username: username,
          	email: email,
          	password: password
    		},
      
      	success: function(response){
          	if (response.error){
              	alert(response.error);
            }else{
              window.location.assign('admin.html');
            }
        }
    });
});

/* ============================== Go to Project page ========================= */

$('.projectsbtn').on('click', function(e) {
  		e.preventDefault();
  		window.location.assign('projects.html');
});


/* ============================== Add Modal ================================== */


$('.modalClick').on('click', function(event){
  	event.preventDefault();
  	$('#overlay')
    	.fadeIn()
    	.find('#modal')
    	.fadeIn();
});

$('.close').on('click', function(event){
  	event.preventDefault();
  	$('#overlay')
    	.fadeOut()
    	.find('#modal')
    	.fadeOut();
});

/* ============================== Fading status Option ======================== */

$('.mystatus').mouseover(function(){
  	$(this).fadeTo(100, .3);
});

$('.mystatus').mouseout(function(){
  	$(this).fadeTo(100, 1);
});

/* ============================== Template User ID ============================ */


/* ================== Tabbed Accordion for Project ============================ */

$('#tabs p').hide().eq(0).show();

$('#tabs-nav li').click(function(e) {
  e.preventDefault();
    $('#tabs p').hide();
  
      $('#tabs-nav .current').removeClass("current");
        $(this).addClass('current');
          var clicked = $(this).find('a:first').attr('href');
          
            $('#tabs ' + clicked).fadeIn('fast');
}).eq(0).addClass('current');







/* ============================== Button hover sound ========================= */

$("button").each(function(i) {if (i != 0) { 
      		$("#hover")
        	.clone()
        	.attr("id", "hover" + i)
        	.appendTo($(this).parent()); 
    	}
    		$(this).data("beeper", i);
  		})
  			.mouseenter(function() {
    		$("#hover" + $(this).data("beeper"))[0].play();
  		});
			$("#hover").attr("id", "hover0");



/* ============================== Button click sound ========================= */

		$( document ).ready(function() {
			var audio = $("#click")[0];
			$("button").mousedown(function() {
			  audio.play();
			});
		});


/* =========================== Button close/cancel sound ===================== */

		$( document ).ready(function() {
			var audio = $("#cancel")[0];
			$("span").mousedown(function() {
			  audio.play();
			});
		});




/* ============================== Konami code =============================== */

(function() {
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    code: "",
    konami: "38384040373937396665",
    pressed_key: 0,
    init: function() {
      return this.bind_events();
    },
    bind_events: function() {
      return $(document).keydown(function(e) {
        app.pressed_key = e.which || e.keyCode;
        return app.update_code();
      });
    },
    update_code: function() {
      this.code += this.pressed_key;
      return this.check_code();
    },
    check_code: function() {
      if (this.code.length === 20) {
        if (this.code === this.konami) {
          this.easter_egg();
          return this.code = "";
        } else {
          return this.code = this.code.substring(2);
        }
      }
    },
    easter_egg: function() {
      $("html, body").css("height", "100%");
      $("html").css("background", "url(http://img2.wikia.nocookie.net/__cb20150404130533/freddy-fazbears-pizza/images/4/41/FNaF3_Office_AlarmBlinking.gif)")
      $("body").css("background-image", "url(http://img2.wikia.nocookie.net/__cb20150402180052/freddy-fazbears-pizza/images/a/a5/Puppetlookingatyou.gif)");
      $("body").css("background-position", "center center");
      $("body").css("background-repeat", "no-repeat");
      $(".white").css("background", "#595959");
      $(".header").text("It's Me").css({"display": "block", "font-size": "2em", "-webkit-margin-before": "0.67em", "-webkit-margin-after": "0.67em", "-webkit-margin-start": "0px", "-webkit-margin-end": "0px", "font-weight": "bold"});
      $("#more").css("display", "none");
      $('#secret-found')[0].play(); // plays the sound
      // return alert("That's how I roll baby <3");
    }
  };


}).call(this);


/* ============================== Login =============================== */

$('#signinButton').on('click', function(e) {
  e.preventDefault();
  var user = $('#user').val();
  var pass = $('#pass').val();
  // Console.log("This notifies you if the password is working")
  $ajax({
    url:'xhr/Login.php',
    type:'post',
    dataType:'json',
    data:{
      username: user ,
      password: pass
    },
    success:function(response){
      console.log("Test User");
      if(response.error){
        alert(response.error);
      }else{
        window.location.assign('admin.html');
      };
    }
  });
});

/* ============================== Display avatar =============================== */

$.getJSON("xhr/get_user.php", function(data){
  console.log(data);
  $.each(data, function(key, val){
    console.log(val.avatar);
      // $(".avatarPhoto").html('<img src=" + val.avatar + " />' + val.avatar);
  });
});

/* ============================== Logout =============================== */

$("#logOut").click(function(e){
  e.preventDefault();
  $.get("xhr/logout.php", function(){
    window.location.assign('index.html');
  });
});


	
})(jQuery); // end private scope




