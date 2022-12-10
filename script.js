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

    console.log(text);

    // Внесение весов букв в словарь
    for(let i = 0; i < text.length;i++) {
        numRuAlph[text[i]] += 1;
    }


    console.log(numRuAlph);
    let a = "ъ";
    console.log(a.charCodeAt()); 

    for(let i = 0; i < ruAlphabet.length;i++) {
        text[i].charCodeAt()
    }

}