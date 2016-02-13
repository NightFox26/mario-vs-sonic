var positionPrecedente;




function move(perso){
    $('.depPossible').click( function(){
        if ($(this).hasClass('depPossible')){        
            var index = $('td').index(this);
            $('td:nth(' + positionPrecedente + ')').html('');
            $('.depPossible').removeClass('depPossible');
            var image = document.createElement('img');
            image.className = perso.nom;
            image.src = perso.spriteSrc;
            image.width = $('table').width() / nbCasehorizontales;
            image.height = Math.floor(htScreen / (nbCaseVertical * 1.3));

            $('td:nth(' + index + ')').append(image);
            $('td').off('click');
        }

    });
}


function possibleMove(perso){
    $('td').click(function (){
        var posIndex = $('td').index(this);
        var posRow = $('tr').index($(this)[0].parentElement);    

        if ($(this)[0].hasChildNodes()) {        
            var name = $(this)[0].childNodes[0].className;
            if (name === perso.nom) {             
                positionPrecedente = posIndex;
                deplacementPossible(posRow, posIndex);             
            }        
        }
    });
}
//fonction qui affiche les cases de deplacement possible autour du personnage
function deplacementPossible(row, caseIndex) {    
    var i = 1,
        dep = nbCaseDeplacementPerso,
        possibleCase = caseIndex,
        inCase = $('td');
    
    for (i = 1; i <= dep; i++) {
        possibleCase = caseIndex - i * nbCasehorizontales;
        if (possibleCase > 0) {
            if (inCase[possibleCase].hasChildNodes()) {
                if (inCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {                    
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
        if (possibleCase < inCase.length) {
            if (inCase[possibleCase].hasChildNodes()) {
                if (inCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {
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
            if (inCase[possibleCase].hasChildNodes()) {
                if (inCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {
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
            if (inCase[possibleCase].hasChildNodes()) {
                if (inCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor') {
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