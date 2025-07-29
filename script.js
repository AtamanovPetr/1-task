// function showFirstMessage(text) {
//   alert(text);
//   let num = 20;
// }

// showFirstMessage("Hello, World!");
// console.log(num);

// let calc = function(a, b) {
//   return (a + b);
// }

let calc = (a, b) => a+b;
console.log(calc(2, 4));


function retVar() {
  let num = 50;
  return num;
}


let anotherNum = retVar();
console.log(anotherNum);


let str = 'Nekit';
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = '12.2';
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));

