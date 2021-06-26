//fonction de random entre deux valeurs definie
function trueRand(min, max) {
    var rand = Math.random();
    rand = Math.floor((rand * (max - (min - 1)) + min));
    return rand;
} 

//fonction qui renvoie un array random
function arrayRand(array) {
    var arrayAleatoir = [];
      
    for (i = trueRand(0, array.length - 1); i < array.length; i = trueRand(0, array.length - 1)) {
        arrayAleatoir.push(array[i]);
        array.splice(i, 1);
    } 
    return arrayGrille = arrayAleatoir;   
}

//fonction qui renvoie la date et l'heure de maintenant (utile dans un tchat)
function getDate() {
            var now = new Date();
            var h = now.getHours(),
                min = now.getMinutes(),
                s = now.getSeconds(),
                y = now.getFullYear(),
                m = parseInt(now.getMonth()) + 1,
                d = now.getDate();

            if (min < 10) {
                min = '0' + min;
            }
            if (s < 10) {
                s = '0' + s;
            }
            if (m < 10) {
                m = '0' + m;
            }
            
           var date = d+'/'+m+'/'+y+' à '+h+':'+min+' ';
           return date;
}