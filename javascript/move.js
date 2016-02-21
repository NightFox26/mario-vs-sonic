var positionPrecedente;

function move(perso){
    $('.depPossible').click( function(){        
        if ($(this).hasClass('depPossible') && perso.actif === true){            
            var index = $('td').index(this);
            $('td:nth(' + positionPrecedente + ')').html('');
            $('.depPossible').removeClass('depPossible');
            var image = document.createElement('img');
            image.id = perso.nom;
            image.src = perso.spriteSrc;
            
            image.width = $('table').width() / nbCasehorizontales;
            image.height = Math.floor(htScreen / (nbCaseVertical * 1.3));
            
            if ($(this).children().is('.MarioBox, .SonicBox')){
               image.style.position = 'absolute'; 
                $('td:nth(' + index + ')').prepend(image);
                $('td').off('click'); 
            }
            else{
                image.style.position = '';
               $('td:nth(' + index + ')').append(image);
                $('td').off('click'); 
            }
            
            majPopOver(); 
            hudTurnPLayerInfo(perso);            
        }
    });
}

//fonction qui envoie a la fonction 'deplacement possible' les coordonné du personnage en court
function possibleMove(perso){
    $('td').removeClass('atkPossible');
    var selectPerso = $('#'+perso.nom);
    var posIndex = $('td').index(selectPerso.parent());
    var posRow = $('tr').index($('td:nth('+posIndex+')').parent());
   
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'mario' && allCase[possibleCase].childNodes[0].id !== 'sonic') {                     
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'mario' && allCase[possibleCase].childNodes[0].id !== 'sonic') {
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'mario' && allCase[possibleCase].childNodes[0].id !== 'sonic') {
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' && allCase[possibleCase].childNodes[0].id !== 'mario' && allCase[possibleCase].childNodes[0].id !== 'sonic') {
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