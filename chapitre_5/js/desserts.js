var boutonElt = document.getElementsByTagName("button");


//[0] Ajout d'un gestionnaire pour l'événement click
boutonElt[0].addEventListener("click", function(){
    var saisie = prompt('nouveau dessert');
    var liElt = document.createElement("li");
    var aElt = document.createElement("a")
      
    aElt.href = "#"+saisie;
    aElt.textContent = saisie;
    
    
    if(saisie != ''){
        document.getElementById("desserts").appendChild(liElt);
        liElt.appendChild(aElt);
    }
    
});


document.getElementById("desserts").addEventListener("click",function(e){
    
var aElt = e.target;
    var saisie = prompt('modif dessert');
    aElt.textContent = saisie;
    aElt.href = "#"+saisie;
   

})

