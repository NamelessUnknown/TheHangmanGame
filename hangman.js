var solution = "bez pracy nie ma kolaczy";

var amountOfLetters = solution.length;

var hiddenSolution = "";
//split na koniec
for(i = 0; i<=amountOfLetters; i++){
	solution.charAt(i)==" "? hiddenSolution += " " : hiddenSolution += "-";
}

function write_password()
{
	document.getElementById('letterGrid').innerHTML = hiddenSolution;
} 

window.onload = start;

var letters = new Array (35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ź";
letters[34] = "Ż";



function start() {

	var alphabetGrid ="";



	for (i = 0; i < 35; i++){
		alphabetGrid += '<section class="letter">'+letters[i]+'</section>';
	}

	document.getElementById("alphabet").innerHTML=alphabetGrid;
	write_password();
}




