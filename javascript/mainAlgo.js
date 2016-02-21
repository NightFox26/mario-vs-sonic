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
        btnEnd = document.getElementById('end'),
        actionDone = [],
        turn = 0;

    player.actif = true;
    hudTurnPLayerInfo(player);
    coloringActionMenu(actionDone);
    majPopOver();         

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

    btnEnd.addEventListener('click', function () {
        turn++;
        actionDone = [];
        player = changePlayer(player);
        console.log('tour : ' + turn);
        console.log('c\'est a ' + player.nom + ' de jouer!');
        hudTurnPLayerInfo(player);
        coloringActionMenu(actionDone);
        $('td').removeClass('depPossible').removeClass('atkPossible');
        
        if (joueur1.vie <= 0 || joueur2.vie <= 0) {
            alert('fin de partie');
        }
    });

    function changePlayer(player) {
        player.actif = false;
        if (player.nom == 'mario') { 
            joueur2.actif = true;
            return joueur2;
        } else {
            joueur1.actif = true;
            return joueur1;
        }
    }

    function verifAtk() {
        for (i = 0, c = actionDone.length; i < c; i++) {
            if (actionDone[i] == 'atk') {
                return false
            }
        }
        return true;
    }

    function verifMove() {
        for (i = 0, c = actionDone.length; i < c; i++) {
            if (actionDone[i] == 'move') {
                return false
            }
        }
        return true;
    }
    
});