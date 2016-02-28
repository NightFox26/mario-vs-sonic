$(function () {
    var playerStart = trueRand(1, 2),
        player;

    if (playerStart == 1) {
        player = joueur1;
    } else {
        player = joueur2;
    }

    var btnMove = document.getElementById('move'),
        btnAtk = document.getElementById('atk'),
        btnDef = document.getElementById('def'),
        btnEnd = document.getElementById('end'),
        actionDone = [],
        turn = 0;

    player.actif = true;
    hudTurnPLayerInfo(player);
    coloringActionMenu(actionDone);
    infoPerso();
    updateWeaponHud(player);

    btnMove.addEventListener('click', function () {
        if (verifMove()) {
            possibleMove(player);
            move(player);
            console.log(player.nom + ' se deplace!!!');
            actionDone.push('move');
            coloringActionMenu(actionDone);
        } else {
            console.log(player.nom + ' ne peux plus bouger');
        }
    });

    btnAtk.addEventListener('click', function () {
        if (verifAtk()) {
            possibleAtk(player)
            console.log(player.nom + ' attaque!!!');
            actionDone.push('atk');
            coloringActionMenu(actionDone);
        } else {
            console.log(player.nom + ' ne peux plus attaquer');
        }

    });

    btnDef.addEventListener('click', function () {
        if (verifDef()) {
            actionDone.push('def');
            coloringActionMenu(actionDone);
            $('#' + player.nom).attr('src', player.spriteSrcDef);
            console.log(player.nom + ' se defend !');
        } else {
            console.log(player.nom + ' se defend deja!');
        }

    });

    btnEnd.addEventListener('click', function () {
        turn++;
        actionDone = [];
        player = changePlayer(player);
        console.log('tour : ' + turn);
        console.log('c\'est a ' + player.nom + ' de jouer!');
        hudTurnPLayerInfo(player);
        coloringActionMenu(actionDone);
        updateWeaponHud(player)
        $('td').removeClass('depPossible').removeClass('atkPossible');
        $('#Mario,#Sonic').popover('hide');

        if (joueur1.vie <= 0 || joueur2.vie <= 0) {
            alert('fin de partie');
        }
    });

    //fonction qui change de jouer a la fin du tour
    function changePlayer(player) {
        player.actif = false;
        if (player.nom == 'Mario') {
            joueur2.actif = true;
            return joueur2;
        } else {
            joueur1.actif = true;
            return joueur1;
        }
    }

    //fonction qui verifie si le perso a deja attaqué ou non pendant ce tour
    function verifAtk() {
        for (i = 0, c = actionDone.length; i < c; i++) {
            if (actionDone[i] == 'atk') {
                return false
            }
        }
        return true;
    }

    //fonction qui verifie si le perso a deja bougé ou non pendant ce tour
    function verifMove() {
        for (i = 0, c = actionDone.length; i < c; i++) {
            if (actionDone[i] == 'move') {
                return false
            }
        }
        return true;
    }
    
    //fonction qui verifie si le perso s'est deja defendu ou non pendant ce tour
    function verifDef() {
        for (i = 0, c = actionDone.length; i < c; i++) {
            if (actionDone[i] == 'def') {
                return false
            }
        }
        return true;
    }
    
    

});