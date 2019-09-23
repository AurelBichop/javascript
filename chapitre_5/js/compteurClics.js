var nblclick = document.getElementById('compteurClics');

function clic() {
    nblclick.textContent++ ;
}


var boutonElt = document.getElementById("clic");
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", clic);

// Suppression du gestionnaire pour l'événement click
var desElt = document.getElementById("desactiver");

desElt.addEventListener("click",function(){
    boutonElt.removeEventListener("click", clic);
})
