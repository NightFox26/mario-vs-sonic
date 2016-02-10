$(function () {
    /************************************************/
    /**************Configuration du jeux*************/
    /************************************************/
    var nbCase = 10;
    var nbCaseArme = 4;
    var nbCaseBloquante = 6;

    
    
    
    var ratioHauteurCase = 1.3;
    /************************************************/
    var boxTotal = $('#box');
    var longBox = Math.floor(boxTotal.innerWidth());    

    grilleCreation(nbCase);
    creationSpritePlayer();
    creationSpriteCaseBonus(nbCaseArme);
    creationSpriteCaseBlocante(nbCaseBloquante);

    //fonction de creation de la grille
    function grilleCreation(nbCase) {
        var longCase = Math.floor(longBox / nbCase) - 2;
        boxTotal.css('width', longCase * nbCase + 4 + 'px');

        for (i = 0; i < nbCase; i++) {
            for (j = 0; j < nbCase; j++) {
                var div = document.createElement('div');
                div.className = 'case';
                div.style.width = longCase + 'px';
                div.style.lineHeight = Math.floor(longCase/ratioHauteurCase) + 'px';
                div.style.height = Math.floor(longCase/ratioHauteurCase) + 'px';
                div.innerHTML = j;
                boxTotal.append(div);
            }
        }
    }

    function creationSpritePlayer() {
        var player = joueur1;
        var i = 0;
        while (i < 2) {
            domDivSprite(player);
            player = joueur2;
            i++;
        }
    }
    
    function creationSpriteCaseBonus(nb) {
    for (i = 0; i < nb; i++) {
        var arme = Object.create(boiteArmement);
        if (i >= nb / 2) {
            arme.initBoite('mario');
            domDivSprite(arme);
        } else {
            arme.initBoite('sonic');
            domDivSprite(arme);
        }

    }
}
    
    function creationSpriteCaseBlocante(nb){
        for (i=0;i<nb;i++){
            var block = Object.create(caseBlocante);            
           domDivSprite(block); 
        }
    }

    function domDivSprite(type){
        var longPersoBox = Math.floor(longBox / nbCase) - 2;
            var divSprite = document.createElement('div');
            divSprite.className = 'case ' + type.nom;
            divSprite.style.width = longPersoBox + 'px';
            divSprite.style.lineHeight = Math.floor(longPersoBox/ratioHauteurCase) + 'px';
            divSprite.style.height = Math.floor(longPersoBox/ratioHauteurCase)  + 'px';

            var img = document.createElement('img');
            img.src = type.spriteSrc;
            img.width = longPersoBox;
            img.height = Math.floor(longPersoBox/ratioHauteurCase);
        
            
            divSprite.appendChild(img);
            boxTotal.append(divSprite);
            $('div.case:first').remove();
    }
    
    function placementAleatoire() {


    }




})