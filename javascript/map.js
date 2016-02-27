    var boxTotal = $('table');
    var htScreen = window.innerHeight;
    var arrayGrille = [];

    grilleCreation();
    creationSpritePlayer();
    creationSpriteCaseBonus(caisseArme.length);
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
            insertArraySprite(caisseArme[i]);
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

                if (array[i][2].nom === 'Sonic' || array[i][2].nom === 'Mario') {
                    img.id = array[i][2].nom;
                } else {
                    img.className = array[i][2].nom;
                }
                img.src = array[i][2].spriteSrc;
                img.width = $('table').width() / nbCasehorizontales;
                img.height = Math.floor(htScreen / (nbCaseVertical * 1.3));
                cases[i].appendChild(img);

            }
        }
    }

    //fonction qui efface toutes les images dans cette case de la table
    function effacePicture(here, typePicture) {
        if (typePicture) {
            switch (typePicture) {
            case "box":
                $('td:nth(' + here + ') img').remove('img[class*="Box"]');
                break;
            case "perso":

                break;
            case "bomb":
                $('td:nth(' + here + ') img').remove('img[class*="bomb"]');
                break;
            }
        } else {
            $('td:nth(' + here + ') img').remove('img');
        }
    }

    //fonction qui insere l'image du perso dans cette case de la table
    function insertPerso(perso, here, position) {
        var image = document.createElement('img');
        image.id = perso.nom;
        image.src = perso.spriteSrc;
        image.width = $('table').width() / nbCasehorizontales;
        image.height = Math.floor(htScreen / (nbCaseVertical * 1.3));
        if (position == "absolute") {
            image.style.position = 'absolute';
        } else {
            image.style.position = '';
        }

        $('td:nth(' + here + ')').prepend(image);
    }

    //fonction qui change l'apparence du personnage en fonction de l'arme ramassé
    function apparencePerso(perso) {
        if (perso.nom == "Mario") {
            perso.spriteSrc = 'sprite/form/' + perso.nom + 'Form' + marioArmementPossible.indexOf(perso.arme) + '.png';
            $('#soundMarioItem')[0].play();
        } else if (perso.nom == "Sonic") {
            perso.spriteSrc = 'sprite/form/' + perso.nom + 'Form' + sonicArmementPossible.indexOf(perso.arme) + '.png';
            $('#soundSonicItem')[0].play();
        }

        $('#' + perso.nom).attr('src', perso.spriteSrc);
    }