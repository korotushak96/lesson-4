'use strict';

let money, time 

function start(){
    money = +prompt('Ваш бюджет на месяц?');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while (isNaN(money) || money=='' || money == null){
        money = +prompt('Ваш бюджет на месяц?');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
};



function chooseExpenses(){
    for (let i=0; i<2; i++){
        let expense = prompt('Введите обязательную статью расходов в этом месяце'),
        expenseCost = prompt('Во сколько обойдется?');
        if (expense && expenseCost && expense.length<=50){
            appData.expenses[expense] = expenseCost;
        } else {
            alert('wrong answer');
            i=i-1;
        }
    }
}


chooseExpenses();
// while (let i<2){
//     if (expense && expenseCost && expense.length<=50){
//         appData.expenses = expenseCost;
//     } else {
//         alert('wrong answer');
//         i=i-1;
//     }
//     i++;
// }

// do{
//     let i = 0;
//     if (expense && expenseCost && expense.length<=50){
//         appData.expenses = expenseCost;
//     } else {
//         alert('wrong answer');
//         i=i-1;
//     }
// } while(i<1)

function checkSavings(){
    if (appData.savings){
        let save = +prompt('Какая сума накоплений');
        let percent = +prompt('Под какой процент');
        appData.monthIncome= save/100/12*percent;
        alert ('Доход в месяц от депозита: ' + percent)
    }
}
checkSavings();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed(2);
    alert (appData.moneyPerDay);
}

detectDayBudget();


function detectLevel(){
    if (appData.moneyPerDay<5){
        console.log('low');
    } else if (appData.moneyPerDay<10){
        console.log('normal');
    } else if (appData.moneyPerDay>=10){
        console.log('good')
    } else {
        console.log('error')
    }
}

function chooseOptExpenses(){
    for (let i=1; i<=3;i++){
        let answer = prompt('сколько на доп расходы?')
        if(typeof(answer)!=null && answer !=''){
            appData.optionalExpenses[i]=answer;
        }
    }
}