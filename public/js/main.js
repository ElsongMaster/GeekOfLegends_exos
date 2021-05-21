import { creationBoss, creationHeros, choixPosture } from "./fonction.js";

let lancerJeu = () => {
  console.log("Bienvenue dans le jeu GeekOfLegends");
  let bossDuGame = creationBoss();
  let tabHeros = creationHeros();
  // console.log(tabHeros);

  console.log("Début du jeu");
  while (
    bossDuGame.pointsDeVie > 0 &&
    tabHeros[0].pointsDeVie > 0 &&
    tabHeros[1].pointsDeVie > 0 &&
    tabHeros[2].pointsDeVie > 0
  ) {
    choixPosture(tabHeros[0], bossDuGame);
    choixPosture(tabHeros[1], bossDuGame);
    choixPosture(tabHeros[2], bossDuGame);
    bossDuGame.attaque(tabHeros[Math.floor(Math.random() * tabHeros.length)]);
    if (bossDuGame.pointsDeVie <= bossDuGame.pointsDeVieDeDepart * 0.2) {
      bossDuGame.poserEnigme(tabHeros);
    }
  }
};

//Lancement du jeu

lancerJeu();
