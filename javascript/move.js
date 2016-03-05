var positionPrecedente;

// fonction qui effectue le deplacement du sprite
function move(perso) {    
    $('.depPossible').click(function () {         
        if ($(this).hasClass('depPossible') && perso.actif === true) {
            var index = $('td').index(this);
            spriteUnder(perso, positionPrecedente);
            $('.depPossible').removeClass('depPossible');

            if ($(this).children().is('[class*="SonicBox"], [class*="MarioBox"]')) {
                var box = infoArme($('td:nth(' + index + ') img[class*="Box"]').attr('class'));                
                
                if ($(this).children().is('[class*="' + perso.nom + 'Box"]')) { //si cette box est pour le personnage                    
                    insertPerso(perso, index);
                    effacePicture(index, "box");                   
                    if ($(this).children().is('[class*="bomb"]')) { 
                        explode(perso, index, box);                        
                    }
                    dialBoxWeaponLoot(perso, box);
                    weaponBoxAppear(perso);
                } else {                    
                    insertPerso(perso, index, "absolute");
                    dialBoxWeaponLoot(perso, box);
                }

            } else {
                insertPerso(perso, index)
            }   
            majPopOver();
            infoPerso();            
            hudTurnPLayerInfo(perso);
            actionDone.push('move');
            coloringActionMenu(perso,actionDone);
        }
    });    
}

// fonction qui verifie sur quel type de boite se trouve le personnage, dans le but d'y mettre une bombe si ce n'est pas une case pour lui
function spriteUnder(perso, here) {
    var under = $('td:nth(' + positionPrecedente + ')').children();

    if (under.is('[class*="SonicBox"], [class*="MarioBox"]')) {
        if (!under.is('[class*="' + perso.nom + 'Box"]')) {
            putBomb(here);            
        }
        $('img').remove('#' + perso.nom);
    } else {
        $('td:nth(' + positionPrecedente + ')').html('');
    }
}

//fonction qui envoie a la fonction 'deplacement possible' les coordonné du personnage en court
function possibleMove(perso) {
    $('td').removeClass('atkPossible');
    var selectPerso = $('#' + perso.nom);
    var posIndex = $('td').index(selectPerso.parent());
    var posRow = $('tr').index($('td:nth(' + posIndex + ')').parent());

    positionPrecedente = posIndex;
    deplacementPossible(posRow, posIndex);
}

//fonction qui affiche les cases de deplacement possible autour du personnage
function deplacementPossible(row, caseIndex) {
    var i = 1,
        dep = nbCaseDeplacementPerso,
        possibleCase = caseIndex,
        allCase = $('td');

    for (i = 1; i <= dep; i++) {
        possibleCase = caseIndex - i * nbCasehorizontales;
        if (possibleCase >= 0) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'Mario' && allCase[possibleCase].childNodes[0].id !== 'Sonic') {
                    $('td:nth(' + possibleCase + ')').addClass('depPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('depPossible');
            }
        }
    }

    for (i = 1; i <= dep; i++) {
        possibleCase = caseIndex + i * nbCasehorizontales;
        if (possibleCase < allCase.length) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'Mario' && allCase[possibleCase].childNodes[0].id !== 'Sonic') {
                    $('td:nth(' + possibleCase + ')').addClass('depPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('depPossible');
            }
        }
    }

    for (i = 1; i <= dep; i++) {
        possibleCase = caseIndex - i;
        if (possibleCase >= row * nbCasehorizontales) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'Mario' && allCase[possibleCase].childNodes[0].id !== 'Sonic') {
                    $('td:nth(' + possibleCase + ')').addClass('depPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('depPossible');
            }
        }
    }

    for (i = 1; i <= dep; i++) {
        possibleCase = caseIndex + i;
        if (possibleCase < (row + 1) * nbCasehorizontales) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'Mario' && allCase[possibleCase].childNodes[0].id !== 'Sonic') {
                    $('td:nth(' + possibleCase + ')').addClass('depPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('depPossible');
            }
        }
    }
}