// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

for(i= 0;i< maisons.length;i++){
    var optElt = document.createElement('option');
    optElt.value = maisons[i].code;
    optElt.textContent = maisons[i].nom;
    
    document.getElementById('maison').appendChild(optElt);  
}


// Affichage du type d'abonnement choisi
var maisonElts = document.getElementsByTagName("option");

for (var i = 0; i < maisonElts.length; i++) {
    maisonElts[i].addEventListener("click", function (e) {
        var persosElt = document.getElementById('persos');
        persosElt.innerHTML = ""; // Vidage de la liste
        var arrayPerso = getPersonnages(e.target.value);
        
        for(j=0; j < arrayPerso.length;j++){
            var liElt = document.createElement('li');
            liElt.textContent = arrayPerso[j];
            
            persosElt.appendChild(liElt); 
        }
        
    });
}


/**
CORECTION


// Crée et renvoi un élément HTML <option>
function creerElementOption(texte, valeur) {
    var element = document.createElement("option");
    element.textContent = texte;
    element.value = valeur;
    return element;
}

// Crée et renvoie un élément HTML <li>
function creerElementLi(texte) {
    var element = document.createElement("li");
    element.textContent = texte;
    return element;
}

var maisonElt = document.querySelector("select");
// Remplit la liste déroulante des maisons
maisons.forEach(function (maison) {
    maisonElt.appendChild(creerElementOption(maison.nom, maison.code));
});

maisonElt.addEventListener("change", function (e) {
    // La valeur cible de l'évènement est le code de la maison
    var persos = getPersonnages(e.target.value);
    var persosElt = document.getElementById("persos");
    persosElt.innerHTML = ""; // Vidage de la liste
    // Ajout de chaque personnage à la liste
    persos.forEach(function (perso) {
        persosElt.appendChild(creerElementLi(perso));
    });
});




