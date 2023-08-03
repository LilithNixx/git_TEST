//---FUNCTION 1---
const btnAdd7 = document.getElementById('btn1');
const inputAdd7 = document.getElementById('add7');
const resultAdd7 = document.querySelector('.result1');


btnAdd7.addEventListener('click', function(){
    const inputAdd7Value = parseInt(inputAdd7.value);
    resultAdd7.innerText = add7(inputAdd7Value);
});

function add7 (number) { return number + 7; }
//---END FUNCTION 1---

//---FUNCTION 2---
const btnMultiply = document.getElementById('btn2');
const inputNum1 = document.getElementById('num1');
const inputNum2 = document.getElementById('num2');
const resultMultiply = document.querySelector('.result2'); 

btnMultiply.addEventListener('click', function(){
    const input1Value = parseInt(inputNum1.value);
    const input2Value = parseInt(inputNum2.value);

    resultMultiply.innerText = multiply(input1Value, input2Value);
})

function multiply (num1, num2) { return num1 * num2; }
//---END FUNCTION 2---

//--- FIRST LETTER IN CAPITAL---

const btnUpper = document.getElementById('btn3');

btnUpper.addEventListener('click', function() {
    const inputText = document.getElementById('text').value;
    const resultUpper = document.querySelector('.result3');

    resultUpper.innerText = capitalize(inputText);
})

function capitalize (string) {
   let capitalized = string.toLowerCase();
   let first = capitalized.charAt(0).toUpperCase();
   capitalized = first + capitalized.slice(1);

    return capitalized;
}
//--- END FIRST LETTER IN CAPITAL---

//--- LAST LETTER ---
const resultLast = document.querySelector('.result4');
const btnLast = document.getElementById('btn4');


btn4.addEventListener('click', function() {
    const inputLast = document.getElementById('string').value;
    resultLast.innerText = lastLetter(inputLast);
})

function lastLetter(string) {
    const lastPos = string.length - 1;
    const lastL = string.charAt(lastPos);

    return lastL;
}
//--- END LAST LETTER---