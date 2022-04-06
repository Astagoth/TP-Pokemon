# TP-Pokemon

## Question 1 :

Le diagramme respecte bien le principe de responsabilité unique.

## Question 2 :

Il le respecte car chaque classes/interfaces à des attributs et des méthode qui lui sont propres sans faire le boulot des autres.

## Question 3 :

Oui il le respecte

## Question 4 :

Il le respecte car on utilise de l'héritage et donc on peut utiliser la surcharge pour ajouter une logique a des méthode sans la modifier

## Question 5 :

Oui il le respecte (selon moi)

## Question 6 :

Si on prends en exemple cet exercice, et que l'on part d'une classe de pokemon (ex: Salamèche), on peut très bien modifier son attribut type (ex: plante, eau ou feu) comme ça nous chante sans qu'il y est d'erreurs. Car on utilise une interface 'Type' pour regrouper tout un ensemble d'autres types définit en tant que classes abstraites.

## Question 7 :

La dessus pas trop sûr mais je vais dire non

## Question 8 :

Comme dit plus haut, je suis pas sûr car il est dit qu'il faut **avoir plein de petites interfaces** plutôt qu'une globale mais dans notre cas on en a que 2 (Pokemon & Type), donc après je sais que tout est relatif mais pour moi c'est pas ce qu'on peut considérer comme **'plein de petites interfaces'**.
Mais bon même si on a respecter le *principe de responsabilité unique*, on peut ne pas respecter le *principe de ségrégation des interfaces* l'est aussi.

## Question 9 :

Oui c'est respecté

## Question 10 :

Dans notre cas, chaque pokemon hérite d'une classe abstraite et en haut de la généalogie de nos instances, il y a pas de classes concrètes (sauf **Dresseur** et **Pokeball** car ils ne dépendent de rien (un dresseur peut ne pas avoir de pokéballs et les pokéballs peuvent ne pas avoir de proprios, sinon ils ne se vendraient pas)

## Question 11 : (https://www.planttext.com/)

Voici mon diagramme alternatif (sur [PlantText](https://www.planttext.com/)) :

```
{
  @startuml
skinparam classAttributeIconSize 0
interface Pokemon {
#degats: num
nom!: str
pv: int
pvMax: num
type: str
captif: bool
horsJeu: bool
attaquer(horsJeu)
subirAttaque(horsJeu)
renommer()
}

interface Type {
#degats: num
calculerDegatsContreFeu(): num
calculerDegatsContreEau():num
calculerDegatsContrePlante(): num
}

abstract class TypeFeu {}

abstract class TypeEau {}

abstract class TypePlante {}

class Salameche {}

class Bulbizarre {}

class Carapuce {}

note bottom: constructor : pvMax, degats

class Pokeball {
contient!: Pokemon
proprietaire!: Dresseur
 +getContenu()
  +affecterPokemon()
  }
  class Dresseur {
  -nom: str
  +ajouterPokeballs()
   +capturer( Pokemon )
   +soignerPokemon(Pokemon)
   +getPokemons()
   }
   TypeFeu -up-|> Type
   TypeEau -up-|> Type
   TypePlante -up-|> Type
   Salameche -up-|> TypeFeu
   Carapuce -up-|> TypeEau
   Bulbizarre -up-|> TypePlante
   Salameche --|> Pokemon
   Carapuce --|> Pokemon
   Bulbizarre --|> Pokemon
   Dresseur "1" -- "0..6" Pokeball
   Pokeball "1" -- "0..1" Pokemon
   @enduml
}
```

## Question 12 :

Lien [GitHub]()
