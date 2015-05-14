$(function() {

	$(document).on('keypress', '#input-chatbox', function(e) {
		if (e.keyCode === 13) {
		e.preventDefault();
		console.log('we got message!');
		requestUser();
		}
	})


});

function sendMessage(user) {
	var $input = $('#input-chatbox').val();
	var messagesRef = ref.child('messages');

  messagesRef.push({
    sender: user,
    message: $input
  }, onComplete);

}
