// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function(e){
    
    var touche = String.fromCharCode(e.charCode);
        
    switch (touche.toLowerCase()) {
        case 'r': 
            var divElt = document.getElementsByTagName("div");
            for(i=0;i<divElt.length;i++){
                divElt[i].style.backgroundColor = "red";
            }
            break;
        case 'j': 
            var divElt = document.getElementsByTagName("div");
            for(i=0;i<divElt.length;i++){
                divElt[i].style.backgroundColor = "yellow";
            }
            break;
        case 'v': 
            var divElt = document.getElementsByTagName("div");
            for(i=0;i<divElt.length;i++){
                divElt[i].style.backgroundColor = "green";
            }
            break;
        case 'b': 
            var divElt = document.getElementsByTagName("div");
            for(i=0;i<divElt.length;i++){
                divElt[i].style.backgroundColor = "blue";
            }
            break;
        }
    
    }
);




