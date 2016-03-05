/************************************************/
/**************Configuration du jeux*************/
/************************************************/

//Vous pouvez modifier ces valeur pour configurer le jeux suivant vos envie, en revenche il faut rester logique dans la configuration car cela pourrais engendrer des bugs

var nbCasehorizontales = 10,   //definie le nombre de cases du plateau de jeu en horizontal
    nbCaseVertical = 10,        //definie le nombre de cases du plateau de jeu en vertical

    nbCaseArme = 3,         //Cette valeur definie le nombre de caisse armement pour chaque personnage (par defaut : 3 caisses par perso)
    nbCaseBloquante = 20,   //Cette valeure definie le nombre de case blocante (ne pas en mettre trop sinon les personnage risque de se trouver coincé)
    ratioHauteurCase = 1.3; //Ici je definie la hauteur des case par rapport a leur largeur

    nbCaseDeplacementPerso = 3,     // nombre de cases de deplacement pour chaque personnage

    ptsVieMario = 100;              //les pts de vie d'origine de Mario (celui ci peut augmenter en court de partie suivant les armes trouvées)
    ptsVieSonic = 100;              //les pts de vie d'origine de Sonic (celui ci peut augmenter en court de partie suivant les armes trouvées)

    dpsMario = 10;                  //le degat de Mario de base
    dpsSonic = 10;                  //le degat de Sonic de base

    defMario = 5;                   //la defence de Mario de base (celle ci sera modifié en court de partie suivant l'arme trouvée, et la position defence diminue de 50% les degats subis)
    defSonic = 5;                   //la defence de Sonic de base (celle ci sera modifié en court de partie suivant l'arme trouvée, et la position defence diminue de 50% les degats subis)

    rangeAttaqueStandard = 1;       //la porté d'attaque de base de chaque perso est de 1 case, celle ci change en fonction des armes ramassées.
    degatBomb = 45; //le degat des bombes posé sur les cases objet de l'adversaire

    statArmeMario = { //liste des armes de mario ainsi que les modification des stats du personnage qu'elles confere ('perforant' signifie qu'elle traverse les cases blocantes)
        'fleur de feu': {
            'atk': 25,
            'def': 0,
            'vie': 0,
            'range': nbCasehorizontales-3,
            'perforant' : 'non'
        },

        'feuille tanooki': {
            'atk': 35,
            'def': 15,
            'vie': 0,
            'range': 2,
            'perforant' : 'oui'
        },

        'carapace koopa': {
            'atk': 30,
            'def': 0,
            'vie': 0,
            'range': nbCasehorizontales,
            'perforant' : 'non'
        },

        'fleur Marteau': {
            'atk': 40,
            'def': 0,
            'vie': 15,
            'range': Math.floor(nbCasehorizontales/2),
            'perforant' : 'oui'
        },

        'oeuf yoshi': {
            'atk': 40,
            'def': 10,
            'vie': 20,
            'range': 2,
            'perforant' : 'oui'
        },

        'champignon d\'or': {
            'atk': 35,
            'def': 35,
            'vie': 35,
            'range': 4,
            'perforant' : 'non'
        },
    };

    statArmeSonic = { //liste des armes de sonic ainsi que les modification des stats du personnage qu'elles confere  
        'anneau d\'or': {
            'atk': 10,
            'def': 0,
            'vie': 50,
            'range': nbCasehorizontales-3,
            'perforant' : 'non'
        },

        'épine tournoyante': {
            'atk': 60,
            'def': -15,
            'vie': 0,
            'range': 2,
            'perforant' : 'non'
        },

        'attaque Tail': {
            'atk': 25,
            'def': 10,
            'vie': 20,
            'range': nbCasehorizontales,
            'perforant' : 'oui'
        },

        'chaos power': {
            'atk': 40,
            'def': 20,
            'vie': 0,
            'range': 3,
            'perforant' : 'oui'
        },

        'armure robotnic': {
            'atk': 30,
            'def': 40,
            'vie': 15,
            'range': Math.floor(nbCasehorizontales/2.5),
            'perforant' : 'non'
        },

        'sept joyaux': {
            'atk': 35,
            'def': 25,
            'vie': 25,
            'range': Math.floor(nbCasehorizontales/2),
            'perforant' : 'non'
        },
    };


/************************************************/