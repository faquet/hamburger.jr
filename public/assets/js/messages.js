var messagesRef = ref.child('messages');
var template = _.template($('#chatbox-message-template').html());

$(function() {
	
	$(document).on('keypress', '.message-input', function(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			requestUser();
		}
	});

});

function sendMessage(user) {
	var $input = $('.message-input').val();
  var data = messagesRef.push({
    sender: user,
    message: $input,
    timestamp: Firebase.ServerValue.TIMESTAMP
  }, function(error) {
  	if (error) {
  		console.log(error) 
  	} else {
  		$('.message-input').val('');
  	}
  });
}

messagesRef.limitToLast(15).on('child_added', function(snap) {
	$('.chatbox-content').append(template(snap.val()));
});