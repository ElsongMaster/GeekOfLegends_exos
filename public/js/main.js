import {
  creationBoss,
  creationHeros,
  choixPosture,
  afficheEtatJeu,
} from "./fonction.js";

let lancerJeu = () => {
  console.log("Bienvenue dans le jeu GeekOfLegends");
  console.log("===================");
  let bossDuGame = creationBoss();
  let tabHeros = creationHeros();
  console.log("Début du jeu");
  console.log(`Etat initial du jeu`);
  console.log("-----------------------");
  console.log(
    `Le boss du jeu ${bossDuGame.nom} possède ${bossDuGame.pointsDeVie} de points de vie et ${bossDuGame.pointsAttaque} de points d'attque `
  );
  console.log(
    `Le Guerrier ${tabHeros[0].nom} possède ${tabHeros[0].pointsDeVie} de points de vie et ${tabHeros[0].pointsAttaque} de points d'attque `
  );
  console.log(
    `L'arché ${tabHeros[1].nom} possède ${tabHeros[1].pointsDeVie} de points de vie et ${tabHeros[1].pointsAttaque} de points d'attque `
  );

  console.log(
    `Le mage ${tabHeros[2].nom} possède encore ${tabHeros[2].pointsDeVie} de points de vie et ${tabHeros[2].pointsAttaque} de points d'attque `
  );
  // console.log(tabHeros);
  let tourJeu = 1;
  while (bossDuGame.pointsDeVie > 0 && tabHeros.length > 0) {
    choixPosture(tabHeros, bossDuGame);
    bossDuGame.attaque(tabHeros[Math.floor(Math.random() * tabHeros.length)]);
    if (bossDuGame.pointsDeVie <= bossDuGame.pointsDeVieDeDepart * 0.2) {
      bossDuGame.poserEnigme(tabHeros);
    }

    console.log(`Voici l'état du jeu au Tour ${tourJeu}`);
    console.log("----------------------------------");
    afficheEtatJeu(bossDuGame, tabHeros);
    tabHeros.forEach((elem) => {
      if (elem.pointsDeVie <= 0) {
        tabHeros.splice(tabHeros.indexOf(elem));
      }
    });
    tourJeu++;
  }
};

//Lancement du jeu

lancerJeu();
