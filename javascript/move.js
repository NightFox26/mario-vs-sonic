$('td').click(function () {
    var posIndex = $('td').index(this);
    var posRow = $('tr').index($(this)[0].parentElement);    

    if ($(this)[0].hasChildNodes()) {
        var name = $(this)[0].childNodes[0].className;
        if (name === "sonic") {            
            deplacementPossible(this.className,posRow, posIndex);             
            $('.depPossible').click(function(){             
                var y = $('tr').index($(this)[0].parentElement);
                var x = $('tr:nth('+y+')>td').index(this);
                var index = $('td').index(this);
                
                arrayGrille[index][0] = x;
                arrayGrille[index][1] = y;
                arrayGrille[index][2] = joueur2;                
                
                $('td').html('').attr('class',null) ;
                               
                updateMap(arrayGrille);                
            });
        }
    }
});

//fonction qui affiche les cases de deplacement possible autour du personnage
function deplacementPossible(perso, row, caseIndex) {
    var i = 1,
        dep = nbCaseDeplacementPerso,
        possibleCase = caseIndex,
        inCase = $('td');
    
    for (i = 0; i <= dep; i++) {
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

    for (i = 0; i <= dep; i++) {
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

    for (i = 0; i <= dep; i++) {
        possibleCase = caseIndex - i;
        if (possibleCase > row * nbCasehorizontales) {
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

    for (i = 0; i <= dep; i++) {
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