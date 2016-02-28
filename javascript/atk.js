//fonction qui calcul les degats en fonction de la puissance de l'attaque et de la defence du personnage qui reçois les degats
function degatCalc(persoDefenseur, degatSubis){
    var realDegat = degatSubis-persoDefenseur.def;      //le personnage defenseur recois les degats moins sa defence d'origine
    
    if($('#' + persoDefenseur.nom).attr('src')== persoDefenseur.spriteSrcDef){  //si le personnage defenseur est en 'mode defence' il reçois 50% de degat en moins
       realDegat = floor(realDegat/2); 
    } 
    persoDefenseur.vie -= realDegat;
    return realDegat;
}

//fonction qui envoie a la fonction 'atkPossible' les coordonné du personnage en court
function possibleAtk(perso){
    $('td').removeClass('depPossible');
    var selectPerso = $('#'+perso.nom);
    var posIndex = $('td').index(selectPerso.parent());
    var posRow = $('tr').index($('td:nth('+posIndex+')').parent());
    
    atkPossible(perso,posRow, posIndex);
}

//fonction qui affiche les cases de porterAtklacement possible autour du personnage
function atkPossible(perso,row, caseIndex) {    
    var i = 1,
        porterAtk =  perso.range,
        possibleCase = caseIndex,
        allCase = $('td');
    
    for (i = 1; i <= porterAtk; i++) {
        possibleCase = caseIndex - i * nbCasehorizontales;
        if (possibleCase >= 0) {            
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {                     
                    $('td:nth(' + possibleCase + ')').addClass('atkPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('atkPossible');
            }
        }
    }

    for (i = 1; i <= porterAtk; i++) {
        possibleCase = caseIndex + i * nbCasehorizontales;
        if (possibleCase < allCase.length) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {
                    $('td:nth(' + possibleCase + ')').addClass('atkPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('atkPossible');
            }
        }
    }

    for (i = 1; i <= porterAtk; i++) {
        possibleCase = caseIndex - i;
        if (possibleCase >= row * nbCasehorizontales) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {
                    $('td:nth(' + possibleCase + ')').addClass('atkPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('atkPossible');
            }
        }
    }

    for (i = 1; i <= porterAtk; i++) {
        possibleCase = caseIndex + i;
        if (possibleCase < (row + 1) * nbCasehorizontales) {
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {
                    $('td:nth(' + possibleCase + ')').addClass('atkPossible');
                } else {
                    break;
                }
            } else {
                $('td:nth(' + possibleCase + ')').addClass('atkPossible');
            }
        }
    }
}