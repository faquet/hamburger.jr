var URL = 'https://hamburger-jr.firebaseio.com/';
var ref = new Firebase('https://hamburger-jr.firebaseio.com/');
var usersRef = ref.child("users");

username = $('.username').val();
fullName = $('.full-name').val();


function createUser() {
	usersRef.child(username).set({
  	name: fullName
	});
}