// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];



document.getElementById("pays").addEventListener("input", function (e) {
    
    var paysElt = document.getElementById('suggestions');
        paysElt.innerHTML = ""; // Vidage de la liste
    
    
    
    for(i=0;i<listePays.length;i++){
        
        if(listePays[i].toLowerCase().indexOf(e.target.value) === 0){
            var pElt = document.createElement('div');
            pElt.className ="suggestions";
            pElt.textContent = listePays[i];
    
            // Gère le lic sur une suggestion
            pElt.addEventListener("click", function (e) {
                // Remplacement de la valeur saisie par la suggestion
                document.getElementById("pays").value = e.target.textContent;
                // Vidage de la liste des suggestions
                paysElt.innerHTML = "";
            });
            
            paysElt.appendChild(pElt);
        }
        
    }
        
    
})


//correction

/*
var paysElt = document.querySelector("input");
var suggestionsElt = document.getElementById("suggestions");

// Gère le changement de valeur saisie
paysElt.addEventListener("input", function () {
    suggestionsElt.innerHTML = ""; // Vidage de la liste des suggestions
    listePays.forEach(function (pays) {
        // Si valeur en cours de saisie correspond au début du pays
        if (pays.indexOf(paysElt.value) === 0) {
            var suggestionElt = document.createElement("div");
            suggestionElt.classList.add("suggestion");
            suggestionElt.textContent = pays;
            // Gère le lic sur une suggestion
            suggestionElt.addEventListener("click", function (e) {
                // Remplacement de la valeur saisie par la suggestion
                paysElt.value = e.target.textContent;
                // Vidage de la liste des suggestions
                suggestionsElt.innerHTML = "";
            });
            suggestionsElt.appendChild(suggestionElt);
        }
    });
});

*/

