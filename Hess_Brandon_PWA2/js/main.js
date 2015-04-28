/*  
	Team Paradox Site
	Author: Brandon R. Hess
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

/* =================================== Registration Page ==================================== */

$('#join').on('click', function(e){
    e.preventDefault();
    var firstname = $('#first').val(),
        lastname = $('#last').val(),
        username = $('#username').val(),
        email = $('#email').val(),
        password = $('#password').val();
    // console.log(firstname + ' ' + lastname + ' ' + username + ' ' + email + ' ' + password);

    $.ajax({
        url: 'xhr/register.php',
        type: 'post',
        dataType: 'json',
        data: {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        },
        success: function(response) {
            if (response.error){
                alert(response.error);
            } else {
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
      $("html").css("background", "url(images/fnaf3.gif)")
      $("body").css("background-image", "url(images/left2.gif)");
      $("body").css("background-position", "center center");
      $("body").css("background-repeat", "no-repeat");
      $(".white").css("background", "#595959");
      $(".header").text("It's Me").css({"display": "block", "font-size": "2em", "-webkit-margin-before": "0.67em", "-webkit-margin-after": "0.67em", "-webkit-margin-start": "0px", "-webkit-margin-end": "0px", "font-weight": "bold"});
      // $( ".header" ).removeClass( "header" ).addClass( "glitch" );
      $("h1, .header, p, button").attr('id', 'shake');
      $("#more").css("display", "none");
      $('#secret-found')[0].play(); // plays the sound
      $("#alarm")[0].play();
      $("#bg-music").attr("id", "newID");
      
    }
  };


}).call(this);


/* ============================== Login =============================== */

$('#signinButton').on('click', function(e) {
  e.preventDefault();
  var user = $('#user').val();
  var pass = $('#pass').val();
  // Console.log("This notifies you if the password is working")
  $.ajax({
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

/* ============================== Register =============================== */

$("#signUp").click(function(e){
  e.preventDefault();
  $.get("xhr/register.php", function(){
    window.location.assign('register.html');
  });
});

/* ============================== Register signed up =============================== */

$("#join").click(function(e){
  e.preventDefault();
  $.get("xhr/register.php", function(){
    window.location.assign('admin.html');
  });
});


/* ============================== Get Projects ===================================== */

var projects = function(){    

    $.ajax({                                                                                        
        url: 'xhr/get_projects.php',                                                                
        type: 'get',                                                                                
        dataType: 'json',                                                                           
        success: function(response){                                                                
            if (response.error){                                                                    
                console.log(response.error);                                                        
            }else{
                                                                                                     
                for(var i=0, j=response.projects.length; i < j; i++) {                               
                    var result = response.projects[i];                                               

                    $(".projects").append(
                    '<div style="border: 1px solid black; padding: 10px 0 0 10px; max-height: 140px;">' +                                                                                                     
                    '<div id="sortable">' +                                   
                    " <input class='projectid' type='hidden' value='" + result.id + "'>" +   

                    " Project Name: " + result.projectName + "<br>" +                                 
                    " Project Due Date: " + result.dueDate + "<br>" +                                 
                    " Project Description: " + result.projectDescription + "<br>" +                   
                    " Project Status: " + result.status + "<br>"                                      
                    + '<button class="deletebtn"> Delete</button>'                                    
                    + '<button class="editbtn">Edit</button>'                                        
                    + '</div> <br>'                                                                  

                );

                };

                $('.deletebtn').on('click', function(e){  
                    var pid = $(this).parent().find(".projectid").val();                                  
                    console.log('test delete');                                              
                    $.ajax({                                                                 
                        url: 'xhr/delete_project.php',                                        
                        data: {                                                               
                            projectID: pid                                              
                        },                                                                    
                        type: "post",                                                        
                        dataType: "json",                                                    
                        success: function(response){                                       
                            console.log('Testing for success');     

                            if (response.error){                                             
                                alert(response.error);                                          
                            }else{                                                              
                                window.location.assign("projects.html");                        
                            }
                        }
                    });
                }); // End Delete
            }
        }
    })
};
projects();



/* ====================================== New Projects ================================== */

$('#addButton').on('click', function(e){
  e.preventDefault();
    var projName = $('#projectName').val(),
        projDesc = $('#projectDescription').val(),
        projDue = $('#projectDueDate').val(),
        status = $('input[name = "status"]:checked').prop("id");

    $.ajax({
        url: "xhr/new_project.php",
        type: "post",
        dataType: "json",
        data: {
            projectName: projName,
            projectDescription: projDesc,
            dueDate: projDue,
            status: status
        },
        success: function (response) {
            console.log('Test projects');
            if(response.error) {
                alert(response.error);
            }else{
                window.location.assign("projects.html");
             };
           }
        });
    });



/* ============================ Account Info ================================= */

var updateAcct = function(){
    console.log('Pulls user info');
    $.ajax({
        url: 'xhr/get_user.php',
        type: 'get',
        dataType: 'json',
        success: function(response){
          if(response.error){
            console.log(response.error);
          }else{
            var updatefirstname = response.user.first_name;
            var updatelastname = response.user.last_name;
            // var updateusername = response.user.user.name;
            // var updatepassword = response.user.password;
            var updateemail = response.user.email;
            $('#updatefirstname').val(updatefirstname);
            $('#updatelastname').val(updatelastname);
            // $('updateusername').val(updateusername);
            // $('updatepassword').val(updatepassword);
            $('#updateemail').val(updateemail);
          };
        }
    });

    $('#updateAcctBtn').on('click', function(e){
      e.preventDefault();
      var changedfirstname = $('#updatefirstname').val();
      var changedlastname = $('#updatelastname').val();
      var changedemail = $('#updateemail').val();

      $.ajax({
        url: 'xhr/update_user.php',
        type: 'post',
        dataType: 'json',
        data: {
          first_name: changedfirstname,
          last_name: changedlastname,
          email: changedemail,
        },
        success: function(response){
          if(response.error){
            console.log(response.error);
          }else{
            console.log('account updated');
            alert("Your Account has been Updated");
          };
        }
      });
    });
  };
    updateAcct();






























        /* ============================ Call To Aaction Btn ================================= */

        // $('.userbtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('register.html');


        /* ================================= Registration Btn =============================== */

        // $('.regBtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('register.html');
        // });

        /* ================================= Projects Btn ================================== */

        // $('.projectsbtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('projects.html');


        /* ======================================= Users Btn =============================== */

        // $('.userbtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('admin.html');


        /* ======================================= Tasks Btn =============================== */

        // $('.taskBtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('task.html');
        // });


        /* =========================== Index To Sign Up Page ================================ */

        // $('#signupbtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('projects.html');
        // });


        /* =========================== Dashboard Btn To Dashboard ============================ */

        // $('.dashboard').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('dashboard.html');
        // });


        /* ===================================== Go To Profile Page ============================= */

        // $('#profilebtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('profile.html');
        // });


        /* ===================================== Add Project Page =============================== */

        // $('.addbtn').on('click', function(e){
        //     e.preventDefault();
        //     window.location.assign('add.html');
        // });


        /* ================================== Display Username =================================== */

        $.getJSON('xhr/check_login.php', function(data){
            console.log(data);
            $.each(data, function(key, val){
                console.log(val.first_name);
                $('.userid').html('Welcome User: ' + val.first_name);
            })
        });


        //  ============================================
        //  SETUP FOR INIT



$( ".datepicker" ).datepicker();

$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();

	



















})(jQuery); // end private scope




