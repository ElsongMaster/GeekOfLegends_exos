//Exo 1

// class Personnage {
//   constructor(age, nom, ville) {
//     this.age = age;
//     this.nom = nom;
//     this.ville = ville;
//   }

//   sePresenter() {
//     console.log(`Bonjour, je m'appelle ${this.nom}`);
//   }
// }

// let perso1 = new Personnage(28, "EL", "Bruxelles");

// let perso2 = new Personnage(30, "Hustler", "London");

// console.log(perso1, perso2);

// perso1.sePresenter();
// perso2.sePresenter();

//Exo 2

// class Lieu{
//   constructor(nom,contenu,ingredients){
//     this.nom = "cuisine";
//     this.contenu = contenu;
//     this.ingredients = ingredients;

//   }
// }

// //Instanciation
// let maison = new Lieu("maison",[]);

// let epicerie = new Lieu("epicerie",[],[]);

// let cusine = new Lieu("cuisine",[],[]);

// class Ingredient{
//     constructor(nom,etat,prix){
//       this.nom = nom;
//       this.etat = etat;
//       this.prix = prix;
//     }
// }

// //instanciation
// let poivron = new Ingredient("poivron","entier",1);

// let oignon = new Ingredient("oignon","entier",2);

// let oeuf = new Ingredient("oeuf","entier",4);

// let epice = new Ingredient("epice","moulu",3.25);

// let paprika = new Ingredient("paprika","moulu",1.5);

// let fromage = new Ingredient("fromage","coupé",16);

// class Personne{
//     constructor(nom,lieu,argent,panier){
//         this.nom = nom;
//         this.lieu = lieu;
//         this.argent = argent;
//         this.panier = panier;
//     }

//     seDeplacer(x){

//     }

//     payer(x){

//     }
// }

// //Instanciation

// let personnage = new Personne("Maxime","néant",100,[]);

//Exo 3

// class Objet {
//   constructor(nom, prix) {
//     this.nom = nom;
//     this.prix = prix;
//   }
// }

// let pomme = new Objet("pomme", 0.5);

// let mangue = new Objet("mangue", 1);

// let tab = [pomme, mangue];

// class Personnage {
//   constructor(nom, sac, argent) {
//     this.nom = nom;
//     this.sac = sac;
//     this.argent = argent;
//   }

// prendre(boite,objet) {
//   this.sac.push(objet);
//   boite.splice(boite.indexOf(objet),1);
// }

//   acheter(vendeur, objet) {
//     if (this.argent >= objet.prix) {
//       this.prendre(...vendeur.sac.splice(vendeur.sac.indexOf(objet), 1));
//       this.argent -= objet.prix;
//       vendeur.argent += objet.prix;
//     } else {
//       alert("Vous ne possédez pas assez d'argent pour acheter ce produit!");
//     }
//   }
// }

// let perso1 = new Personnage("Paul", tab, 50);

// let perso2 = new Personnage("Taulier", [], 20);

// perso2.acheter(perso1, pomme);

// console.log(perso2, perso1);

//Exo 4

// ## EXO4

// ### Créez une class [Lieu] avec une propriété nom(string) et personnes(array vide).
// ### Puis créez des instances de [Lieu]: MolenGeek, Snack et Maison
// ### Puis créez une class [Personne] avec une propriété nom(string), prenom(string), argent(number) et
//  une methode seDeplacer(), cette methode permet de vous déplacer dans les differents lieux
//  en faisant appel à la méthode embarquer() du bus.
// ### Puis créez une instance de votre personnage.
// ### Créez une class [Bus] avec une propriéte personnes(array vide), une propriéte caisse(number)
// et une methode embarquer() (qui sera appelée dans la méthode seDeplacer() de la personne) qui va vérifier si vous possedez l'argent,
// si oui, il le déduit de votre argent, et le rajoute à sa caisse, et le personnage rentre dans le bus. Le bus cout 2.80.

// ### Créez une instance de Bus.
// ### 8h00 Vous êtes à la maison.
// ### 8h30 Vous prennez le bus vers MolenGeek.
// ### 8h45 Vous êtes à MolenGeek.
// ### 12h45 Vous sortez de MolenGeek, vous prenez le bus pour aller au snack.
// ### 13h30 Vous sortez du snack, et vous rentrer pied à MolenGeek pour digérer.
// ### 17h10 Vous sortez de MolenGeek, vous prenez le bus pour rentrer chez vous.

// ### Faites un console.log() de votre argent, ainsi que l'argent du Bus

class Lieu {
  constructor(nom, personnes) {
    this.nom = nom;
    this.personnes = personnes;
  }
}

class Personne {
  constructor(nom, prenom, argent, positionActuelle) {
    this.nom = nom;
    this.prenom = prenom;
    this.argent = argent;
    this.positionActuelle = positionActuelle;
    this.positionActuelle.personnes.push(this);
  }

  seDeplacer(bus, heure, tabLieux) {
    this.positionActuelle.personnes.splice(
      this.positionActuelle.personnes.indexOf(this),
      1
    );

    let destination = prompt("Ou voulez-vous allez?");

    while (!tabLieux.includes(destination)) {
      destination = prompt(
        "Veuillez choisir entre les lieux suivant: 1)Maison 2)Molengeek 3)Snack. Attention à l'orthographe"
      );
    }
    bus.embarquer(this);
    // Si j'ai pu embarquer dans le bus
    if (bus.personnes.includes(this)) {
      alert(`${heure} Je suis dans le bus pour aller à ${destination}`);
      bus.personnes.splice(bus.personnes.indexOf(this));
    } else {
      alert(`Je rentre à pied à ${destination} pour digérer`);
    }
    this.positionActuelle = new Lieu(destination, [this]);
  }
}

class Bus {
  constructor(personnes, caisses) {
    this.personnes = personnes;
    this.caisses = caisses;
  }

  embarquer(personne) {
    if (personne.argent >= 2.8) {
      if (confirm("Voulez-vous prendre le bus")) {
        this.personnes.push(personne);
        personne.argent -= 2.8;
        this.caisses += 2.8;
      } else {
        alert("Pas de problème si vous préferez marcher. Bonne marche");
      }
    } else {
      alert("Vous n'avez pas assez d'argent pour voyager en bus");
    }
  }
}
//instance Lieu
let molengeek = new Lieu("Molengeek", []);

let snack = new Lieu("Snack", []);

let maison = new Lieu("Maison", []);

//instance Personne

let elsonG = new Personne("hustler", "ElsonG", 30, maison);

//instance bus
let bus = new Bus([], 100);

let lieuxPossible = [molengeek.nom, snack.nom, maison.nom];

alert(`8h00 Vous êtes à la ${elsonG.positionActuelle.nom}`);

elsonG.seDeplacer(bus, "8h30", lieuxPossible);

alert(`8h45 je suis à ${elsonG.positionActuelle.nom}`);

alert(`12h45 je sors de ${elsonG.positionActuelle.nom}`);

elsonG.seDeplacer(bus, "12h45", lieuxPossible);

alert(`13h30 je sors du ${elsonG.positionActuelle.nom}`);

elsonG.seDeplacer(bus, "13h30", lieuxPossible);

elsonG.seDeplacer(bus, "17h30", lieuxPossible);
