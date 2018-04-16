//pobieranie zmiennych z DOM

const pole_1 = document.getElementById('pole_1');
const pole_2 = document.getElementById('pole_2');
const pole_3 = document.getElementById('pole_3');
const pole_4 = document.getElementById('pole_4');

//funkcje matematyczne

function dodawanie(a, b) {
    return (a + b).toFixed(2);
}

function odejmowanie(a, b) {
    return (a - b).toFixed(2);
}

function mnozenie(a, b) {
    return (a * b).toFixed(2);
}

function dzielenie(a, b) {
    if (a == 0 || b == 0) return 0;
    else return (a / b).toFixed(2);
}

//funkcja onclick na submit 1

function wynik() {
    const w1 = Number(pole_1.value);
    const w2 = Number(pole_3.value);
    const opcja = String(pole_2.value);

    if (opcja == "+") pole_4.value = dodawanie(w1, w2);
    else if (opcja == "-") pole_4.value = odejmowanie(w1, w2);
    else if (opcja == "*") pole_4.value = mnozenie(w1, w2);
    else if (opcja == "/") pole_4.value = dzielenie(w1, w2);

}

//funkcja liczaca kwote c po odbliczeniu obnizki, ktora stanowi b% z kwoty a

function procentZLiczby(a, b) {
    return (a - ((a * b)/100)).toFixed(2);
}

//pobieranie zmiennych z DOM

const pole_5 = document.getElementById('pole_5');
const pole_6 = document.getElementById('pole_6');
const pole_7 = document.getElementById('pole_7');

//funkcja onclick na submit 2

function wynikProcentow() {
    const w3 = Number(pole_5.value);
    const w4 = Number(pole_6.value);
   pole_7.value = procentZLiczby(w3, w4);
    
}
