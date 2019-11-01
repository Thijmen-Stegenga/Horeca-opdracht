//Thijmen Stegenga 19A3
const FRISPRIJS = 2.00
const WIJNPRIJS = 3.00
const BIERPRIJS = 4.00	
const BITTERBAL8 = 5.00
const BITTERBAL16 = 10.00

var qtyFris = 0
var qtyWijn = 0
var qtyBier = 0
var qtyBit8 = 0
var qtyBit16 = 0
var snack = 0


var loop = false;
var loop2 = false;


while(loop == false){
 	var bestelling = prompt("Welke bestelling wilt u toevoegen?\n ) fris $2.00 \n ) wijn $3.00 \n ) bier $4.00 \n ) snack ($5.00/$10.00) \n ) typ stop om uw rekening te ontvangen").toLowerCase();
	if (bestelling == "fris"){
		loop2=false
		while(loop2==false) {
		var qtyFris= Number(prompt("Hoeveel glazen fris wilt u toevoegen aan uw bestelling?"))
			if(isNaN(qtyFris)) {
			alert("Dit is geen geldig antwoord \nVul een getal of nummer in!");
			}
			else{
				loop2=true
				document.getElementById("Fris").style.display="block";
			}
			
		}	
	}
	else if (bestelling == "wijn"){
		loop2=false
		while(loop2==false) {
		var qtyWijn= Number(prompt("Hoeveel glazen wijn wilt u toevoegen aan uw bestelling?"))
			if(isNaN(qtyWijn)) {
				alert("Dit is geen geldig antwoord \nVul een getal of nummer in!");
			}
			else{
				loop2=true
				document.getElementById("Wijn").style.display="block";
			}	
		}
	}
	else if ( bestelling == "bier"){
		loop2=false
		while(loop2==false) {
		var qtyBier= Number(prompt("Hoeveel glazen bier wilt u toevoegen aan uw bestelling?"))
			if(isNaN(qtyBier)) {
				alert("Dit is geen geldig antwoord \nVul een getal of nummer in!");
			}
			else{
				loop2=true
				document.getElementById("Wijn").style.display="block";
			}
		}
	}
	else if (bestelling == "snack"){
		loop2=false
		while(loop2==false) {
		var snack = Number(prompt("wilt u een schaal van 8 of 16 Bitterballen? \n schaal 8 ($5.00) \n schaal 16 ($10.00)"))
			if (snack == "8"){
				loop2=false
				while(loop2==false) {
				var qtyBit8 = Number(prompt("hoeveel schalen van 8 bitterballen wilt u bestellen?"))
					if(isNaN(qtyBit8)) {
					alert("Dit is geen geldig antwoord \nVul een getal of nummer in!");
					}
				
				
			
					else{
						loop2=true
						document.getElementById("Bit8").style.display="block";
					}
				}	
			}	 
			else if (snack == "16"){
				loop2=false
				while(loop2==false) {
					var qtyBit16 = Number(prompt("Hoeveel schalen van 16 wilt u bestellen?"))
					if(isNaN(qtyBit16)) {
						alert("Dit is geen geldig antwoord \nVul een getal of nummer in!");
					}
					else{
						loop2=true
						document.getElementById("Bit16").style.display="block";
					}
				}
			}

			else {
				alert("Voer een geldig getal in (8 of 16)!")	
			}
		}
	}
	
	else if ( bestelling == "stop"){

		loop = true
		var totalFris = FRISPRIJS * qtyFris
		var totalWijn = WIJNPRIJS * qtyWijn
		var totalBier = BIERPRIJS * qtyBier
		var totalBitter8 = BITTERBAL8 * qtyBit8
		var totalBitter16 = BITTERBAL16 * qtyBit16

		var total = totalFris + totalWijn + totalBier + totalBitter8 + totalBitter16
		document.getElementById("Fris").innerHTML = "De "+qtyFris+" fris dat u heeft besteld kost $" + totalFris;
		document.getElementById("Wijn").innerHTML = "De "+qtyWijn+" wijn dat u heeft besteld kost $" + totalWijn;
		document.getElementById("Bier").innerHTML = "De "+qtyBier+" bier dat u heeft besteld kost $" + totalBier;
		document.getElementById("Bit8").innerHTML = "De "+qtyBit8+" schalen bitterballen van 8 kost $" + totalBitter8;
		document.getElementById("Bit16").innerHTML = "De "+qtyBit16+" schalen bitterballen van 16 kost $" + totalBitter16;


		document.getElementById("kobe").innerHTML = "De totale Rekening is " + "&#8364;" + total;
		//&#8364; zorgt ervoor dat er een euroteken komt te staan
	}	

else {
	alert("Dit staat niet op het Menu voer een geldig antwoord in!")
}
}





