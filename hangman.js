var solution = "bez pracy nie ma kolaczy";

solution = solution.toUpperCase();
var amountOfLetters = solution.length;

var hiddenSolution = "";
//split na koniec
for(i = 0; i<amountOfLetters; i++){
	solution.charAt(i)==" "? hiddenSolution += " " : hiddenSolution += "-";
}

function write_password()
{
	document.getElementById('letterGrid').innerHTML = hiddenSolution;
} 

window.onload = start;

var letters = ["A","Ą","B", "C", "Ć","D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N","Ń", "O","Ó", "P","Q","R", "S","Ś", "T", "U", "V","W", "X", "Y", "Z", "Ź", "Ż"];

function start() {

	var alphabetGrid ="";

	for (i = 0; i < 34; i++){
		var dig = "number"+i;
		alphabetGrid += '<section class="letter" onclick="check('+i+')" id="'+dig+'">'+letters[i]+'</section>';
	}

	document.getElementById("alphabet").innerHTML=alphabetGrid;
	write_password();
}

function check(num){
var guess = false;

for(i=0; i<amountOfLetters; i++){
	if(solution.charAt(i)==letters[num]){
		hiddenSolution = hiddenSolution.reveal(i, letters[num]);
		guess=true
	}
}
if(guess==true){
	var dig = "number"+num;
	document.getElementById(dig).style.border= "3px solid green";
	document.getElementById(dig).style.color= "green";
	document.getElementById(dig).style.cursor= "default";
	write_password();
}
else{
	var dig = "number"+num;
	document.getElementById(dig).style.border= "3px solid red";
	document.getElementById(dig).style.color= "red";
	document.getElementById(dig).style.cursor= "default";
}
}

String.prototype.reveal = function(position, revelead){
	if(position > this.length-1){
	return this.toString();
}
	else{
	return this.substr(0, position) + revelead + this.substr(position + 1);
	}
}

