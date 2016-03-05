/*******************************************/
/*************Objet personnage**************/
/*******************************************/
var personnage = {
    initPerso: function (nom, vie, degat, def, range) {
        this.nom = nom;
        this.vie = vie;
        this.degat = degat;
        this.def = def;
        this.arme = 'Aucune Arme';
        this.range = range;
        this.actif = false;

        if (nom === 'Mario') {
            this.spriteSrc = '../sprite/Mario.png';
            this.spriteSrcDef = '../sprite/MarioDef.png'
        } else {
            this.spriteSrc = '../sprite/Sonic.png';
            this.spriteSrcDef = '../sprite/SonicDef.png'
        }
    },

    decrire: function () {
        alert(this.nom + '\n' +
            this.vie + '\n' +
            this.degat + '\n' +
            this.spriteSrc);
    },

    updateStat: function () {
        if (this.nom == 'Mario') {
            this.degat = dpsMario + statArmeMario[this.arme]['atk'];
            this.def = defMario + statArmeMario[this.arme]['def'];
            this.vie += statArmeMario[this.arme]['vie'];
            this.range = statArmeMario[this.arme]['range'];
        } else if (this.nom == 'Sonic') {
            this.degat = dpsSonic + statArmeSonic[this.arme]['atk'];
            this.def = defSonic + statArmeSonic[this.arme]['def'];
            this.vie += statArmeSonic[this.arme]['vie'];
            this.range = statArmeSonic[this.arme]['range'];
        }
    }

}

// Ici je crée les 2 joueur en fonction du model 'personnage'
var joueur1 = Object.create(personnage);
joueur1.initPerso('Mario', ptsVieMario, dpsMario, defMario,rangeAttaqueStandard);

var joueur2 = Object.create(personnage);
joueur2.initPerso('Sonic', ptsVieSonic, dpsSonic, defSonic,rangeAttaqueStandard);

/*****************************************/
/**********Objet case armement************/
/*****************************************/
var boiteArmement = {
        initBoite: function (hero, id) {
            if (hero === 'Mario') {
                this.nom = 'MarioBox' + id;
                this.spriteSrc = '../sprite/bonusMario.png';
                this.arme = marioArmementPossible[trueRand(0, marioArmementPossible.length - 1)];
                this.armeSrc = '../sprite/weapon/' + hero + 'Weapon' + marioArmementPossible.indexOf(this.arme) + '.png';
            } else {
                this.nom = 'SonicBox' + id;
                this.spriteSrc = '../sprite/bonusSonic.png';
                this.arme = sonicArmementPossible[trueRand(0, sonicArmementPossible.length - 1)];
                this.armeSrc = '../sprite/weapon/' + hero + 'Weapon' + sonicArmementPossible.indexOf(this.arme) + '.png';
            }
            this.bombed = false;
        },
        decrire: function () {
            alert(this.nom + '\n' +
                this.spriteSrc + '\n' +
                this.arme + '\n' +
                'bombed = ' + this.bombed);
        },

    }
    //ici je crée les differente boite d'armement en fonction du nombre configuré
var marioArmementPossible = ["fleur de feu", "feuille tanooki", "carapace koopa", "fleur Marteau","oeuf yoshi","champignon d'or"];
var sonicArmementPossible = ["anneau d'or", "épine tournoyante", "attaque Tail", "chaos power", "armure robotnic","sept joyaux"];
var caisseArme = [];

for (var i = 0, c = nbCaseArme; i < c; i++) {
    createNewWeaponBox(joueur1);
    createNewWeaponBox(joueur2);
}

function createNewWeaponBox(perso) {
    var arme = Object.create(boiteArmement);
    var id = caisseArme.length;
    if (perso.nom == 'Mario') {
        arme.initBoite("Mario", id);
    } else {
        arme.initBoite("Sonic", id);
    }
    caisseArme.push(arme);    
}

function infoArme(nomCaisse) {
    for (var i = 0, c = caisseArme.length; i < c; i++) {
        if (caisseArme[i].nom == nomCaisse) {
            return caisseArme[i];
        }
    }    
}

/******************************************/
/************Objet case blocante***********/
/******************************************/
var caseBlocante = {
    nom: 'PlanteCarnivor',
    spriteSrc: '../sprite/bloc.png',
}