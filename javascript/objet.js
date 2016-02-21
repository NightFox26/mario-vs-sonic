/*******************************************/
/*************Objet personnage**************/
/*******************************************/
var personnage ={
    initPerso : function(nom,vie,degat){
        this.nom = nom;
        this.vie = vie;
        this.degat = degat;
        this.arme = '...';
        this.actif = false;
        
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
joueur1.initPerso('mario',ptsVieMario,dpsMario);


var joueur2 = Object.create(personnage);
joueur2.initPerso('sonic',ptsVieSonic,dpsSonic);
  
/*****************************************/
/**********Objet case armement************/
/*****************************************/
var boiteArmement = {   
    initBoite : function(hero){
        if (hero === 'mario'){
            this.nom = 'MarioBox'
            this.spriteSrc = 'sprite/bonusMario.png';
        }
        else{
            this.nom = 'SonicBox'
            this.spriteSrc = 'sprite/bonusSonic.png';
        }
    }   
}
/******************************************/
/************Objet case blocante***********/
/******************************************/
var caseBlocante = {
    nom: 'PlanteCarnivor',
    spriteSrc : 'sprite/bloc.png',
}