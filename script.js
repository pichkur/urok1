'use strict';

let money,
    time;

money = prompt('Ваш бюджет на месяц', '');
time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeDate: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

let qExpences1 = prompt('Введите обязательную статью расходов в этом месяце:', '');
let qExpences2 = prompt('Введите обязательную статью расходов в этом месяце:', '');

appData.expences.qExpences1 = qExpences1;
appData.expences.qExpences2 = qExpences2;

let oneDayBudget = appData.budget / 30;
alert('Бюджет на день равен: ' + oneDayBudget);