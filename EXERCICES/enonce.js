/*====================================================================
                            EXERCICE N°1
====================================================================*/
const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubles = [];
const triples = [];

// Utiliser la boucle forEach pour parcourir le tableau nombres et mettre le double de chaque nombre dans le tableau "doubles"
nombres.forEach((nombre) => doubles.push(nombre * 2));
console.log(doubles);

// Utiliser une boucle for pour parcourir le tableau nombres et mettre le triple de chaque nombre dans le tableau "triples"
// Proposer une version SANS la méthode "push" et une autre version AVEC la méthode "push"

// Methode 1
for (let i = 0; i < nombres.length; i++) {
  triples[i] = nombres[i] * 3;
}

console.log(triples);

// Methode 2
for (let i = 0; i < nombres.length; i++) {
  triples.push(nombres[i] * 3);
}
console.log(triples);

// Methode EXTRA for...of

for (nombre of nombres) {
  triples.push(nombre * 3);
}
console.log(triples);
/*====================================================================
                            EXERCICE N°2
====================================================================*/
// Tableau de pays
let pays = [
  "France",
  "Etats-Unis",
  "Chine",
  "Inde",
  "Brésil",
  "Canada",
  "Japon",
  "Australie",
  "Mexique",
  "Russie",
  "Allemagne",
  "Italie",
  "Espagne",
  "Portugal",
  "Angleterre",
];

// écrire une fonction qui affiche dans la console les pays qui ont au maximum 7 lettres
// rappel : une chaîne de caractères se comporte comme un tableau
// METHODE 1
pays.forEach((ele) => {
  ele.length <= 7 ? console.log(ele) : null;
});

// METHODE 2
for (mot of pays) {
  if (mot.length < 8) console.log(mot);
}

/*====================================================================
                            EXERCICE N°3
====================================================================*/
// Créer une fonction fléchée ou anonyme qui prend en paramètre une chaine de caractères et qui retourne le nomvbre d'occurrence de la lettre "e" dans cette chaine. La tester sur le mot "électroencéphalographie" puis sur le mot "abstraction".

const compterE = (mot) => {
  let compter = 0;
  for (lettre of mot) {
    if (lettre === "e") compter++;
  }
  console.log(compter);
};

compterE("électroencéphalographie"); // 3
compterE("abstraction"); // 0

// /*====================================================================
//                         EXERCICE FACULTATTIF
// ====================================================================*/
// // Définition des recettes et des ingrédients nécessaires
// const RECETTES = {
//   "Pâtes à la carbonara": ["pâtes", "lardons", "œufs", "parmesan"],
//   "Salade César": ["laitue", "poulet", "croutons", "parmesan", "sauce César"],
//   "Omelette aux légumes": ["œufs", "légumes", "fromage"],
// };

// // Fonction pour déterminer la recette en fonction des ingrédients disponibles
// function determinerRecette(ingredientsDisponibles) {
//   for (ingredient in RECETTES) {
//     if (RECETTES[ingredient].toString() === ingredientsDisponibles.toString()) {
//       return ingredient;
//     }
//   }
// }

// // Exemple d'utilisation
// const ingredients = ["pâtes", "lardons", "œufs", "parmesan"];
// const recette = determinerRecette(ingredients);
// console.log("Recette recommandée :", recette); // Recette recommandée : Pâtes à la carbonara

// Définition des recettes et des ingrédients nécessaires
const RECETTES = {
  "Pâtes à la carbonara": ["pâtes", "lardons", "œufs", "parmesan"],
  "Salade César": ["laitue", "poulet", "croutons", "parmesan", "sauce César"],
  "Omelette aux légumes": ["œufs", "légumes", "fromage"],
};

// Fonction pour déterminer la recette en fonction des ingrédients disponibles
function determinerRecette(ingredientsDisponibles) {
  for (ingredient in RECETTES) {
    let missingIngredients = RECETTES[ingredient].filter(
      (ing) => !ingredientsDisponibles.includes(ing)
    );
    console.log(
      `Ingrediants manquants pour ${ingredient}:  ${missingIngredients.toString()}`
    );
  }
}

// Exemple d'utilisation
const ingredients = ["pâtes", "lardons", "œufs"];
determinerRecette(ingredients);
// console.log("Recette recommandée :", recette); // Recette recommandée : Pâtes à la carbonara
