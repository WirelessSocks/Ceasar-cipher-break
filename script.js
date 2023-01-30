"use strict"

const ruAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const numRuAlph = {};

// Массив с буквами, расположенными по частотности.
let ruArray = [1086, 1077, 1072, 1080, 1085, 1090, 1089, 1088, 1074, 1083, 1082, 1084,
1076, 1087, 1091, 1103, 1099, 1100, 1075, 1079, 1073, 1095, 1081, 1093, 1078, 1096, 1102, 1094, 1097, 1101, 1092, 1098];

for(let i = 0; i < ruAlphabet.length;i++) {
    numRuAlph[ruAlphabet[i]] = 0;
}
//console.log(numRuAlph);
document.querySelector("#btnBrk").onclick = BreakCipher;

function BreakCipher() {
    console.log("Нажата кнопка взлома шифра");

    let text = document.querySelector(".user_text").value.toLowerCase();

    //console.log(text);

    // Внесение весов букв в словарь
    for(let i = 0; i < text.length;i++) {
        numRuAlph[text[i]] += 1;
    }


    console.log(numRuAlph);
    let a = "щ";
    console.log(a.charCodeAt()); 

    for(let i = 0; i < ruAlphabet.length;i++) {
        text[i].charCodeAt()
    }

    console.log(Object.entries(numRuAlph));


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

    console.log(shift);


    // Цель функции - извлечь ключ, который передастся в другую функцию дешифровки.
}