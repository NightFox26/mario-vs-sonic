var positionPrecedente;

function move(perso){    
    var bombCase = false;    
    $('.depPossible').click( function(){        
        if ($(this).hasClass('depPossible') && perso.actif === true){            
            var index = $('td').index(this);
            
            spriteUnder(perso,positionPrecedente);
            
            $('.depPossible').removeClass('depPossible');
            var image = document.createElement('img');
            image.id = perso.nom;
            image.src = perso.spriteSrc;
            
            image.width = $('table').width() / nbCasehorizontales;
            image.height = Math.floor(htScreen / (nbCaseVertical * 1.3));
            
            if ($(this).children().is('[class*="SonicBox"], [class*="MarioBox"]')){
               image.style.position = 'absolute';
                
                
                if($(this).children().is('[class*="'+perso.nom+'Box"]')){
                    
                    
                    
                    if($(this).children().is('[class*="bomb"]')){
                        //alert('BOOMMMMM!!!!');
                        //alert('la');
                        explode(perso,index);
                        bombCase = true;
                    }
                    if(bombCase !== true){
                        var box = infoArme($('td:nth(' + index + ') img').attr('class'));                   
                        $('td:nth(' + index + ') img').remove('img');
                        image.style.position = ''
                    }
                                     
                             
                } 
                
                $('td:nth(' + index + ')').prepend(image);
                //$('td').off('click');                 ATTENTION J AI ENLEV2 CELA SANS TESTER
                //explode(perso,index)
                dialBoxWeaponLoot(perso,box);       
            }
            else{
                image.style.position = '';
                $('td:nth(' + index + ')').append(image);
                //$('td').off('click');                 ATTENTION J AI ENLEV2 CELA SANS TESTER           
            }
            
            infoPerso();
            hudTurnPLayerInfo(perso); 
        }
    });
}

function spriteUnder(perso,here){
    var under = $('td:nth(' + positionPrecedente + ')').children();    
        
    if(under.is('[class*="SonicBox"], [class*="MarioBox"]')){ 
        if(!under.is('[class*="'+perso.nom+'Box"]')){            
            putBomb(here);
        }        
       $('img').remove('#'+perso.nom);
    }else{
      $('td:nth(' + positionPrecedente + ')').html('');  
    }
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