"use strict"

// const ruAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
// const numRuAlph = {};

// // Массив с буквами, расположенными по частотности.
// const ruArray = [1086, 1077, 1072, 1080, 1085, 1090, 1089, 1088, 1074, 1083, 1082, 1084,
// 1076, 1087, 1091, 1103, 1099, 1100, 1075, 1079, 1073, 1095, 1081, 1093, 1078, 1096, 1102, 1094, 1097, 1101, 1092, 1098];

// for(let i = 0; i < ruAlphabet.length;i++) {
//     numRuAlph[ruAlphabet[i]] = 0;
// }

// Ключ
// let shift = 0;

//console.log(numRuAlph);
document.querySelector("#btnBrk").onclick = BreakCipher;


// Создать кнопку с названием "Try again", которая запускать функцию BreakCipher со следующим индексом массива частотности
function Caesar() {
    let index =  0;
}





function BreakCipher() {

    const ruAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
    const numRuAlph = {};
    
    // Массив с буквами, расположенными по частотности.
    const ruArray = [1086, 1077, 1072, 1080, 1085, 1090, 1089, 1088, 1074, 1083, 1082, 1084,
    1076, 1087, 1091, 1103, 1099, 1100, 1075, 1079, 1073, 1095, 1081, 1093, 1078, 1096, 1102, 1094, 1097, 1101, 1092, 1098];
    
    for(let i = 0; i < ruAlphabet.length;i++) {
        numRuAlph[ruAlphabet[i]] = 0;
    }




    console.log("Нажата кнопка взлома шифра");

    let text = document.querySelector(".user_text").value.toLowerCase();

    //console.log(text);

    // Внесение весов букв в словарь
    for(let i = 0; i < text.length;i++) {
        numRuAlph[text[i]] += 1;
    }


    console.log(numRuAlph);
    // let a = "щ";
    // console.log(a.charCodeAt()); 

    // for(let i = 0; i < ruAlphabet.length;i++) {
    //     text[i].charCodeAt()
    // }

    // console.log(Object.entries(numRuAlph));


    let max_vol = 0;
    let key_vol = "";


    // Получаем максимальное значение и его букву
    for(let i = 0; i < ruAlphabet.length;i++) {

        if(max_vol < numRuAlph[ruAlphabet[i]]) {
            max_vol = numRuAlph[ruAlphabet[i]];
            key_vol = ruAlphabet[i];
        }
    }

    // В значении использованной буквы устанавливаем отрицательное значение, чтобы больше с ней не работать.

    console.log(max_vol);
    console.log(key_vol);
    // Юникод номер полученной буквы

    let unicodeVol = key_vol.charCodeAt();
    console.log(unicodeVol);


    // Получение ключа
    let shift = 0;
    if(unicodeVol < ruArray[0]) {
        shift = unicodeVol - ruArray[0];
    }
    else {
        shift = unicodeVol - ruArray[0];
    }

    console.log(`Предпологаемый ключ - ${shift}`);


    // Передача ключа и текста для последующей дешифровки
    myClickDecrypt(shift, text);
}


function myClickDecrypt(key, text) {

    console.log('нажата кнопка дешифровки');
    
    // Получаем значение ключа
    // let a = document.querySelector('.i-1').value;
    // let key = Number(a);

    if(isNaN(key)) {
        output = "Ошибка ввода данных";
        document.querySelector('.out').innerHTML = output;
        return;
    }

    console.log(`Ключ от плюзователя - ${key}`);

    // Переменная userStr - строка, введенная пользователем.
    //let userStr = document.querySelector('.user_text').value.toLowerCase();
   
    let lang = 0;
    // Русский - 1
    // Английский - 2

    if(document.querySelector('.lang_rus').checked) {

        lang = document.querySelector('.lang_rus').value;
            
        console.log( `lang = ${Number(lang)}`);
    }
    else if(document.querySelector('.lang_eng').checked) {

        lang = document.querySelector('.lang_eng').value;
            
        console.log( `lang = ${Number(lang)}`);
    }

    let output = "";

    let shift = 0;

    
    // Если выбран русский язык, начинается работа с кириллицей

    if(lang == 1) {

        if (key >= 33 ) {
            shift = -1 * (key % 33);
        }
        else if(key <= -33) {
            shift = -1 * (key % 33);
        }
        else {
            shift = -1 * key;
        }

        console.log('Обработанный Ключ - ', shift);

        let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

        let otherSymbols = "\ \"\'\\/0123456789!?@#$%^&*`~.,-=+_";

        let firstPartOfStr = alphabet.slice(0, shift);
        console.log(firstPartOfStr);

        let secondPartOfStr = alphabet.slice(shift);
        console.log(secondPartOfStr);
        let shiftedAlphabet = secondPartOfStr + firstPartOfStr;
        console.log(shiftedAlphabet);

        // Смещенный алфавит со всеми допустимыми символами
        shiftedAlphabet += otherSymbols;

        // Алфавит со всеми допустимыми символами
        alphabet += otherSymbols;

        // Проверка на соответствие  выбранному языку введеной пользователем строки


        // Счетчик, который будет сравнивать символы на соответствие языку
        let counter = 0;

        // Условие: Если язык == Русский, то проводится проверка
        for (let i = 0; i < text.length; i++) {
            for(let j = 0; j < alphabet.length; j++) {
                if(text[i] == alphabet[j]) {
                    counter += 1;
                }
            }
        }

        console.log(`Кол-во символов в строке - ${text.length}, счетчик: ${counter}`);

        // Преобразование зашифрованной строки с кирилицей
        
        if (counter == text.length) {
            for(let i = 0; i < text.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(text[i] == alphabet[j]) {
                        output += shiftedAlphabet[j];
                    }
                }
            }
        } else {
            output = "Ошибка ввода даных";
            document.querySelector('.out').innerHTML = output;
        }

    }
    
    if(lang == 2) {
        
        if (key >= 26 ) {
            shift = -1 * (key % 26);
        }
        else if(key <= -26) {
            shift = -1 * (key % 26);
        }
        else {
            shift = -1 * key;
        }

        console.log(`Обработанный Ключ - ${shift}`);

        let alphabet = "abcdefghijklmnopqrstuvwxyz";

        let otherSymbols = "\ \"\'\\/0123456789!?@#$%^&*`~.,-=+_";

        let firstPartOfStr = alphabet.slice(0, shift);
        console.log(firstPartOfStr);

        let secondPartOfStr = alphabet.slice(shift);
        console.log(secondPartOfStr);
        let shiftedAlphabet = secondPartOfStr + firstPartOfStr;
        console.log(shiftedAlphabet);

        // Смещенный алфавит со всеми допустимыми символами
        shiftedAlphabet += otherSymbols;

        // Алфавит со всеми допустимыми символами
        alphabet += otherSymbols;


        // Проверка на соответствие  выбранному языку введеной пользователем строки

        // Счетчик, который будет сравнивать символы на соответствие языку
        let counter = 0;

        for (let i = 0; i < text.length; i++) {
            for(let j = 0; j < alphabet.length; j++) {
                if(text[i] == alphabet[j]) {
                    counter += 1;
                }
            }
        }


        console.log(`Кол-во символов в строке - ${text.length}, счетчик: ${counter}`);



        // Преобразование зашифрованной строки с латинницей
        
        if (counter == text.length) {
            for(let i = 0; i < text.length; i++) {
                for(let j = 0; j < alphabet.length; j++) {
                    if(text[i] == alphabet[j]) {
                        output += shiftedAlphabet[j];
                    }
                }
            }
        } else {

            output = "Error in text"
        }
    }

    console.log(output);

    document.querySelector('.out').innerHTML = output;
}