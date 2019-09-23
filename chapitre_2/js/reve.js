// TODO : écrire la fonction compterElements

function compterElements(a){

    var nbElements = document.querySelectorAll(a).length;
    return nbElements;

}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2