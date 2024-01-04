// step 1 & 2
let titleProject = prompt("Название проекта?");
console.log(titleProject);

let screensValue = prompt("Типы экранов (разделите через запятую)?");
console.log(screensValue);

// step 3
let responsive = prompt("Нужен ли респонсивный сайт?");
console.log(responsive);

// step 4
let service1 = prompt("Какой сервис нужен?");
console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой еще сервис тебе нужен?");
console.log(service2);
let servicePrice2 = prompt("Сколько будет стоить этот второй сервис?");
console.log(servicePrice2);

// step 5
let screenPrice = 3200;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// step 6
let contractorPercentage = 0.1; // 10% отката подрядчику
let servicePercentPrice = fullPrice * (1 - contractorPercentage);

// step 7
if (fullPrice > 50000) {
    console.log("Сделаем скидку в 10%");
} else if (fullPrice > 20000 && fullPrice < 40000) {
    console.log("Сделаем скидку 5%");
} else if (fullPrice > 0 && fullPrice < 20000) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что-то пошло не так");
}

// итог
console.log("Общая стоимость проекта:", fullPrice);
console.log(Math.ceil(servicePercentPrice), 'Итоговая сумма проекта за вычетов процента подрядчику');