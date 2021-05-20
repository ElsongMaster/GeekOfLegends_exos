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
    ).split(" ");
  }

  return tabNoms;
};

let saisiePoint = (totalMax, propriete) => {
  let tabPoints = prompt(
    `Veuillez taper 3 montants séparer d'un espace qui vont correspondre au point de ${propriete} de vos héros. \n ces montants lorsqu'on les additione doivent être egale à ${totalMax}`
  ).split(" ");
  while (!verifNombreUtilisateur(tabPoints, totalMax)) {
    tabPoints = prompt(
      "Les nombres entrer  ne sont pas bon réessayer. si le motant totale est 300, cela donne par Exmpl: 100 150 50"
    ).split(" ");
  }
  for (let i in tabPoints) {
    tabPoints[i] = parseInt(tabPoints[i]);
  }
  return tabPoints;
};

let creationHeros = () => {
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
let verifEntreUtilisateur = (quest, tabRepAttendue) => {
  let questTmp = prompt(`${quest}`).toUpperCase();
  while (!tabRepAttendue.includes(questTmp)) {
    questTmp = prompt(
      `Ce que vous avez rentrée est incorrect réessayer! ${quest}`
    ).toUpperCase();
  }
  return true;
};
let choixPosture = (heros, opposant) => {
  let quest = `${heros.nom} quelle posture voulez vous adopter pour ce tour? Choisissez entre les options suivantes: 'DEFENSE' , 'ATTAQUE' ou 'NORMAL'`;
  let verifRetour = verifEntreUtilisateur(quest, [
    "DEFENSE",
    "ATTAQUE",
    "NORMAL",
  ]);
  if (verifRetour == "DEFENSE") {
    console.log("Dans ma condition");
    heros.defense();
  } else if (verifRetour == "ATTAQUE") {
    heros.attaque(opposant);
  }
};
let lancerJeur = () => {
  console.log("Bienvenue dans le jeu GeekOfLegends");
  let bossDuGame = tabBosses[Math.floor(Math.random() * tabBosses.length)];
  let [heros1, heros2, heros3] = creationHeros();

  let tabHeros = [heros1, heros2, heros3];

  console.log("Début du jeu");
  let tourJeu = 1;
  while (
    bossDuGame.pointsDeVie != 0 ||
    (tabHeros[0].pointsDeVie != 0 &&
      tabHeros[1].pointsDeVie &&
      tabHeros[2].pointsDeVie != 0)
  ) {
    choixPosture(tabHeros[0], bossDuGame);
    choixPosture(tabHeros[1], bossDuGame);
    choixPosture(tabHeros[2], bossDuGame);
    // choixPosture(
    //   bossDuGame,
    //   tabHeros[Math.floor(Math.random() * tabHeros.length)]
    // );
    bossDuGame.attaque(tabHeros[Math.floor(Math.random() * tabHeros.length)]);

    tourJeu++;
  }
};

//Lancement du jeu

lancerJeur();
