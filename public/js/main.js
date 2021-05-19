import { Boss, Mage, Guerrier, Archer } from "./classes.js";

let boss1 = new Boss("Sauron", 60, 150);
let boss2 = new Boss("Chronos", 50, 120);
let boss3 = new Boss("Lilith", 65, 110);

let tabBosses = [boss1, boss2, boss3];
let verifNombreUtilisateur = (tabNombres, totalMax) => {
  let totTmp = 0;
  if (tabNombres.length == 3) {
    tabNombres.forEach((elem) => (totTmp += parseInt(elem)));
  }

  return totTmp == totalMax;
};

let saisieNom = () => {
  let tabNoms = prompt(
    "Veuillez rentrer un nom pour chacun de vos 3 héros qui sont respectivement de type 'Guerrier','Archer', 'Mage'.\n les noms doivent être séparer d'un espace exmpl: LeColosse Arrow MageNoir "
  ).split(" ");

  while (tabNoms.length != 3) {
    tabNoms = prompt(
      "Vous avez mal rentrer les noms reéssayer. Exmpl: LeColosse Arrow MageNoir "
    );
  }

  return tabNoms;
};

let saisiePoint = (totalMax, propriete) => {
  let tabPoints = prompt(
    `Veuillez taper 3 montants séparer d'un espace qui vont correspondre au point de ${propriete} de vos héros. \n ces montants lorsqu'on les additione doivent être egale à ${totalMax}`
  ).split(" ");
  while (!verifNombreUtilisateur(tabPoints, totalMax)) {
    tabPoints = prompt(
      "Les nombres entrer  ne sont pas bon réessayer. si le motant totale est 300 Exmpl: 100 150 50"
    ).split(" ");
  }
  for (i in tabPoints) {
    tabPoints[i] = parseInt(tabPoints[i]);
  }
  return tabPoints;
};

let creationHeros = () => {
  let tabJoueurs = [];
  let totalPointDeVie = 300;
  let totalpointAttaque = 500;

  let [nom1, nom2, nom3] = saisieNom();

  let [pointsDeVie1, pointsDeVie2, pointsDeVie3] = saisiePoint(
    totalPointDeVie,
    " Points de vie"
  );

  let [pointsAttaque1, pointsAttaque2, pointsAttaque3] = saisiePoint(
    totalpointAttaque,
    "point d'attaque"
  );
  let heros1 = new Guerrier(nom1, pointsDeVie1, pointsAttaque1);

  let heros2 = new Archer(nom2, pointsDeVie2, pointsAttaque2);

  let heros3 = new Mage(nom3, pointsDeVie3, pointsAttaque3);

  return [heros1, heros2, heros3];
};
let lancerJeur = () => {
  console.log("Bienvenue dans le jeu GeekOfLegends");
  let bossDuGame = tabBosses[Math.floor(Math.random() * tabBosses.length)];
  let [heros1, heros2, heros3] = creationHeros();
};
