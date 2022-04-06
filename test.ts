/**
 * Importations nécessaires
 */
import Carapuce from "./classes/carapuce";
import Salameche from "./Classes/Salameche";
import Bulbizarre from "./Classes/Bulbizarre";
import Dresseur from "./classes/Dresseur";
import Pokeball from "./classes/Pokeball";

// On créer un objet de type Bulbizarre
let bulb1 = new Bulbizarre(58, 24);

// On créer un objet de type Salameche
let lizard1 = new Salameche(31, 78);

// On créer un objet de type Carapuce
let turtle = new Carapuce(55, 34);


/**
 * On test les fonctions de l'objet bulb1
 * et on affiche le resultat avec des console log
 */
console.log("\n\t\tAu tour de Bulbizarre !\n");
bulb1.attaquer();
bulb1.subirAttaque();
bulb1.soigner();
bulb1.renommer();
bulb1.attaquer();


/**
 * On test les fonctions de l'objet lizard1
 * et on affiche le resultat avec des console log
 */
console.log("\n\t\tAu tour de Salamèche !\n");
lizard1.attaquer();
lizard1.subirAttaque();
lizard1.soigner();
lizard1.renommer();
lizard1.attaquer();


/**
 * On test les fonctions de l'objet turtle
 * et on affiche le resultat avec des console log
 */
console.log("\n\t\tAu tour de Carapuce !\n");
turtle.attaquer();
turtle.subirAttaque();
turtle.soigner();
turtle.renommer();
turtle.attaquer();

// on instancie un objet de type Dresseur
let red = new Dresseur("red");

// On instancie un objet de type Pokeball
let simplePokeball = new Pokeball(red, lizard1);
