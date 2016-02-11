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