var URL = 'https://hamburger-jr.firebaseio.com/';
var ref = new Firebase('https://hamburger-jr.firebaseio.com/');
var usersRef = ref.child("users");
var messagesRef = ref.child("messages");

messagesRef.on('value', function(snapshot) {
  console.log(snapshot.val());
}, function (errorObject) {
  console.log('The read failed: ' + errorObject.code);
});

ref.onAuth(function(authData) {
  if (authData) {
    console.log("Authenticated with uid:", authData.password['email']);
    var email = authData.password['email'];
    identifyUser(email);
  } else {
    console.log("Client unauthenticated.")
  }
});

function requestUser() {
	ref.getAuth(function(authData) {
	  if (authData) {
	    console.log("Authenticated with uid:", authData.password['email']);
	    var email = authData.password['email'];
	    identifyUser(email);
	  } else {
	    console.log("Client unauthenticated.")
	  }
	});	
}

function identifyUser(email) {
	usersRef.orderByChild("email").on("child_added", function(snapshot) {
  	if (email === snapshot.val().email) {
  		console.log(email + ' is logged in');
  		syncUser(snapshot.key());
  	} 
	});
}

function syncUser(username) {
	var path = URL + 'users/' + username;
	var userRef = new Firebase(path);
	userRef.on('value', function(snapshot) {
		var currentUser = snapshot.val();
		broadcastUser(username);
	});
};

function broadcastUser(user) {
	console.log(user + ' is sending a message');
}