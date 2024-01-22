const checkIsNumber = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

const getAllServicePrices = function () {
    let sum = 0;

    for (let i = 1; i <= 2; i++) {
        let textFromPrompt;

        while (true) {
            textFromPrompt = prompt(`Введите стоимость услуги ${i}:`);

            if (textFromPrompt === null) {
                // нажал отмена
                return null;
            }

            textFromPrompt = textFromPrompt.trim();

            if (checkIsNumber(textFromPrompt)) {
                break;
            } else {
                alert('Пожалуйста  введите корректное числовое значение.');
            }
        }

        sum += parseFloat(textFromPrompt);
    }

    return sum;
};

// консоль
const totalServicePrice = getAllServicePrices();

if (totalServicePrice !== null) {
    console.log(`Итоговая стоимость услуг: ${totalServicePrice}`);
} else {
    console.log('Пользователь отменил ввод или ввел некорректное значение');
}