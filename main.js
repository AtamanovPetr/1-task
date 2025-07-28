// let person = {
//   name: "Peter",
//   age: "23",
//   isMarried: false,
// };

// console.log(person.name);
// console.log(person.age);

// alert('Hello, World!')
// let answer = confirm('Are you here?');

// console.log(answer);

// let answer = +prompt('Есть ли вам 18?', 'Да');

// console.log(typeof(answer));

// let incr = 10,
//   decr = 10;

// console.log(incr++);
// console.log(decr--);

// console.log(5%2);
// console.log('2' === 2);

// let isChecked = true,
//   isClosed = false;

// console.log(isChecked && isClosed);


let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
let spend = prompt("Введите обязательную статью расходов в этом месяце", '');
let spendamount = prompt("Во сколько обойдется?", "");


let appData = {
  moneyData: money,
  timeData: time,
  expenses: {
    firstAnswer: spend,
    secondAnswer: spendamount
  },
  optionalExpenses: {},
  years: [],
  savings: false
};

alert((appData.moneyData - appData.expenses.secondAnswer) / 30);