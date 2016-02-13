$(function () {
    var playerStart = trueRand(1, 2),
        player;

    if (playerStart == 1) {
        player = joueur1;
    } else {
        player = joueur2;
    }
    console.log(player.nom);

    
        $('#about').click(function () {
            player = nextPLayer(player);
            $('td').on('click', possibleMove(player));
        });

        $('#contact').click(function () {
            $('.depPossible').on('click', move(player))
             
        });
       
    

    function nextPLayer(playerActif) {
        if (playerActif == joueur1) {
            $('span[class*="turn"]').text(joueur2.nom + ' turn').addClass(joueur2.nom).removeClass(joueur1.nom)
            return joueur2;
        } else if (playerActif == joueur2) {
            $('span[class*="turn"]').text(joueur1.nom + ' turn').addClass(joueur1.nom).removeClass(joueur2.nom)
            return joueur1;
        }
    }
});