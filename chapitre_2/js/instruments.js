function compterLien(a){
    var liensElts = document.getElementsByTagName("a");
    var nombreLiens = liensElts.length;
    console.log(nombreLiens);

    if (nombreLiens > 0) {
        console.log(liensElts[0].getAttribute("href"));
        console.log(liensElts[nombreLiens - 1].getAttribute("href"));
    }
}


function possede(id,classe){
    
    var instrument =  document.getElementById(id)
        
    if(instrument !== null){
        return console.log(instrument.classList.contains(classe));
    }   
    else{
        return console.log('Aucun element ne possede l\'identifiant '+id);
    }
      
}


compterLien();

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur