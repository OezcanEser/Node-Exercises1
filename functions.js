// lev1_1_node.js-import_export
const sortData = (data) => data.sort()

// lev1_2_node.js-import_export

// gib nur das ERSTE Element des Arrays zurück
// const firstEle = (ele) => ele[0]
// const firstEle = (ele) => ele.shift()
// gibt das erste Element als string zurück

const firstEle = (ele) => ele.slice(0, 1)
// gibt das ausgewählte Element als Objekt zurück
// fügt das ausgewählte Element in ein neues Array.
// das alte Array behält das auswählte Element.

// const firstEle = (ele) => ele.splice(0, 1)
// gibt das ausgewählte Element als Objekt zurück
// fügt das ausgewählte Element in ein neues Array.
// das alte Array behält nicht das auswählte Element.

// gib alle AUSSER dem letzten Element des Arrays zurück
const notLast = (ele) => ele.slice(0, -1)

// gib nur das LETZTE Element des Arrays zurück
// const lastEle = (ele) => ele.pop()
// gibt es als string zurück

const lastEle = (ele) => ele.slice(-1)

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
const notFirst = (ele) => ele.slice(1)

// gib das Element zurück, das an Position n steht 
// (du brauchst einen zweiten Parameter in deiner Funktion),
// wenn n negativ oder größer als die Länge des Arrays ist
// gib das letzte Element zurück
const nPosition = (ele, n) => {
    if (n < 0 || n > ele.length) {
        return ele.slice(-1)
    } else {
        return "Alles gut"
    }
}

// schreibe eine Funktion,
// die ein bestimmtes Element komplett
// aus deinem Array entfernt
// const removeEle = (ele) => ele.filter((value) => value).slice(1, -1)
const removeEle = (array, ele) =>
    array.filter(item => item !== ele)

// gib ein Array zurück, dass nur
// aus einzigartigen Werten besteht.
// Entferne die doppelten Elemente!
const removeDouble = (ele) =>
    ele.filter((value, index) =>
        ele.indexOf(value) === index)

// gib die Summe des Arrays zurück
const sumArray = ele => ele.reduce((a, b) => a + b
)

// die Funktion bekommt zwei Parameter übergeben.
// Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
const randomNum = (min, max) => Math.round(Math.random() * (max - min) + min)

// Erstelle eine Funktion, der ein String übergeben wird.
// Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
const upFirst = (string) => string[0].toUpperCase() + string.slice(1)

// Erstelle eine Funktion, der ein String übergeben wird.
// Sie soll den gesamten String in Großbuchstaben umwandeln
const upAll = (string) => string.toUpperCase()

// Erstelle eine Funktion, mit zwei Parametern.
// Sie soll überprüfen ob der letzte Buchstabe von Parameter 1
// mit dem Parameter 2 überein stimmt
// => Input: (‘Test’, ‘t’)
// => Output: true 
// => Input: (‘Test’, ‘q’)
// => Output: false 
const checkOut = (string, word) => string.slice(-1) === word

// lev1_3_node.js-import_export
// Erstelle eine Funktion, der 3 Parameter übergeben werden sollen.
// Zwei Zahlen und ein Zeichen (+, -, /, *)
// je nachdem, was für ein Zeichen übergeben wird,
// soll die Funktion addieren, subtrahieren, dividieren oder multiplizieren
// importiere diese Funktion in deiner index.js und teste sie.

const calculate = (num1, oper, num2) => {
    if (oper == "+") {
        return num1 + num2;
    } else if (oper == "-") {
        return num1 - num2;
    } else if (oper == "/") {
        return num1 / num2;
    } else if (oper == "*") {
        return num1 * num2;
    } else {
        return "Invalid operator"
    }
}

// Erstelle dir in deiner Funktionsdatei:
// eine Funktion, die mit Hilfe von filter
// ein Array mit Objekten anhand von population filtert.
// Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben. 
// eine weitere Funktion, die die Städte zurückgibt,
// die weniger als 100000 Einwohner haben
// exportiere beide Funktionen

const higher = (arr) => arr.filter(ele => ele.population > 100000 ? ele : null)
const smaller = (arr) => arr.filter(ele => ele.population < 100000 ? ele : null)

module.exports = {
    sortData,
    firstEle,
    notLast,
    lastEle,
    notFirst,
    nPosition,
    removeEle,
    removeDouble,
    sumArray,
    randomNum,
    upFirst,
    upAll,
    checkOut,
    calculate,
    higher,
    smaller
}