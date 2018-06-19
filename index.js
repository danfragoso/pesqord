let vet = {
  "_10": [],
  "_100": [],
  "_1000": []
}

let oVet = vet;

let qtd = 50;

for (let i = 0; i < qtd; i++) {
  for (let grupo in vet) {
    let n = grupo.slice(1)*1
    let arr = Array.from({length:n},o=>Math.floor(Math.random()*n))
    vet[grupo].push(arr);
  }
}

Array.prototype.bubbleSort = function () {
  let a = this;
  var swapped;
  let comp = 0;
  do {
    swapped = false;
    for (var i=0; i < a.length-1; i++) {
      comp++;
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return comp;
};

for (let i = 0; i < qtd; i++) {
  for (let grupo in vet) {
    vet[grupo][i].comp = vet[grupo][i].bubbleSort();
  }
}
