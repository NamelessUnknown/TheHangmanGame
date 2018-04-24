var words=["Aby do wiosny","Albo rybki albo akwarium","Apetyt rośnie w miarę jedzenia", "Atak jest najlepszą obroną", "Biednemu zawsze wiatr w oczy",
			"Bogatemu to i byk się ocieli","Co cię nie zabije to cię wzmocni","Co dwie głowy to nie jedna","Co komu pisane to go nie minie","Co łysemu po grzebieniu",
			"Co nie siłą to rozumem","Co ma piernik do wiatraka","Co za dużo to niezdrowo","Czego nie można zmienić to trzeba polubić","Czuć się jak ryba w wodzie",
		"Czy się stoi czy się leży jakaś forsa się należy","Dla chcącego nic trudnego","Dzieci i ryby głosu nie mają","Gdy kota nie ma myszy harcują",
		"Gdy się człowiek spieszy to się diabeł cieszy","Gdyby babcia miała wąsy to by była dziadkiem","Gdzie drwa rąbią tam wióry lecą","Gdzie dwóch się bije, tam trzeci korzysta",
		"Głupiego i bieda nie nauczy rozumu","Głupota ludzka nie ma granic","Hulaj dusza, piekła nie ma","I na równej drodze można się potknąć","Jak Kuba Bogu tak Bóg Kubie",
		"Jak pies je to nie szczeka bo mu miska ucieka","Jak sobie pościelesz tak się wyśpisz","Jak trwoga to do boga"];

var wind = new Audio("sounds/wind.mp3")
var crow = new Audio ("sounds/crow.wav")

var solution =  words[Math.floor(Math.random() * words.length)];
var fails = 1;
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

var letters = ["A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ź","Ż"];

function start() {
	var alphabetGrid ="";
	for (i = 0; i < 35; i++){
		var dig = "number"+i;
		alphabetGrid += '<section class="letter" onclick="check('+i+')" id="'+dig+'">'+letters[i]+'</section>';
	}
	document.getElementById("alphabet").innerHTML=alphabetGrid;
	write_password();
	wind.loop=true;
	wind.play()
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
	document.getElementById(dig).setAttribute("onclick", ";");
	fails ++;
	crow.play();
	var sprite = "img/hang"+fails+".png";
	document.getElementById("hangman").innerHTML='<img src="'+ sprite + '"alt=""/>';
}

if(solution == hiddenSolution){
	$("body").fadeOut( 3000 );
	setTimeout(function(){document.getElementById("mainWindow").innerHTML='<section class="ending"><span class="reset">TYM RAZEM UDAŁO CI SIĘ UCIEC OBJĘCIOM ŚMIERCI</span>' +'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span></section>';},3000)
	$("body").fadeIn( 3000 );	
}
else if(fails>=11){
	$("body").fadeOut( 3000 );
	setTimeout(function(){document.getElementById("mainWindow").innerHTML='<section class="ending"><span class="reset">KRUK CZEKAŁ NA TWOJE WISZĄCE CIAŁO</span>' +'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span></section>';},3000);
	$("body").fadeIn( 3000 );	
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

