/*******************************************/
/*************class personnage**************/
/*******************************************/
var personnage ={
    initPerso : function(nom,vie,degat){
        this.nom = nom;
        this.vie = vie;
        this.degat = degat;
        
        if(nom==='mario'){
            this.spriteSrc='sprite/mario.png';
        }
        else{
           this.spriteSrc='sprite/sonic.png'; 
        }
    },   
    
    decrire : function (){
        alert(this.nom +'\n'+
              this.vie+'\n'+
              this.degat+'\n'+
              this.spriteSrc);
    }
    
}

var joueur1 = Object.create(personnage);
joueur1.initPerso('mario',100,10);


var joueur2 = Object.create(personnage);
joueur2.initPerso('sonic',100,10);
  
/*****************************************/
/**********class case armement************/
/*****************************************/
var boiteArmement = {
    initBoite : function(hero){
        if (hero === 'mario'){
            this.spriteSrc = 'sprite/bonusMario.png';
        }
        else{
            this.spriteSrc = 'sprite/bonusSonic.png';
        }
    }   
}
/******************************************/
/************class case blocante***********/
/******************************************/
var caseBlocante = {
    spriteSrc : 'sprite/bloc.png',
}