function aasdasdsa() {
  console.log(document.getElementsByClassName('textview').value);
} 

let textview = '';
let result = null;
const exp = ['/', '+', '-', '*'];
function solve(a) {
  document.getElementsByClassName('textview').value = '555'
}

function insert () {
  if (exp.includes(a)) {
      // nao add a mesma expressão duas vezes
    if (textview.endsWith(a)) return
    textview += a + ' ';
  } else {
    textview += a;
  }
}