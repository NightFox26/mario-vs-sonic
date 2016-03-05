//fonction qui calcul les degats en fonction de la puissance de l'attaque et de la defence du personnage qui reçois les degats
function degatCalc(persoDefenseur, degatSubis,alreadyDamaged){
    
    if(alreadyDamaged === false){      
        var realDegat = degatSubis-persoDefenseur.def;      //le personnage defenseur recois les degats moins sa defence d'origine

        if($('#' + persoDefenseur.nom).attr('src')== persoDefenseur.spriteSrcDef){  //si le personnage defenseur est en 'mode defence' il reçois 50% de degat en moins
           realDegat = Math.floor(realDegat/2); 
        } 
        persoDefenseur.vie -= realDegat;
        majPopOver()
       
        return realDegat;      
    }    
}

//fonction de verification de fin de partie
function verifPtsVie(){
     if (joueur1.vie <= 0 ) {
         animPersoMort(joueur1);
         var winner = joueur2.nom;         
     }
     else if (joueur2.vie <= 0){
          animPersoMort(joueur2);
          var winner = joueur1.nom;          
     }
    
    if(joueur1.vie <= 0||joueur2.vie <= 0){        
        $('#sound'+winner+'Win')[0].play(); 
        $('#sound'+winner+'Win').bind("ended", function(){            
            $('#Sonic,#Mario').popover('hide');
            $('#bgm')[0].pause();
            $('#soundVictory'+winner)[0].play();
            $('td').html("").css('border-color', 'transparent');
            $('table').css('background-image','url(../sprite/'+winner+'Win.jpg)');
            $('nav').css('visibility','hidden');
       });
    }
}

//fonction qui envoie a la fonction 'atkPossible' les coordonné du personnage en court
function possibleAtk(perso){
    $('td').removeClass('depPossible');
    var selectPerso = $('#'+perso.nom);
    var posIndex = $('td').index(selectPerso.parent());
    var posRow = $('tr').index($('td:nth('+posIndex+')').parent());    
    atkPossible(perso,posRow, posIndex);
}

//fonction qui execute une attque si l'adversaire est a porté de frappe
function atk(perso,adversaire){    
    var attacked = false;
    $('.atkPossible').click(function () {       
        if ($(this).hasClass('atkPossible') && perso.actif === true && attacked === false) {
            if($(this).children().is('#' + adversaire.nom)){
                
                if(perso.nom == "Mario"){
                    var ficherAnimArme = '../sprite/atk/'+perso.nom+'W'+(marioArmementPossible.indexOf(perso.arme)+1)+'.png'
                }
                else{
                   var ficherAnimArme = '../sprite/atk/'+perso.nom+'W'+(sonicArmementPossible.indexOf(perso.arme)+1)+'.png' 
                }
                
                $('.atkPossible').removeClass('atkPossible');
                attacked = true;
                $('#soundAtk'+perso.nom)[0].play();                
                $('#soundAtk'+perso.nom).bind("ended", function(){ 
                    atkAnim(ficherAnimArme,perso,adversaire);                     
                    actionDone.push('atk');
                    coloringActionMenu(perso,actionDone);                    
                });                              
            }
        }       
    })
}

//fonction qui affiche les cases de porterAtklacement possible autour du personnage
function atkPossible(perso,row, caseIndex) {
    $('td').removeClass('depPossible');
    var i = 1,
        porterAtk =  perso.range,
        possibleCase = caseIndex,
        allCase = $('td');
    
    if (perso.arme != 'Aucune Arme' && perso.nom == 'Mario'){
        var perforant = statArmeMario[perso.arme]['perforant']; //je verifie si l'arme de Mario peut traverser les cases blocantes
    }
    else if (perso.arme != 'Aucune Arme' && perso.nom == 'Sonic'){
        var perforant = statArmeSonic[perso.arme]['perforant']; //je verifie si l'arme de Sonic peut traverser les cases blocantes
    }
    
    for (i = 1; i <= porterAtk; i++) {
        possibleCase = caseIndex - i * nbCasehorizontales;
        if (possibleCase >= 0) {            
            if (allCase[possibleCase].hasChildNodes()) {
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor'|| perforant == 'oui') {                     
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' || perforant == 'oui') {
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' || perforant == 'oui') {
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
                if (allCase[possibleCase].childNodes[0].className !== 'PlanteCarnivor' || perforant == 'oui') {
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