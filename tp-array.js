function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau et filtrer les valeurs >= 15
  Q1() {
    return getArray().filter(num => num >= 15);
  },

  //2) Trouver l'index de la première valeur strictement inférieure à 7
  Q2() {
    return getArray().findIndex(num => num < 7);
  },

  //3) Inverser le tableau
  Q3() {
    return getArray().slice().reverse();
  },

  //4) Trier le tableau en ordre croissant
  Q4() {
    return getArray().slice().sort((a, b) => a - b);
  },

  //5) Ajouter 0 en premier index
  Q5() {
    let arr = getArray().slice();
    arr.unshift(0);
    return arr;
  },

  //6) Faire la somme avec une boucle for
  Q6() {
    let sum = 0;
    for (let num of getArray()) {
      sum += num;
    }
    return sum;
  },

  //7) Faire la somme avec reduce
  Q7() {
    return getArray().reduce((acc, num) => acc + num, 0);
  },

  //8) Remplacer la troisième valeur par "ici"
  Q8() {
    let arr = getArray().slice();
    arr[2] = "ici";
    return arr;
  },

  //9) Retirer le dernier élément
  Q9() {
    let arr = getArray().slice();
    arr.pop();
    return arr;
  },

  //10) Renvoyer le type de getArray()
  Q10() {
    return typeof getArray();
  },

  //11) Vérifier si getArray() est un tableau
  Q11() {
    return Array.isArray(getArray());
  },

  //12) Transformer le tableau en chaîne de caractères séparés par un tiret
  Q12() {
    return getArray().join("-");
  },

  //13) Garder uniquement les 2 derniers éléments
  Q13() {
    return getArray().slice(-2);
  }
};
