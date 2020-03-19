'use strict';

  let money = +prompt ("Ваш бюджет на месяц?", ''),
   time = prompt ("Введите дату в формате YYYY-MM-DD", '');


  let appData = {
    budget: money,
      timedata: time,  
        optionalExpenses: {},
          expenses: {},
            income: [],
              savings: false
  };
// Первый цикл
/*
for (let i = 0; i < 2; i++) {
  let a = prompt ("Введите обязательную статья расходов в этом месяце"),
      b = prompt ("Во сколько обойдется?");
  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null
  && a != '' && b != '' && a.length <50) {
    console.log ("done");
appData.expenses[a] = b;
        } else {

        }
}

//второй цикл
let i = 0;
while ( i < 2){
  let a = prompt ("Введите обязательную статья расходов в этом месяце"),
  b = prompt ("Во сколько обойдется?");
  if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null
  && a != '' && b != '' && a.length <50) {
    console.log ("done");
    i++;
  }
}
*/
//третий цикл
let i = 0;
do {
  let a = prompt ("Введите обязательную статья расходов в этом месяце"),
b = prompt ("Во сколько обойдется?");
if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) !=null
&& a != '' && b != '' && a.length <50) {
  console.log ("done");
  i++;
}
while (i < 2);
}




appData.moneyperday = appData.budget /30;
alert("Ежедневный бюджет: " + appData.moneyperday);



if (appData.moneyperday < 100 ){
  console.log("Минимальный уровень достатка");
}else if (appData.moneyperday >100 && appData.moneyperday < 2000) {
console.log("Средний уровень достатка");
} else if (appData.moneyperday > 2000 ) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка")
}


//второй цикл
//третий цикл

switch (appData.moneyperday) {
  case appData.moneyperday <100:
    console.log("Минимальный уровень достатка");
    break;
  case appData.moneyperday > 100 && appData.moneyperday <2000:
    console.log("Средний уровень достатка");
    break;
    case appData.moneyperday >2000:
    console.log("Высокий уровень достатка");
    break;
    default:
      console.log("Ошибка");
      break;
}


