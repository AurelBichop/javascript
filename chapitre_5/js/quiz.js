// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];



for(i=0;i<questions.length;i++){
    
    var question = document.createElement("span");
    var strquestion = document.createElement("strong");
    
    var parabutton = document.createElement("div");
    var button = document.createElement("button");
    
    
    strquestion.textContent = "Question "+(i+1)+" : ";
    button.textContent = "Afficher la reponse";
    button.id = i;
    question.textContent = questions[i]['enonce'];
    
    document.getElementById("contenu").appendChild(strquestion);
    document.getElementById("contenu").appendChild(question);
    question.appendChild(parabutton);
    parabutton.appendChild(button);
    
    
    document.getElementById(i).addEventListener("click",function(e){
        var num = e.target;
        var rep = document.createElement("p");
        rep.textContent = questions[num.id]['reponse'];
        
        num.textContent = '';
        num.appendChild(rep);
        
        
    })
}





