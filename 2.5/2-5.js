let servicePrice1 = +prompt("Введите стоимость первой услуги:") || 20000;
let servicePrice2 = +prompt("Введите стоимость второй услуги:") || 30000;
let screenPrice = +prompt("Введите стоимость верстки:") || 50000;
let titleProject = prompt("Введите название проекта:") || "web development";


// step 1
// Создай / Объяви функцию getAllServicePrices с помощью метода "function expression".
// Функция должна возвращать стоимость всех дополнительных услуг.
// Результат функции запиши в переменную allServicePrices
const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}
const allServicePrices = getAllServicePrices()


// step 2
// Создай функцию getFullPrice с помощью метода "function declaration".
// Функция должна возвращать стоимость всех дополнительных услуг(allServicePrices) и стоимость вёрстки(screenPrice )
// Результат функции запиши в переменную fullPrice.
function getFullPrice() {
    return allServicePrices + screenPrice
}
const fullPrice = getFullPrice()


// step 3
// Создай функцию getTitle.
// Функция изменяет название проекта(titleProject), переводит первый символ в верхний регистр(делает заглавной), а остальные в нижний регистр(делает маленькими) и возвращает отредактированное название проекта (titleProject). 
function getTitle() {
    return titleProject.charAt(0).toUpperCase() + titleProject.slice(1).toLowerCase();
}
titleProject = getTitle()
console.log('Название проекта: ' + titleProject)


// step 4
// Создай функцию getServicePercentPrices.
// Функция возвращает итоговую стоимость за вычетом процента подрядчику.
// Результат функции запиши в переменную servicePercentPrice
function functionPercentPrice() {
    if (fullPrice > 50000) {
        percentPrice = 10;
    } else if (fullPrice > 20000 && fullPrice < 40000) {
        percentPrice = 5;
    } else if (fullPrice > 0 && fullPrice < 20000) {
        percentPrice = 0;
    } else {
        console.log("Что-то пошло не так");
    }
    return percentPrice
}

percentPrice = functionPercentPrice()

function getServicePercentPrices() {
    return fullPrice - (fullPrice / 100 * percentPrice)
}
const servicePercentPrice = getServicePercentPrices()


//step 5
// Создай функцию getRollbackMessage.
// Функция считает и выводит в консоль значение скидки для клиента в зависимости от стоимости проекта.
// Программа должна:
// - считать стоимость всего проекта
// - считать стоимость всех услуг
// - считать стоимость проекта с учётом скидки подрядчику
// - считать скидку клиента, в зависимости от стоимости проекта и выводить сообщение в консоль
// Дополнительно:
// - менять регистр символов в названии проекта (Первый символ заглавный, остальные строчные)
function formatMessage(message) {
    return message.charAt(0).toUpperCase() + message.slice(1).toLowerCase();
}

function getRollbackMessage() {
    console.log(formatMessage('стоимость всего проекта: ' + fullPrice));
    console.log(formatMessage('стоимость всех дополнительных услуг: ' + allServicePrices));
    console.log(formatMessage('скидка клиента: ' + percentPrice + '%'));
    console.log(formatMessage('стоимость проекта с учётом скидки: ' + servicePercentPrice));
}

getRollbackMessage();