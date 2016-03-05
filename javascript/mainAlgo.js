var actionDone = [];

$(function () {
    var playerStart = trueRand(1, 2),
        player,
        adversaire;

    if (playerStart == 1) {
        player = joueur1;
        adversaire = joueur2;

    } else {
        player = joueur2;
        adversaire = joueur1;
    }

    var btnMove = document.getElementById('move'),
        btnAtk = document.getElementById('atk'),
        btnDef = document.getElementById('def'),
        btnEnd = document.getElementById('end'),
        turn = 0;

    player.actif = true;
    hudTurnPLayerInfo(player);
    coloringActionMenu(player, actionDone);
    majPopOver();
    infoPerso();
    updateWeaponHud(player);

    // écoute du click sur le boutton 'move'
    btnMove.addEventListener('click', function () {
        if (verifMove()) {
            possibleMove(player);
            move(player);
            console.log(player.nom + ' se deplace!!!');            
        } else {
            console.log(player.nom + ' ne peux plus bouger');
        }
    });

    // écoute du click sur le boutton 'attaque'
    btnAtk.addEventListener('click', function () {
        if (verifAtkDef()) {
            $('#' + player.nom).attr('src', player.spriteSrc);
            possibleAtk(player);
            atk(player, adversaire);
            console.log(player.nom + ' attaque!!!');
        } else {
            console.log(player.nom + ' ne peux plus attaquer');
        }

    });

    // écoute du click sur le boutton 'defendre'
    btnDef.addEventListener('click', function () {
        if (verifAtkDef()) {
            $('td').removeClass('atkPossible');
            actionDone.push('def');
            coloringActionMenu(player, actionDone);
            $('#' + player.nom).attr('src', player.spriteSrcDef);
            console.log(player.nom + ' se defend !');
        } else {
            console.log(player.nom + ' se defend deja!');
        }

    });

    // écoute du click sur le boutton 'fin de tour'
    btnEnd.addEventListener('click', function () {
        turn++;
        actionDone = [];
        player = changePlayer(player);
        console.log('tour : ' + turn);
        console.log('c\'est a ' + player.nom + ' de jouer!');
        hudTurnPLayerInfo(player);
        coloringActionMenu(player, actionDone);
        updateWeaponHud(player)
        $('td').removeClass('depPossible').removeClass('atkPossible');
    });

    //fonction qui change de jouer a la fin du tour
    function changePlayer(player) {
        player.actif = false;
        if (player.nom == 'Mario') {
            joueur2.actif = true;
            adversaire = joueur1;
            return joueur2;
        } else {
            joueur1.actif = true;
            adversaire = joueur2;
            return joueur1;
        }
    }

    //fonction qui verifie si le perso a deja attaqué/defendu pendant ce tour
    function verifAtkDef() {
        for (i = 0, c = actionDone.length; i < c; i++) {
            if (actionDone[i] == 'atk' || actionDone[i] == 'def') {
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

});