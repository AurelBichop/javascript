// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

var dlElt = document.createElement("dl");
dlElt.id = "dlelement";
document.getElementById("contenu").appendChild(dlElt);


//Création des tags pour le dictionnaire
for (var i =0;i<mots.length;i++){
    
    var dtElt = document.createElement("dt");
    dtElt.textContent = mots[i]["terme"];
    document.getElementById("dlelement").appendChild(dtElt);
    
    var ddElt = document.createElement("dd");
    ddElt.textContent = mots[i]["definition"];
    document.getElementById("dlelement").appendChild(ddElt);

}

//Mise en gras des titres
var titre = document.getElementsByTagName("dt");
for (var i =0;i<titre.length;i++){
    titre[i].setAttribute("style","font-weight: bold;");
}