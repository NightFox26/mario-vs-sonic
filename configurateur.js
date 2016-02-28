/************************************************/
/**************Configuration du jeux*************/
/************************************************/
var nbCasehorizontales = 10,    
    nbCaseVertical = 10,

    nbCaseArme = 3, // Attention cette valeur definie le nombre de caisse armement pour chaque personnage (par defaut : 3 caisses par perso)
    nbCaseBloquante = 20,
    ratioHauteurCase = 1.3;

    nbCaseDeplacementPerso = 3,

    ptsVieMario = 100;
    ptsVieSonic = 100;

    dpsMario = 12;
    dpsSonic = 12;

    defMario = 10;
    defSonic = 10;

    rangeAttaqueStandard = 1;
    degatBomb = 35; //le degat des bombes posé sur les cases objet de l'adversaire

    statArmeMario = { //liste des armes de mario ainsi que les modification des stats du personnage qu'elles confere ('perforant' signifie qu'elle traverse les cases blocantes)
        'fleur de feu': {
            'atk': 25,
            'def': 0,
            'vie': 0,
            'range': nbCasehorizontales-3,
            'perforant' : false
        },

        'feuille tanooki': {
            'atk': 35,
            'def': 15,
            'vie': 0,
            'range': 2,
            'perforant' : true
        },

        'carapace koopa': {
            'atk': 30,
            'def': 0,
            'vie': 0,
            'range': nbCasehorizontales,
            'perforant' : false
        },

        'fleur Marteau': {
            'atk': 40,
            'def': 0,
            'vie': 15,
            'range': Math.floor(nbCasehorizontales/2),
            'perforant' : true
        },

        'oeuf yoshi': {
            'atk': 40,
            'def': 10,
            'vie': 20,
            'range': 2,
            'perforant' : true
        },

        'champignon d\'or': {
            'atk': 35,
            'def': 35,
            'vie': 35,
            'range': 4,
            'perforant' : false
        },
    };

    statArmeSonic = { //liste des armes de sonic ainsi que les modification des stats du personnage qu'elles confere  
        'anneau d\'or': {
            'atk': 10,
            'def': 0,
            'vie': 50,
            'range': nbCasehorizontales-3,
            'perforant' : false
        },

        'épine tournoyante': {
            'atk': 60,
            'def': -15,
            'vie': 0,
            'range': 2,
            'perforant' : false
        },

        'attaque Tail': {
            'atk': 25,
            'def': 10,
            'vie': 20,
            'range': nbCasehorizontales,
            'perforant' : true
        },

        'chaos power': {
            'atk': 40,
            'def': 20,
            'vie': 0,
            'range': 3,
            'perforant' : true
        },

        'armure robotnic': {
            'atk': 30,
            'def': 40,
            'vie': 15,
            'range': Math.floor(nbCasehorizontales/2.5),
            'perforant' : false
        },

        'sept joyaux': {
            'atk': 35,
            'def': 25,
            'vie': 25,
            'range': Math.floor(nbCasehorizontales/2),
            'perforant' : false
        },
    };


/************************************************/