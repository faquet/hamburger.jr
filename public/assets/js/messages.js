$(function() {

	$(document).on('keypress', '.message-input', function(e) {
		e.preventDefault();
		if (e.keyCode === 13) {
			requestUser();
		}
	})


});

function sendMessage(user) {
	var $input = $('.message-input').val();
	var messagesRef = ref.child('messages');

  messagesRef.push({
    sender: user,
    message: $input
  });
}
