'use strict';

  let money = prompt ("Ваш бюджет на месяц?", ''),
   time = prompt ("Введите дату в формате YYYY-MM-DD", '');


  let appData = {
    budget: money,
      timedata: time,  
        optionalExpenses: {},
          expenses: {},
            income: [],
              savings: false
  };
let q1 = prompt ("введите обязательную статья расходов в этом месяце"),
     q2 = prompt ("во сколько обойдется"),
     q3 = prompt ("введите обязательную статья расходов в этом месяце"),
     q4 = prompt ("во сколько обойдется");
appData.expenses[q1]=q2;
appData.expenses[q3]=q4; 

alert(appData.budget/30);
