$(function() {

	$(document).on('keypress', '#input-chatbox', function(e) {
		if (e.keyCode === 13) {
		e.preventDefault();
		console.log('we got message!');
		requestUser();
		}
	})


});

var template = _.template($('#chatbox-message-template').html());

function sendMessage(user) {
	var $input = $('#input-chatbox').val();
	var messagesRef = ref.child('messages');

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
  var model = {sender: user, message: $input};
	$('.chatbox-content').append(template(model.toJSON()));
}
