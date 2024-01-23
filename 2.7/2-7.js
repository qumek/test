const randomGenerate = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkIsNumber = function (value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

const gameBotFunction = function () {
    let mysteryNumber = randomGenerate(1, 100);
    let tries = 3;

    const getResult = function () {
        if (tries > 0) {
            let answerNum;

            while (true) {
                answerNum = prompt(`Угадай число от 1 до 100. У тебя ${tries} попыток:`);

                if (answerNum === null) {
                    alert('Ты завершил игру');
                    return;
                }

                answerNum = answerNum.trim();

                if (checkIsNumber(answerNum)) {
                    break;
                } else {
                    alert('Введи корректное числовое значение.');
                }
            }

            answerNum = parseInt(answerNum);

            if (mysteryNumber > answerNum) {
                alert(`Загаданное число больше`);
            } else if (mysteryNumber < answerNum) {
                alert(`Загаданное число меньше`);
            } else {
                let playAgain = confirm('Ого, ты угадал! Хочешь еще разок?');
                if (playAgain) {
                    tries = 3;
                    mysteryNumber = randomGenerate(1, 100);
                    getResult();
                } else {
                    alert('Ты завершил игру');
                    return;
                }
            }

            tries--;
            getResult();
        } else {
            let playAgain = confirm('У тебя закончились попытки. Хочешь еще разок?');
            if (playAgain) {
                tries = 3;
                mysteryNumber = randomGenerate(1, 100);
                getResult();
            } else {
                alert('Ты завершил игру');
                return;
            }
        }
    };

    getResult();
};

gameBotFunction();
