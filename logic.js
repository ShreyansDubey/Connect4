console.log('connected');
var column1 = $('.cell1');
var column2 = $('.cell2');
var column3 = $('.cell3');
var column4 = $('.cell4');
var column5 = $('.cell5');
var column6 = $('.cell6');
var column7 = $('.cell7');

//Ask for the names of the players
var player1 = prompt('Player 1 : ');
var player2 = prompt('Player 2 : ');

$('#player_one_info').text('Player 1 : ' + player1);
$('#player_two_info').text('Player 2 : ' + player2);

var game_board = [column1, column2, column3, column4, column5, column6, column7];
var turn = 'blue';              //Blue starts the game
var cells_filled = [5, 5, 5, 5, 5, 5, 5];
var default_color = game_board[0].eq(0).css('background-color');

$('#turn_indicator').text(player1 + '\'s (blue) turn');

//functions to fill up the cells

column1.click(function () {
	console.log('clicked');
	game_board[0].eq(cells_filled[0]).css('background-color', turn);
	cells_filled[0]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#turn_indicator').text('');
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			return;
		}
		else{
			$('#turn_indicator').text('');
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			return;
		}
	}
});

column2.click(function () {
	console.log('clicked');
	column2.eq(cells_filled[1]).css('background-color', turn);
	cells_filled[1]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			$('#turn_indicator').text('');
			return;
		}
		else{
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			$('#turn_indicator').text('');
			return;
		}
	}
});

column3.click(function () {
	console.log('clicked');
	column3.eq(cells_filled[2]).css('background-color', turn);
	cells_filled[2]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			$('#turn_indicator').text('');
			return;
		}
		else{
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			$('#turn_indicator').text('');
			return;
		}

	}
});

column4.click(function () {
	console.log('clicked');
	column4.eq(cells_filled[3]).css('background-color', turn);
	cells_filled[3]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			$('#turn_indicator').text('');
			return;
		}
		else{
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			$('#turn_indicator').text('');
			return;
		}

	}
});

column5.click(function () {
	console.log('clicked');
	column5.eq(cells_filled[4]).css('background-color', turn);
	cells_filled[4]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			$('#turn_indicator').text('');
			return;
		}
		else{
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			$('#turn_indicator').text('');
			return;
		}

	}
});

column6.click(function () {
	console.log('clicked');
	column6.eq(cells_filled[5]).css('background-color', turn);
	cells_filled[5]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			$('#turn_indicator').text('');
			return;
		}
		else{
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			$('#turn_indicator').text('');
			return;
		}

	}
});

column7.click(function () {
	console.log('clicked');
	column7.eq(cells_filled[6]).css('background-color', turn);
	cells_filled[6]--;
	if(turn == 'red'){
		turn = 'blue';
		$('#turn_indicator').text(player1 + '\'s (blue) turn');
		$('body').css('background-color','rgba(0,0,255,0.2)');
	}

	else{
		turn = 'red';
		$('#turn_indicator').text(player2 + '\'s (red) turn');
		$('body').css('background-color','rgba(255,0,0,0.2)');
	}

	var chk = connect_4_check();
	if(chk == 'rgb(0, 0, 255)' || chk == 'rgb(255, 0, 0)'){
		console.log(chk);
		if(chk == 'rgb(0, 0, 255)'){
			$('#winner_indicator').text(player1 + ' (blue) wins!!');
			$('#turn_indicator').text('');
			return;
		}
		else{
			$('#winner_indicator').text(player2 + ' (red) wins!!');
			$('#turn_indicator').text('');
			return;
		}

	}
});

//function to check if the any player has connected 4, this is called after each turn

function connect_4_check(){
	// The vertical case  --Working 
	// O
	// O
	// O
	// O

	for(var i = 0; i < 6; i++){
		for(var j = 0; j < 3; j++){
			//Check for pattern
			var curr_color = game_board[i].eq(j).css('background-color');
			if(game_board[i].eq(j+1).css('background-color') == curr_color && curr_color != default_color){
				if(game_board[i].eq(j+2).css('background-color') == curr_color){
					if(game_board[i].eq(j+3).css('background-color') == curr_color){
						console.log(curr_color);
						return curr_color;
						
					}
				}
			}
		}
	}

	// The backslash case  --Working
	// O
	//  O
	//   O
	//    O

	for(var i = 0; i < 4; i++){
		for(var j = 0; j < 3; j++){
			//Check for pattern
			var curr_color = game_board[i].eq(j).css('background-color');
			if(game_board[i+1].eq(j+1).css('background-color') == curr_color && curr_color != default_color){
				if(game_board[i+2].eq(j+2).css('background-color') == curr_color){
					if(game_board[i+3].eq(j+3).css('background-color') == curr_color){
						console.log(curr_color);
						return curr_color;
					}
				}
			}
		}
	}

	// The forwardslash case  --Working
	//    O
	//   O
	//  O
	// O

	for(var i = 3; i < 7; i++){
		for(var j = 0; j < 3; j++){
			//Check for pattern
			var curr_color = game_board[i].eq(j).css('background-color');
			if(game_board[i-1].eq(j+1).css('background-color') == curr_color && curr_color != default_color){
				if(game_board[i-2].eq(j+2).css('background-color') == curr_color){
					if(game_board[i-3].eq(j+3).css('background-color') == curr_color){
						console.log(curr_color);
						return curr_color;
					}
				}
			}
		}
	}

	// The horizontal case  -- Working
	// O O O O

	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 6; j++){
			//Check for pattern
			var curr_color = game_board[i].eq(j).css('background-color');
			if(game_board[i+1].eq(j).css('background-color') == curr_color && curr_color != default_color){
				if(game_board[i+2].eq(j).css('background-color') == curr_color){
					if(game_board[i+3].eq(j).css('background-color') == curr_color){
						console.log(curr_color);
						return curr_color
					}
				}
			}
		}
	}

	return default_color;


}


