$(function(){
    /************************************************/
    /**************Configuration du jeux*************/
    /************************************************/
    var nbCase = 10;
    
    
    
    
    /************************************************/
    var boxTotal = $('#box');
    var longBox = Math.floor(boxTotal.innerWidth());    
    
    
    grilleCreation(nbCase); 
    
    
    //fonction de creation de la grille
    function grilleCreation(nbCase){  
        var longCase = Math.floor(longBox/nbCase)-2;
        boxTotal.css('width' , longCase*nbCase+4+'px');
        
        for(i=0;i<nbCase;i++){
            for(j=0;j<nbCase;j++){
                var div = document.createElement('div');
                div.className = 'case';
                div.style.width = parseInt(longCase)+'px'; 
                div.style.lineHeight = parseInt(longCase/1.5)+'px';
                div.innerHTML = j;
                $('#box').append(div);
            }
        }
    }
})
