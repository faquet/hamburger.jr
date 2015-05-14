$(function() {

	
	$(document).on('keypress', '#input-chatbox', function(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			requestUser();
		}
	})


});

var template = _.template($('#chatbox-message-template').html());

function sendMessage(user) {
	var $input = $('#input-chatbox').val();
	var messagesRef = ref.child('messages');
	var data = {sender: user, message: $input};
  messagesRef.push({
    sender: user,
    message: $input
  }, function(error) {
  	if (error) {
  		console.log(error) 
  	} else {
  		console.log('new message created');
  	}
  });
  
  
	$('.chatbox-content').append(template(data));
}
