import { Boss, Mage, Guerrier, Archer } from "./classes.js";


let boss1 = new Boss("Sauron",60,150);
let boss2 = new Boss("Chronos", 50, 120);
let boss3 = new Boss("Lilith",65,110);



let tabBosses = [boss1,boss2,boss3];
let creationHeros = ()=>{
  let tabJoueurs = [];
  // for(let i = 0; i<=2;i++){
  // }
  
  let heros1= prompt("Veuillez entrer une nom pour votre personnage Guerrier");

  let heros2= prompt("Veuillez entrer une nom pour votre personnage Archer");

  let heros3= prompt("Veuillez entrer une nom pour votre personnage Mage");


}
let lancerJeur = ()=>{
    console.log("Bienvenue dans le jeu GeekOfLegends");
    let bossDuGame = Math.floor(Math.random()*tabBosses.length);
    let joueur = new 
}