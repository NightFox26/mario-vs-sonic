    var boxTotal = $('table');
    var htScreen = window.innerHeight;
    var arrayGrille = [];

    grilleCreation();
    creationSpritePlayer();
    creationSpriteCaseBonus(nbCaseArme);
    creationSpriteCaseBlocante(nbCaseBloquante);

    updateMap(arrayRand(arrayGrille));


    //fonction de creation de la grille
    function grilleCreation() {
        for (var i = 0; i < nbCaseVertical; i++) {
            var tableRow = document.createElement('tr');
            for (var j = 0; j < nbCasehorizontales; j++) {
                var tableCol = document.createElement('td');
                tableCol.style.width = $('table').width() / nbCasehorizontales + 'px';
                tableCol.style.height = Math.floor(htScreen / (nbCaseVertical * 1.3)) + 'px';
                tableRow.appendChild(tableCol);
                arrayGrille.push([i, j, 'vide']);
            }
            boxTotal.append(tableRow);
        }
    }

    //fonction qui integre les deux personnage dans le array
    function creationSpritePlayer() {
        var player = joueur1;
        var i = 0;
        while (i < 2) {
            insertArraySprite(player);
            player = joueur2;
            i++;
        }
    };

    //fonction qui integre les cases armement dans le array
    function creationSpriteCaseBonus(nb) {
        for (var i = 0; i < nb; i++) {
            var armeBox = Object.create(boiteArmement);
            if (i >= nb / 2) {
                armeBox.initBoite('mario');
                insertArraySprite(armeBox);
            } else {
                armeBox.initBoite('sonic');
                insertArraySprite(armeBox);
            }
        }
    };

    //fonction qui integre les cases blocante dans le array
    function creationSpriteCaseBlocante(nb) {
        for (var i = 0; i < nb; i++) {
            insertArraySprite(caseBlocante);
        }
    }

    //fonction qui construit le array contenant les placements
    function insertArraySprite(type) {
        var tailleGrille = arrayGrille.length;
        for (var i = 0; i < tailleGrille; i++) {
            if (arrayGrille[i][2] == 'vide') {
                arrayGrille[i][2] = type;
                break;
            }
        }
    };

    //fonction qui met a jour l'affichage des sprite sur la map
    function updateMap(array) {
        var i = 0,
            long = array.length,
            cases = $('td');

        for (i; i < long; i++) {
            if (array[i][2] !== 'vide') {                
                var img = document.createElement('img');
                
                if(array[i][2].nom === 'sonic' || array[i][2].nom === 'mario'){
                   img.id = array[i][2].nom; 
                }
                else{
                   img.className = array[i][2].nom;  
                } 
                img.src = array[i][2].spriteSrc;
                img.width = $('table').width() / nbCasehorizontales;
                img.height = Math.floor(htScreen / (nbCaseVertical * 1.3));
                cases[i].appendChild(img);
                
                //ici je creer les attrib du popover info des perso
                //if(img.id){
                  // $('#'+img.id).attr('data-html',"true").attr('data-//container',"body").attr('data-toggle',"popover").attr('data-//placement',"top"); 
               // }                
            }
        }
    }  
    