

function sendMessage() {

	var $input = $('.message-input').val();
	var messagesRef = ref.child('messages');

  messageRef.push({
    sender: '',
    message: $input
  });

}
