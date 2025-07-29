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

// let num = 50;

// if (num < 49) {
//   console.log("Неверно");
// } else if (num > 100) {
//   console.log("Много!");
// } else {
//   console.log("Верно!");
// }

// num == 50 ? console.log("Верно") : console.log("Неверно");

// switch (num) {
//   case num < 49:
//     console.log("Неверно!");
//     break;
//   case num > 100:
//     console.log("много!");
//     break;
//   case num > 80:
//     console.log("Много!");
//     break;
//   case 50:
//     console.log("Верно!");
//     break;
//   default:
//     console.log("Что-то пошло не так");
//     break;
// }

// let num = 50;
// while (num < 55) {
//   console.log(num);
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while (num<55)

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//     continue;
//   }
//   console.log(i);

// }
let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", "");
    let b = prompt("Во сколько обойдется?", "");

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
    }
  }
}

chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}

detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
      percent = +prompt("Под какой процент?");
    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита: " + (appData.monthIncome).toFixed());
  }
}

checkSavings();

function chooseOptExpenses() {
  let a1 = prompt("Статья необязательных расходов?"),
    a2 = prompt("Статья необязательных расходов?"),
    a3 = prompt("Статья необязательных расходов?");
  appData.optionalExpenses.first = a1;
  appData.optionalExpenses.second = a2;
  appData.optionalExpenses.third = a3;
}

chooseOptExpenses();
