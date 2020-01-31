var message; //
//numere
/*
var result=10;
result++;
console.log (result);
console.log(Math.round(2.56)); //ceil-mai mult, floor-mai putin
var number=3.333;
console.log(number.toFixed(1)); //numarul de cifre dupa virgula &aproximare
*/

/*var name="Jony";
console.log("salut "+name); //concatenare
console.log(name.toUpperCase());//toLowerCase

*/
//Masive
var names= [
"Ion",
"Vania",
"Colia"
]
console.log(names[1].toUpperCase());
names.push("Vaniusha");
console.log(names);
// === strict egal se verifica egalitatea dupa valoare si tip
 var catalog={
	 nume: "Ion",
	 prenume: "Vasilescu",
	 medie: 10,
	 afisare: function(){
 return this.nume + " " + this.prenume + " " + "are media-" +this.medie;}};
 
 console.log(catalog.afisare());
  var person;
 if(confirm ("Are you sure?")){
	 person = prompt ("What is your name?");
	 alert("Hello "+person);
	 
 };

 
 
 