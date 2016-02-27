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
    var defMenu = $('#def');
    var endMenu = $('#end');

    moveMenu.css('color', 'lightgreen');
    atkMenu.css('color', 'orange');
    defMenu.css('color', 'yellow');
    endMenu.css('color', 'lightblue');

    for (i = 0; i < actionArray.length; i++) {
        if (actionArray[i] === 'move') {
            moveMenu.css('color', 'lightgrey');
        } else if (actionArray[i] === 'atk') {
            atkMenu.css('color', 'lightgrey');
        } else if (actionArray[i] === 'def') {
            defMenu.css('color', 'lightgrey');
        }
    }
}

//fonction qui gere le popover de la mini fenetre d info lorsque la sourie passe sur mario, sonic, ou l'arme active dans le bandeau superieur
function infoPerso() {
    var tailleCase = $('table').width() / nbCasehorizontales;

    //$('.pop').css('left', tailleCase / 2 + 'px');
    $('[data-toggle="popover"]').popover();

    $('#weapon').mouseenter(function () {
        $(this).popover('show');
    });

    $('#weapon').mouseout(function () {
        $(this).popover('hide');
    });

    $('#Mario,#Sonic').click(function () {
        majPopOver($(this).attr('id'));
        $(this).popover('show');
    });

    $('#Mario,#Sonic').mouseout(function () {
        $(this).popover('hide');
    });
}

//fonction de mise a jour du popover d'info sur les personnage
function majPopOver(perso) {
    if (perso == "Mario") {
        var perso = joueur1;
    } else {
        var perso = joueur2;
    }

    $('#' + perso.nom).attr('data-html', "true").attr('data-container', "body").attr('data-toggle', "popover").attr('data-placement', "top");
    $('#' + perso.nom).attr('data-content', 'Infos ' + perso.nom + ':<br/>Vie : ' + perso.vie + '<br/> Défense : ' + perso.def + '<br/> Dégât : ' + perso.degat + '<br/> Arme : ' + perso.arme);
}

//fonction de dialogue des personnages lorsqu'il ramasse une nouvelle arme et inscription de celle ci dans la barre supperieur
function dialBoxWeaponLoot(perso, box) {
    $('#' + perso.nom).attr("data-toggle", "popover").attr('data-html', "true").attr('data-container', "body").attr('data-toggle', "popover").attr('data-placement', "top");
    if (box.nom.search(perso.nom)>=0) {        
        $('#' + perso.nom).attr('data-content', "<p>Je Gagne : " + box.arme + '<br/><img src =' + box.armeSrc + ' alt = "arme" class="img-responsive center-block"/></p>').popover('show');
        perso.arme = box.arme;

        perso.updateStatAtk();
        updateWeaponHud(perso);
        apparencePerso(perso,box.nom);
    }
    else{       
       $('#' + perso.nom).attr('data-content', "Je piege ta case!!! <br/>Viens le prendre maintenant!!!").popover('show');; 
    }
}

//function qui met a jour le bandeau superieur a chaque tour (pour l'arme que possede le joueur)
function updateWeaponHud(perso) {
    if (perso.arme !== 'Aucune Arme') {
        if (perso.nom == 'Mario') {
            var armeSrc = 'sprite/weapon/' + perso.nom + 'Weapon' + marioArmementPossible.indexOf(perso.arme) + '.png';
            var arme = statArmeMario[perso.arme];
        } else {
            var armeSrc = 'sprite/weapon/' + perso.nom + 'Weapon' + sonicArmementPossible.indexOf(perso.arme) + '.png';
            var arme = statArmeSonic[perso.arme];
        }

        $('#weapon').attr({
            'class': perso.arme,
            'data-content': perso.nom + ' est equipé : <br/>' + perso.arme + '<br/><br/>Dégat : ' + arme['atk'] + '<br/>Défence : ' + arme['def'] + '<br/>Vie : ' + arme['vie'] + '<br/>Portée : ' + arme['range'],
            'src': armeSrc
        });
    } else {
        var armeSrc = "sprite/weapon/noWeapon.png";

        $('#weapon').attr({
            'class': perso.arme,
            'data-content': perso.nom + ' est equipé : <br/>' + perso.arme,
            'src': armeSrc
        });
    }


}

// gestion evenementielle de la checkbox qui allume ou eteint la musique
$(':checkbox#musique').change(function () {
    if ($(this).is(':checked')) {
        $('#bgm')[0].play();
    } else {
        $('#bgm')[0].pause();
    }
})