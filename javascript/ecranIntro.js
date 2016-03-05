//Ce script gere la page d'acceuil, le changement de background en fonction du survol des bouttons ansi que le click 
$(function () {
     var artwork = "vsPlayer";

     $('[data-toggle="popover"]').popover();
     var htScreen = window.innerHeight;
     $('body').css('height', htScreen);

     $('#introPerso').hide().fadeIn(1500);

     $("#vsIa").mouseenter(function () {
         if (artwork != "vsIa") {
             $('#intro,#introPerso').fadeOut(300, function () {
                 $('#intro').css('background-image', 'url("sprite/intro2.jpg")').fadeIn(500);
                 $('#introPerso').css({
                     'background-image': 'url(sprite/marioSonic2.png)',
                     'width': '90%'
                 }).fadeIn(1500);
                 artwork = "vsIa";
             });
         }
     });

     $("#vsplayer").mouseenter(function () {
         if (artwork != "vsPlayer") {
             $('#intro,#introPerso').fadeOut(300, function () {
                 $('#intro').css('background-image', 'url("sprite/intro.jpg")').fadeIn(500);
                 $('#introPerso').css({
                     'background-image': 'url(sprite/marioSonic.png)',
                     'width': '50%'
                 }).fadeIn(1500);
                 artwork = "vsPlayer";
             });
         }

     });

     $("#vsIa").mouseleave(function () {
         if ($('.popover').hasClass('in')) {
             $("#vsIa").click();
         }
     });

     $('#vsplayer').on('click', startGameSound);


     function startGameSound() {
         $('#startGame')[0].play();
         $('#intro,#introPerso').fadeOut(1200, function () {
             $(location).attr('href', "vue/game.html");
         });
     }

 });