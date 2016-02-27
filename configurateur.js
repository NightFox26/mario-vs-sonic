/************************************************/
/**************Configuration du jeux*************/
/************************************************/
    var nbCasehorizontales = 10,
        nbCaseVertical = 10,
        
        nbCaseArme = 3,         // Attention cette valeur definie le nombre de caisse armement pour chaque personnage (par defaut : 3 caisses par perso)
        nbCaseBloquante = 20,
        ratioHauteurCase = 1.3;
        
        nbCaseDeplacementPerso = 3,
        
        ptsVieMario = 100;
        ptsVieSonic = 100;

        dpsMario    = 10;
        dpsSonic    = 10;

        defMario    =  15;
        defSonic    =  15;

        porterAttaqueStandard = 1;
        degatBomb             =15;      //le degat des bombes posé sur les cases objet de l'adversaire

        statArmeMario  = {         //liste des armes de mario ainsi que les modification des stats du personnage qu'elles confere
            'fleur de feu'    : {'atk':15,
                                 'def':0,
                                 'vie':0,
                                 'range':5},
            
            'feuille tanooki'  : {'atk':15,
                                 'def':0,
                                 'vie':0,
                                 'range':5},
            
            'carapace koopa'   : {'atk':15,
                                 'def':0,
                                 'vie':0,
                                 'range':5},
            
            'boulet de canon' : {'atk':15,
                                 'def':0,
                                 'vie':0,
                                 'range':5},
        };

        statArmeSonic  = {       //liste des armes de sonic ainsi que les modification des stats du personnage qu'elles confere  
            'anneau d\'or'       : {'atk':15,
                                    'def':0,
                                    'vie':0,
                                    'range':5},
            
            'épine tournoyante'  : {'atk':15,
                                    'def':0,
                                    'vie':0,
                                    'range':5},
            
            'attaque Tail'       : {'atk':15,
                                    'def':0,
                                    'vie':0,
                                    'range':5},
            
            'sept joyaux'        : {'atk':15,
                                    'def':0,
                                    'vie':0,
                                    'range':5},
        };      

        
/************************************************/