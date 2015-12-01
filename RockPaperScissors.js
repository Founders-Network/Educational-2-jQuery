$(document).ready(function(){
	var name = prompt("What's your name?");
	$('.user-name').html(name);
	
	$('.controls button').on('click', function(){
		// clear the previous game
		$('.user-hand, .computer-hand').removeClass('bounce');
		
		var userChoice = $(this).attr('value');
		var computerChoice = makeComputerChoice();
		// change the hand icons
		$('.user-hand i').removeAttr('class').addClass('fa fa-hand-' + userChoice + '-o');
		$('.computer-hand i').removeAttr('class').addClass('fa fa-hand-' + computerChoice + '-o');
		var winner = comparePlayers(userChoice, computerChoice);
		if (winner == "User") {
			// increment user score
			var oldUserScore = parseInt($('.user-score').html());
			$('.user-score').html(oldUserScore + 1);
			// add styles
			$('.user-hand').addClass('bounce');
			$('body').css('background-color', '#A7F9AE');
		} else if (winner == "Computer") {
			// increment computer score
			var oldComputerScore = parseInt($('.computer-score').html());
			$('.computer-score').html(oldComputerScore + 1);
			// add styles
			$('.computer-hand').addClass('bounce');
			$('body').css('background-color', '#F9B7A7');
		} else {
			$('body').css('background-color', '#F9C7A7');
		}
	});
});


function makeComputerChoice() {
	// picks a random number between 1 and 3 (inclusive)
	var choice = Math.floor((Math.random() * 3) + 1);
			
	// returns the computer choice based on the random number
	if (choice == 1) {
		return "rock";
	} else if (choice == 2) {
		return "paper";
	} else {
		return "scissors";
	}
}

function comparePlayers(user, computer) {
	if (user == computer) {
		return "tie";
	} else if (user == "rock") {
		if (computer == "scissors") {
			return "User";
		} else {
			return "Computer";
		}
	} else if (user == "paper") {
		if (computer == "rock") {
			return "User";
		} else {
			return "Computer";
		}
	} else {
		if (computer == "paper") {
			return "User";
		} else {
			return "Computer";
		}
	}
}
