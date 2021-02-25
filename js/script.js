var nome = prompt("Come ti chiami?");
var cognome = prompt("Qual è il tuo cognome?");
var colorePreferito = prompt ("Inserisci il tuo colore preferito:");

// visualizza

document.getElementById("nomeUtente").innerHTML= "Il tuo nome è: " +nome;
document.getElementById("cognomeUtente").innerHTML= "Il tuo nome cognome è: " +cognome;
document.getElementById("coloreUtente").innerHTML= "Il tuo colore preferito è: " +colorePreferito;
document.getElementById("numeroUtente").innerHTML= "il tuo codice accesso è: 27";

// color

document.getElementById("nomeUtente").style.color = "yellowgreen";
document.getElementById("cognomeUtente").style.color = "deepskyblue";
document.getElementById("coloreUtente").style.color = "plum";
document.getElementById("numeroUtente").style.color = "lightcoral";
