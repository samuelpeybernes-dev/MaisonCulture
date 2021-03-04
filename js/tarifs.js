function calcul_cout() {
//-------Cout adulte    
    var a = document.getElementById("adulte").value;
    var ca = document.getElementById("cout_adulte").innerHTML = 50 * a;
    document.getElementById("cout_adulte").innerHTML =ca + "€";
//-------Cout enfant petit
    var p = document.getElementById("petit").value;
    var cp = document.getElementById("cout_petit").innerHTML = 35 * p;
    document.getElementById("cout_petit").innerHTML =cp + "€";
//-------Cout enfant moyen
    var m = document.getElementById("moyen").value;
    var cm = document.getElementById("cout_moyen").innerHTML = 40 * m;
    document.getElementById("cout_moyen").innerHTML =cm + "€";
//-------Cout enfant grand
    var g = document.getElementById("grand").value;
    var cg = document.getElementById("cout_grand").innerHTML = 45 * g;
    document.getElementById("cout_grand").innerHTML =cg + "€";
//-------Personnes total
    document.getElementById("total_personne").innerHTML = (a*1) + (p*1) + (m*1) + (g*1); 
//-------Cout total     
    var ct = document.getElementById("total_cout").innerHTML = (ca*1) + (cp*1) + (cm*1) + (cg*1);  
    document.getElementById("total_cout").innerHTML = ct + "€";
}

function verif_nombre(champ)
  {
	var chiffres = new RegExp("[0-9]");
	var verif;
	var points = 0;
 
	for(x = 0; x < champ.value.length; x++)
	{
            verif = chiffres.test(champ.value.charAt(x));
	    if(champ.value.charAt(x) == "."){points++;}
            if(points > 1){verif = false; points = 1;}
  	    if(verif == false){champ.value = champ.value.substr(0,x) + champ.value.substr(x+1,champ.value.length-x+1); x--;}
	}
  }