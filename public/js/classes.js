class Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    this.nom = nom;
    this.pointsDeVie = pointsDeVie;
    this.pointsAttaque = pointsAttaque;
    this.tourJeu = 0;
  }
  defense() {
    this.pointsAttaque *= 0.5;
    this.pointsDeVie *= 2.5;
  }
  attaque() {
    this.pointsAttaque *= 1.4;
    this.pointsDeVie *= 0.25;
  }
}

class Boss extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    let enigme1 =
      "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?";
    let rep1 = "le courant";
    let enigme2 = "Quel est l'indice du premier 'i' de cette question";
    let rep2 = enigme1.split("").find((elem) => elem == "i");
    let enigme3 = "Que retourne Math.floor(1.3 *10)";
    let rep3 = "13";
    this.pointsDeVieDeDepart = pointsDeVie;
    this.tabEnigmes = [enigme1, enigme2, enigme3];
    this.repEnigmes = [rep1, rep2, rep3];
  }

  poserEnigme() {
    console.log("Vous êtes presqu'a la fin du jeu.");
    console.log(
      "Pour la dernière épreuve du jeu, il vous faut répondre à cette énigme en maximum 3 essaies: "
    );
    let indice = Math.floor(Math.random() * this.tabEnigmes.length);
    let enigme = prompt(`${this.tabEnigmes[indice]}:`).toLocaleUpperCase();
    let rep = this.repEnigmes[indice].toLocaleUpperCase();
    let i = 3;
    while (i >= 0 || enigme != rep) {
      i--;
      enigme = prompt(
        `Mauvaise réponse, il vous reste encore ${i} essaies\n ${this.tabEnigmes[indice]}:`
      ).toLocaleUpperCase();
    }

    if (enigme == rep) {
      console.log(
        `Félicitation vous venez de remporter cette dernière épreuve! Vous m'avez battu`
      );
    } else {
      console.log(
        `Game Over, vous n'avez pas su correctement répondre à l'énigme.`
      );
    }
  }
  attaque() {
    super.attaque();
  }
  defense() {
    super.defense();
    if (this.pointsDeVie == this.pointsDeVieDeDepart * 0.2) {
      this.poserEnigme();
    }
  }
}
class Guerrier extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    super.tourJeu = 0;
    this.pointDeRage = 0;
  }

  defense() {
    super.defense();
  }
  attaque() {
    super.attaque();
  }
}

class Mage extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    super.tourJeu = 0;
    let tabTmp = [7, 9, 11];
    this.pointDeMana = tabTmp[Math.floor(Math.random() * tabTmp.length)];
  }

  defense() {
    super.defense();
  }
  attaque(tourJeu) {
    super.attaque();
    if (this.pointDeMana - 2 >= 0) {
      this.pointDeMana -= 2;
      this.tourJeu++;
    } else if (tourJeu - this.tourJeu == 1) {
      this.pointDeMana += 7;
      this.tourJeu++;
    }
  }
}

class Archer extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    super.tourJeu = 0;
    let tabTmp = [7, 8, 9, 10, 11];
    this.NombreFlêches = tabTmp[Math.floor(Math.random() * tabTmp.length)];
  }

  defense(boss) {
    super.defense();
  }
  attaque(tourJeu) {
    super.attaque();
    if (this.NombreFlêches - 2 >= 0) {
      this.NombreFlêches -= 2;
      this.NombreFlêches++;
    } else if (tourJeu - this.tourJeu == 1) {
      this.NombreFlêches += 6;
      this.tourJeu++;
    }
  }
}

export { Boss, Guerrier, Archer, Mage };
