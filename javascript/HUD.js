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
$(function () {
    var tailleCase = $('table').width() / nbCasehorizontales;
   
    $('.pop').css('left',tailleCase/2+'px');    
    $('#popMario').insertBefore($('#mario'));
    $('#popSonic').insertBefore($('#sonic'));
    $(document).remove($('#popSonic')).remove($('#popMario'))    
    $('[data-toggle="popover"]').popover();

    $('#mario').mouseover(function () {
        $('#popMario').trigger("click");
    });

    $('#mario').mouseout(function () {
        $('#popMario').trigger("click");
    });
    
    $('#sonic').mouseover(function () {
        $('#popSonic').trigger("click");
    });

    $('#sonic').mouseout(function () {
        $('#popSonic').trigger("click");
    });


});

//fonction de mise a jour du popover d'info sur les personnage
function majPopOver(){
    //exemple.......a finir
    $('#pop').attr('data-content','Vie : 50 <br/> Arme : Carapace');
}

