//gestion du clignotement des personnages quand c'est a leur tour de jouer
function spriteClignote() {
    if (joueur1.actif) {
        perso = joueur1;
    } else {
        perso = joueur2;
    }
    $('#' + perso.nom).fadeOut(700).fadeIn(700);
}

setInterval(spriteClignote, 2000);

//gestion de la mini bomb sur les case armement
function putBomb(here) {
    $('#soundPutBomb')[0].play();
    var idBox = $('td:nth(' + here + ')>img[class*="Box"]')[0].className;
    infoArme(idBox).bombed = true;
    $('td:nth(' + here + ')').prepend('<img class = "bomb" src="../sprite/bomb.gif" alt="animBomb" title = "Caisse piégée">');    
}

//animation degat sur perso
function animDegatPerso(perso){
    $('#' + perso.nom).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

//animation perso mort
function animPersoMort(perso){
    $('#' + perso.nom).slideUp(500);
}

//animation de l'explosion de la mini bombe
function explode(perso, here, box) {    
    $('#soundBomb')[0].play();
    var ici = $('td:nth(' + here + ')')
    effacePicture(here,"bomb");
    ici.prepend('<img id = "boom" class = "bomb" width = 0 height = 0 src="../sprite/boom.png" alt="explode" />');
    
    $('#boom').animate({ 
            'width': '150'
        }, {
            queue: false,
            duration: 500
        })
        .animate({
            'height': '150'
        }, 500, function () {            

            $('body').animate({
                    'right': '+50'
                }, 50)
                .animate({
                    'left': '+50'
                }, 50)
                .animate({
                    'right': '-50'
                }, 50)
                .animate({
                    'left': '-50'
                }, 50)
                .animate({
                    'right': '+50'
                }, 50)
                .animate({
                    'left': '+50'
                }, 50)
                .animate({
                    'left': '0'
                }, 50, function () {

                    $('#' + perso.nom).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100,function(){ 
                        effacePicture(here);
                        insertPerso(perso, here);
                        dialBattle(otherPlayer(perso),degatCalc(perso, degatBomb,false));
                        infoPerso();
                        verifPtsVie();
                    });
                    
                });
        });
}

// fonction qui genere l'animation de l'arme lorsque l'on attaque, trajet de l'attaquant vers la cible
function atkAnim(spriteAtk,attaquant,adversaire){  
    var attacked = false;
    if(attaquant.arme != "Aucune Arme"){       
    var positionHero = $('#'+perso.nom).offset();
    var positionEnnemie = $('#'+adversaire.nom).offset();    
    var sprite = document.createElement('img');
    
    sprite.className = 'atkSprite';
    $('body').append(sprite);
    $('img.atkSprite').attr('src', spriteAtk);
    $('img.atkSprite').css({
        'width': $('table').width() / nbCasehorizontales,
        'height': Math.floor(htScreen / (nbCaseVertical * 1.3)),
        'position':'absolute',
        'top': positionHero.top,
        'left': positionHero.left,
        zIndex : 2000
    });
    
    $('img.atkSprite').animate({
        'top': positionEnnemie.top,
        'left':positionEnnemie.left
    },500, function(){
       $("img").remove('img.atkSprite');
        $('#soundAtk')[0].play();                
        animDegatPerso(adversaire);          
        dialBattle(attaquant,degatCalc(adversaire, attaquant.degat, attacked));
        attacked = true;
        verifPtsVie();
        majPopOver();  
    }); 
    }
    else{
       $('#soundAtk')[0].play();                
        animDegatPerso(adversaire);
        
        dialBattle(attaquant,degatCalc(adversaire, attaquant.degat, attacked));
        attacked = true;
        verifPtsVie();
        majPopOver();   
    }
}
