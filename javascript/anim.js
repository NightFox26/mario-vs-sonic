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
    var idBox = $('td:nth(' + here + ')>img[class*="Box"]')[0].className;
    infoArme(idBox).bombed = true;
    $('td:nth(' + here + ')').prepend('<img class = "bomb" src="sprite/bomb.gif" alt="animBomb" title = "Caisse piégée">');    
}

//animation de l'explosion de la mini bombe
function explode(perso, here) {
    var ici = $('td:nth(' + here + ')')
    effacePicture(here,"bomb");
    ici.prepend('<img id = "boom" class = "bomb" width = 0 height = 0 src="sprite/boom.png" alt="explode" />');
    
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
                        insertPerso(perso, here)                                        
                    });
                    
                });

        });




}