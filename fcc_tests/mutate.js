//Devuelve true si la cadena de caracteres en el primer elemento del arreglo contiene todas las letras de la cadena en el segundo elemento del arreglo.

const arr = ["baNAna","Ana"];

function mutate(b) {
  let count = 0;
  let arr1 = b[0].toUpperCase().split("");
  let arr2 = b[1].toUpperCase().split("");
  for (let i = 0; i < arr2.length; i += 1) {
    if (arr1.includes(arr2[i])) {
      count += 1;
    }
  }
  count == arr2.length ? result = true : result = false;
  return result;
}
console.log(mutate(arr) ) ;