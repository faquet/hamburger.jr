$(function() {
	
	$(document).on('keypress', '#input-chatbox', function(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			requestUser();
		}
	})


});


var messagesRef = ref.child('messages');
var template = _.template($('#chatbox-message-template').html());

function sendMessage(user) {
	var $input = $('#input-chatbox').val();
  var data = messagesRef.push({
    sender: user,
    message: $input,
    timestamp: Firebase.ServerValue.TIMESTAMP
  }, function(error) {
  	if (error) {
  		console.log(error) 
  	} else {
  		console.log('new message created');
  		$('#input-chatbox').val('');
  	}
  });
  data.once('value', function(data) {
  	var model = data.val();
  	$('.chatbox-content').append(template(model));
  })
}

messagesRef.limitToLast(15).on('child_added', function(snap) {
	$('.chatbox-content').append(template(snap.val()));
});