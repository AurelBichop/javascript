var infoElt = document.getElementById("infos");
infoElt.textContent = 'Information sur la balise';

var contElt = document.getElementById("contenu");

var styleDiv = getComputedStyle(contElt);

var ulElt = document.createElement("ul");

var liHelt = document.createElement("li");
liHelt.textContent = 'Hauteur : '+ styleDiv.height;

var liWelt = document.createElement("li");
liWelt.textContent = 'Largeur : '+ styleDiv.width;


infoElt.appendChild(ulElt);
ulElt.appendChild(liHelt);
ulElt.appendChild(liWelt);