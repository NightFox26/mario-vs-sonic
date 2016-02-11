
$('img.mario').click(function () {
    deplacementPossible(this.className,arrayGrille);
})

$('img.sonic').click(function () {
    deplacementPossible(this.className,arrayGrille);
})


//fonction qui affiche les cases de deplacement possible autour du personnage
function deplacementPossible(perso, array) {
    var i = 0,
        c = array.length,
        dep = nbCaseDeplacementPerso,
        idCasePerso = array.indexOf("mario");
    alert(idCasePerso);
    for (i; i < dep; i++) {
        
        $('td[class="'+perso+'"]').addClass('depPossible');
    }
}