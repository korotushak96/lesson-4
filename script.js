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
    income: [],
    savings: false,
    chooseExpenses: function(){
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
    },
    detectDayBudget: function(){
        appData.moneyPerDay = appData.budget/30;
        alert('Ваш доход на день' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if (appData.moneyPerDay<5){
            console.log('low');
        } else if (appData.moneyPerDay<10){
            console.log('normal');
        } else if (appData.moneyPerDay>=10){
            console.log('good')
        } else {
            console.log('error')
        }
    },
    checkSavings: function (){
        if (appData.savings){
            let save = +prompt('Какая сума накоплений');
            let percent = +prompt('Под какой процент');
            appData.monthIncome= save/100/12*percent;
            alert ('Доход в месяц от депозита: ' + percent)
        }
    },
    chooseOptExpenses:function (){
        for (let i=1; i<=3;i++){
            let answer = prompt('сколько на доп расходы?')
            if(typeof(answer)!=null && answer !=''){
                appData.optionalExpenses[i]=answer;
            }
        }
    },
    chooseIncome: function(){
        let items = prompt('Что еще принесет доход, перечислите через запятую');
        while (!items){
            items = prompt('Что еще принесет доход, перечислите через запятую');
        }
        appData.income = items.split(', ');
    },
    incomes: function(){
        this.income.forEach((item, value)=> alert('способ зароботка №' + (value+1) + ' это ' + item))
    },
    ourData: function(){
        let allData = [];
        for(let key in appData){
            allData.push(key);
        }
        alert('we have data like' + allData);
    }
};










