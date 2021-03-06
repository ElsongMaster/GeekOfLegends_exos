class Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    this.nom = nom;
    this.pointsDeVie = pointsDeVie;
    this.pointsAttaque = pointsAttaque;
    this.chanceDetreAttaque = 0;
  }
  mortAuCombat(opposant) {
    if (opposant.pointsDeVie == 0) {
      console.log(`${opposant.nom} est mort au combat`);
    }
  }
  defense(opposant) {
    this.pointsAttaque *= 0.5;
    this.pointsDeVie *= 2.5;
    console.log(
      `${opposant.nom} perd ${
        this.pointsAttaque > opposant.pointsDeVie
          ? opposant.pointsDeVie
          : this.pointsAttaque
      } de vie`
    );
    opposant.pointsDeVie -=
      this.pointsAttaque > opposant.pointsDeVie
        ? opposant.pointsDeVie
        : this.pointsAttaque;
    this.mortAuCombat(opposant);
  }
  attaque(opposant) {
    this.pointsAttaque *= 1.4;
    this.pointsDeVie *= 0.25;
    console.log(
      `${opposant.nom} perd ${
        this.pointsAttaque > opposant.pointsDeVie
          ? opposant.pointsDeVie
          : this.pointsAttaque
      } de vie`
    );
    opposant.pointsDeVie -=
      this.pointsAttaque > opposant.pointsDeVie
        ? opposant.pointsDeVie
        : this.pointsAttaque;
    this.mortAuCombat(opposant);
  }

  normal(opposant) {
    console.log(
      `${opposant.nom} perd ${
        this.pointsAttaque > opposant.pointsDeVie
          ? opposant.pointsDeVie
          : this.pointsAttaque
      } de vie`
    );
    opposant.pointsDeVie -=
      this.pointsAttaque > opposant.pointsDeVie
        ? opposant.pointsDeVie
        : this.pointsAttaque;
    this.mortAuCombat(opposant);
  }
}

class Boss extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    let enigme1 =
      "Je suis d'eau,je suis d'air,et je suis d'√©lectricit√©. Qui suis-je ?";
    let rep1 = "le courant";
    let enigme2 = "Quel est l'indice du premier 'i' de cette question";
    let rep2 = enigme2.split("").find((elem) => elem == "i");
    let enigme3 = "Que retourne Math.floor(1.3 *10)";
    let rep3 = "13";
    this.pointsDeVieDeDepart = pointsDeVie;
    this.tabEnigmes = [enigme1, enigme2, enigme3];
    this.repEnigmes = [rep1, rep2, rep3];
  }

  poserEnigme(tabJoueurs) {
    console.log("Vous √™tes presqu'a la fin du jeu.");
    console.log(
      "Pour la derni√®re √©preuve du jeu, il vous faut r√©pondre √† cette √©nigme en maximum 3 essaies: "
    );
    let indice = Math.floor(Math.random() * this.tabEnigmes.length);
    let enigme = prompt(`${this.tabEnigmes[indice]}:`).toUpperCase();
    let rep = this.repEnigmes[indice].toUpperCase();
    let i = 3;
    while (i > 0 && enigme != rep) {
      i--;
      enigme = prompt(
        `Mauvaise r√©ponse, il vous reste encore ${i} essaies\n ${this.tabEnigmes[indice]}:`
      ).toUpperCase();
    }

    if (enigme == rep) {
      this.pointsDeVie = 0;

      console.log(
        `F√©licitation vous venez de remporter cette derni√®re √©preuve! Vous √™tes un winner`
      );
    } else {
      tabJoueurs.splice(0, tabJoueurs.length);
      console.log(
        `Game Over, vous n'avez pas su correctement r√©pondre √† l'√©nigme.`
      );
    }
  }
  attaqueProBa(opposant) {
    super.attaque(opposant);
  }
  defense(opposant) {
    super.defense(opposant);
  }
  normal(opposant) {
    super.normal(opposant);
  }
}
class Guerrier extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    super.tourJeu = 0;
    this.pointDeRage = 0;
  }

  augmenteRage() {
    if (this.pointDeRage == 4) {
      this.pointsAttaque *= 0.25;
    } else {
      this.pointDeRage++;
      if (this.pointsAttaque == 4) {
        this.pointDeRage = 0;
        this.pointsAttaque /= 4;
      }
    }
  }

  defense(opposant) {
    super.defense(opposant);
    this.augmenteRage();
  }
  attaque(opposant) {
    super.attaque(opposant);
    this.augmenteRage();
  }
  normal(opposant) {
    super.normal(opposant);
    this.augmenteRage();
  }
}

class Mage extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    let tabTmp = [7, 9, 11];
    this.pointDeMana = tabTmp[Math.floor(Math.random() * tabTmp.length)];
  }

  defense(opposant) {
    super.defense(opposant);
  }
  attaque(opposant) {
    super.attaque(opposant);
    if (this.pointDeMana >= 2) {
      this.pointDeMana -= 2;
    } else {
      this.pointDeMana += 7;
    }
  }
  normal(opposant) {
    super.normal(opposant);
  }
}

class Archer extends Personnage {
  constructor(nom, pointsDeVie, pointsAttaque) {
    super(nom, pointsDeVie, pointsAttaque);
    let tabTmp = [7, 8, 9, 10, 11];
    this.NombreFl√™ches = tabTmp[Math.floor(Math.random() * tabTmp.length)];
  }

  defense(opposant) {
    super.defense(opposant);
    this.chanceDetreAttaque++;
  }
  attaque(opposant) {
    super.attaque(opposant);
    if (this.NombreFl√™ches >= 2) {
      this.NombreFl√™ches -= 2;
      this.NombreFl√™ches++;
    } else {
      this.NombreFl√™ches += 6;
    }
  }

  normal(opposant) {
    super.normal(opposant);
  }
}

export { Boss, Guerrier, Archer, Mage };
