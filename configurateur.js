/************************************************/
/**************Configuration du jeux*************/
/************************************************/
    var nbCasehorizontales = 10,
        nbCaseVertical = 10,
        
        nbCaseArme = 3,         // Attention cette valeur definie le nombre de caisse armement pour chaque personnage (par defaut : 3 caisses par perso)
        nbCaseBloquante = 30,
        
        nbCaseDeplacementPerso = 3,
        
        ptsVieMario = 100;
        ptsVieSonic = 100;

        dpsMario    = 10;
        dpsSonic    = 10;

        defMario    =  15;
        defSonic    =  15; 

        degatArmeMario  = {
            'fleur de feu'    : 15,
            'carapace rouge'  : 25,
            'carapace bleu'   : 35,
            'boulet de canon' : 45,
        };

        degatArmeSonic  = {
            'anneau d\'or'       : 15,
            'épine tournoyante'  : 25,
            'attaque Tail'       : 35,
            'sept joyaux'        : 45,
        };

        porterAttaque = nbCasehorizontales;

        ratioHauteurCase = 1.3;
/************************************************/