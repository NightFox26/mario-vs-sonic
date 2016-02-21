//fonction qui affiche le tour de jeu du perso en court (exemple 'Sonic Turn')
function hudTurnPLayerInfo(player) {
    if (player == joueur1) {
        var other = joueur2;
    } else {
        var other = joueur1;
    }
    $('span[class*="turn"]').text(player.nom + ' turn').addClass(player.nom).removeClass(other.nom);
}

//fonction qui colorise la barre d'action en fonction des actions possible
function coloringActionMenu(actionArray) {
    var moveMenu = $('#move');
    var atkMenu = $('#atk');
    var endMenu = $('#end');

    moveMenu.css('color', 'lightgreen');
    atkMenu.css('color', 'orange');
    endMenu.css('color', 'lightblue');

    for (i = 0; i < actionArray.length; i++) {
        if (actionArray[i] === 'move') {
            moveMenu.css('color', 'lightgrey');
        } else if (actionArray[i] === 'atk') {
            atkMenu.css('color', 'lightgrey');
        }
    }
}

//fonction qui gere le popover de la mini fenetre d info lorsque la sourie passe sur mario ou sonic
function infoPerso(){
    var tailleCase = $('table').width() / nbCasehorizontales;
   
    $('.pop').css('left',tailleCase/2+'px');    
    $('[data-toggle="popover"]').popover();

    $('#mario,#sonic').mouseenter(function () {         
        //$('#mario').trigger("click");
        $('[data-toggle="popover"]').popover('show');
    });

    $('#mario,#sonic').mouseout(function () {        
        $('[data-toggle="popover"]').popover('hide');        
    });    
}

//fonction de mise a jour du popover d'info sur les personnage
function majPopOver(){ 
    var perso = joueur1;
    for(var i = 0;i<2;i++){        
         $('#'+perso.nom).attr('data-html',"true").attr('data-container',"body").attr('data-toggle',"popover").attr('data-placement',"top"); 
    
         $('#'+perso.nom).attr('data-content','Infos '+perso.nom +':<br/>Vie : '+perso.vie+ '<br/> Dégat : '+perso.degat +'<br/> Arme : '+perso.arme);
        perso = joueur2;
    }
    infoPerso();    
}


$(':checkbox#musique').change(function(){
    if ($(this).is(':checked')){
       $('#audio')[0].play(); 
    } 
    else{
       $('#audio')[0].pause(); 
    }
})
