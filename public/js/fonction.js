import { Boss, Mage, Guerrier, Archer } from "./classes.js";

let verifEntreNbUtilisateur = (tabNombres, totalMax) => {
  let totTmp = 0;
  if (tabNombres.length == 3) {
    tabNombres.forEach((elem) => (totTmp += parseInt(elem)));
  }

  return totTmp == totalMax;
};

let verifEntreUtilisateur = (quest, tabRepAttendue) => {
  let questTmp = prompt(`${quest}`).toUpperCase();
  while (!tabRepAttendue.includes(questTmp)) {
    questTmp = prompt(
      `Ce que vous avez rentrée est incorrect réessayer! ${quest}`
    ).toUpperCase();
  }
  return questTmp;
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
  while (!verifEntreNbUtilisateur(tabPoints, totalMax)) {
    tabPoints = prompt(
      `Les nombres entrer  ne sont pas bon réessayer. si le motant totale est ${totalMax} , cela donne par Exmpl: ${
        totalMax * 0.3
      } ${totalMax * 0.3} ${totalMax - totalMax * 0.6}`
    ).split(" ");
  }
  for (let i in tabPoints) {
    tabPoints[i] = parseInt(tabPoints[i]);
  }
  return tabPoints;
};

let choixPosture = (heros, opposant) => {
  let quest = `${heros.nom} quelle posture voulez vous adopter pour ce tour? Choisissez entre les options suivantes: 'DEFENSE' , 'ATTAQUE' ou 'NORMAL'`;
  let verifRetour = verifEntreUtilisateur(quest, [
    "DEFENSE",
    "ATTAQUE",
    "NORMAL",
  ]);
  if (verifRetour == "DEFENSE") {
    heros.defense(opposant);
  } else if (verifRetour == "ATTAQUE") {
    heros.attaque(opposant);
  } else {
    heros.normal(opposant);
  }
};

let creationBoss = () => {
  let boss1 = new Boss("Sauron", 10000, 300);
  let boss2 = new Boss("Chronos", 10000, 300);
  let boss3 = new Boss("Lilith", 10000, 300);

  let tabBosses = [boss1, boss2, boss3];

  return tabBosses[Math.floor(Math.random() * tabBosses.length)];
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

export { creationBoss, creationHeros, choixPosture };
