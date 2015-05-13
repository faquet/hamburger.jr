var URL = 'https://hamburger-jr.firebaseio.com/';
var ref = new Firebase('https://hamburger-jr.firebaseio.com/');
var usersRef = ref.child("users");



$(function() {

	$('.btn-register').on('click', function(e) {
		e.preventDefault();
		var username = $('.username-register').val();
		var name 		 = $('.name-register').val();
		var email 	 = $('.email-register').val();
		var password = $('.password-register').val();
		createUserAuth(email, password);
		createUserData(username, name, email);
	});

	$('.btn-login').on('click', function(e) {
		e.preventDefault();
		var email 	 = $('.email-login').val();
		var password = $('.password-login').val();
		loginWithPassword(email, password);
	});

});


function loginWithPassword(email, password) {
	ref.authWithPassword({
	  email: email,
	  password: password
	}, function(error, authData) {
	  if (error) {
	    $('.error-login').html("Login Failed!", error);
	  } else {
	    $('.error-login').html("Authenticated successfully with payload: " + authData);
	    window.location = '/chat'
	  }
	});
}

function createUserAuth(email, password) {
	ref.createUser({
	  email: email,
	  password: password
	}, function(error, userData) {
	  if (error) {
	    switch (error.code) {
	      case "EMAIL_TAKEN":
	        $('.error-register').html('The new user account cannot be created because the email is already in use.')
	        break;
	      case "INVALID_EMAIL":
	        $('.error-register').html('The specified email is not a valid email.');
	        break;
	      default:
	        $('.error-register').html('Error creating user: ' + error);
	    }
	  } else {
	    console.log("Successfully created user account with uid:", userData.uid);
	  }
	});
}

function createUserData(username, name, email) {
	usersRef.child(username).set({
  	name: name,
  	email: email
	}, onComplete);
}

var onComplete = function(error) {
  if (error) {
    $('.error-register').html('Synchronization failed');
  } else {
    $('.error-register').html('Synchronization succeeded');
  }
};