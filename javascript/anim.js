function spriteClignote() {
    if(joueur1.actif){
        perso = joueur1;
    }else{
        perso = joueur2;
    }
    $('#' +perso.nom).fadeOut(700).fadeIn(700);      
}

 setInterval(spriteClignote,2000);
