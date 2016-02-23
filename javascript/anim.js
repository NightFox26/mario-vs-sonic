//gestion du clignotement des personnages quand c'est a leur tour de jouer
function spriteClignote() {
    if(joueur1.actif){
        perso = joueur1;
    }else{
        perso = joueur2;
    }
    $('#' +perso.nom).fadeOut(700).fadeIn(700);      
}

 setInterval(spriteClignote,2000);


//gestion de la mini bomb sur les case armement
function putBomb(here){
    var idBox = $('td:nth(' + here + ')>img[class*="Box"]')[0].className;    
    infoArme(idBox).bombed = true;
    $('td:nth(' + here + ')').prepend('<img class = "bomb" src="sprite/bomb.gif" alt="animBomb" title = "Caisse piégée">');
    //infoArme(idBox).decrire();
}
