/*******************************************/
/*************Objet personnage**************/
/*******************************************/
var personnage ={
    initPerso : function(nom,vie,degat,def){
        this.nom = nom;
        this.vie = vie;
        this.degat = degat;
        this.def = def;
        this.arme = 'Aucune Arme';
        this.actif = false;
        
        if(nom==='Mario'){
            this.spriteSrc='sprite/Mario.png';
            this.spriteSrcDef='sprite/MarioDef.png'
        }
        else{
           this.spriteSrc='sprite/Sonic.png';
           this.spriteSrcDef='sprite/SonicDef.png'
        }
    },   
    
    decrire : function (){
        alert(this.nom +'\n'+
              this.vie+'\n'+
              this.degat+'\n'+
              this.spriteSrc);
    },
    
    updateStatAtk : function(){
        if (this.nom == 'Mario'){
            this.degat = dpsMario + degatArmeMario[this.arme];
        }
        else if (this.nom == 'Sonic'){
            this.degat = dpsSonic + degatArmeSonic[this.arme];
        }
    }
    
}

var joueur1 = Object.create(personnage);
joueur1.initPerso('Mario',ptsVieMario,dpsMario,defMario);


var joueur2 = Object.create(personnage);
joueur2.initPerso('Sonic',ptsVieSonic,dpsSonic,defSonic);
  
/*****************************************/
/**********Objet case armement************/
/*****************************************/
var boiteArmement = {     
    initBoite : function(hero,id){
        if (hero === 'Mario'){
            this.nom = 'MarioBox'+id;
            this.spriteSrc = 'sprite/bonusMario.png';
            this.arme = marioArmementPossible[trueRand(0,marioArmementPossible.length-1)];
            this.armeSrc = 'sprite/weapon/'+hero+'Weapon'+marioArmementPossible.indexOf(this.arme)+'.png';
        }
        else{
            this.nom = 'SonicBox'+id;
            this.spriteSrc = 'sprite/bonusSonic.png';
            this.arme = sonicArmementPossible[trueRand(0,sonicArmementPossible.length-1)];
            this.armeSrc = 'sprite/weapon/'+hero+'Weapon'+sonicArmementPossible.indexOf(this.arme)+'.png';
        }
        this.bombed = false;
    },
    decrire : function(){
        alert(this.nom+'\n'+
             this.spriteSrc+'\n'+
              this.arme +'\n'+
             'bombed = '+this.bombed);
    },    
    
}
//ici je crée les differente boite d'armement en fonction du nombre configuré
var marioArmementPossible = ["fleur de feu","carapace rouge","carapace bleu","boulet de canon"];
var sonicArmementPossible = ["anneau d'or","épine tournoyante","attaque Tail","sept joyaux"];
var caisseArme = [];
for(var i = 0,c=nbCaseArme; i<c ; i++){
    var arme = Object.create(boiteArmement);
    var id = caisseArme.length;
    arme.initBoite("Mario",id)
    caisseArme.push(arme);
    //arme.decrire();
    
    var arme = Object.create(boiteArmement);
    arme.initBoite("Sonic",id)
    caisseArme.push(arme);
    //arme.decrire();
}

function infoArme(nomCaisse){
    for (var i = 0,c=caisseArme.length; i<c ; i++){        
        if(caisseArme[i].nom==nomCaisse){
            return caisseArme[i];
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