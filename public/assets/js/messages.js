$(function() {

	$(document).on('keypress', '.message-input', function(e) {
		e.preventDefault();
		if (e.keyCode === 13) {
			sendMessage();
		}
	})


});

function sendMessage() {
	requestUser();
	var $input = $('.message-input').val();
	var messagesRef = ref.child('messages');

  messageRef.push({
    sender: '',
    message: $input
  });

}
