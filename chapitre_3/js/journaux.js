// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

for (var i =0;i<journaux.length;i++){
    
    var lien = document.createElement("a");
    lien.setAttribute("id","journal"+i);
    lien.href = journaux[i];
    lien.textContent = journaux[i];
    document.getElementById("contenu").appendChild(lien);
    document.getElementById("journal"+i).innerHTML +="<br>";
    
}

