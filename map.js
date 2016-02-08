$(function () {
    /************************************************/
    /**************Configuration du jeux*************/
    /************************************************/
    var nbCase = 10;
    var nbCaseArme = 4;
    var nbCaseBloquante = 6;




    /************************************************/
    var boxTotal = $('#box');
    var longBox = Math.floor(boxTotal.innerWidth());


    grilleCreation(nbCase);
    //creationSpritePlayer();
    //creationSpriteCaseBonus(nbCaseArme);
    //creationSpriteCaseBlocante(nbCaseBloquante);

    //fonction de creation de la grille
    function grilleCreation(nbCase) {
        var longCase = Math.floor(longBox / nbCase) - 2;
        boxTotal.css('width', longCase * nbCase + 4 + 'px');

        for (i = 0; i < nbCase; i++) {
            for (j = 0; j < nbCase; j++) {
                var div = document.createElement('div');
                div.className = 'case';
                div.style.width = parseInt(longCase) + 'px';
                div.style.lineHeight = parseInt(longCase / 1.5) + 'px';
                div.innerHTML = j;
                boxTotal.append(div);
            }
        }
    }

    function creationSpritePlayer() {
        var player = joueur1;
        var i = 0;
        while (i < 2) {
            domDivSprit(player);
            player = joueur2;
            i++;
        }
    }
    
    function creationSpriteCaseBonus(nb){
        for (i=0;i<nb;i++){
            var arme = Object.create(boiteArmement);
            arme.initBoite('mario');
           domDivSprit(arme); 
        }
    }
    
    function creationSpriteCaseBlocante(nb){
        for (i=0;i<nb;i++){
            var block = Object.create(caseBlocante);            
           domDivSprit(block); 
        }
    }

    function domDivSprit(type){
        var longPersoBox = Math.floor(longBox / nbCase) - 2;
            var divPerso = document.createElement('div');
            divPerso.style.width = parseInt(longPersoBox) + 'px';

            var imgPerso = document.createElement('img');
            imgPerso.src = type.spriteSrc;
            imgPerso.width = longPersoBox;
            imgPerso.height = longPersoBox;

            divPerso.appendChild(imgPerso);
            boxTotal.append(divPerso);
    }
    
    function placementAleatoire() {


    }




})