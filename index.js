// console.log("Hello World")
// lev1_1_node.js-import_export

// Aufgabenstellung

// Erstelle dir drei Dateien. In der einen sollen die Funktionen liegen,
// in einer die Daten und in der dritten wollen wir alles zusammen führen.
// Arbeite Schritt für Schritt und teste viel!
// Am Ende soll das ein Array mit Text sortiert werden. Schaue hier nach ;-) 
// Der Inhalt für deine data.js liegt im Kommentarbereich.
// Importiere deine Funktion und die data in deine Hauptdatei.
const datas = require("./datas")
const funcs = require("./functions")

funcs.sortData(datas.arrayNumbers)
funcs.sortData(datas.arrayCars)
console.log(datas)

// lev1_2_node.js-import_export

// Aufgabenstellung
// Erstelle dir eine Datei, in der deine Funktionen gespeichert werden sollen.
// Diese sollen am Ende exportiert werden.
// Erstelle dir eine Datei, in der deine Data gespeichert werden soll.
// Importiere diese Funktionen / Data in deiner main.js
// alle Funktionen bekommen ein Array übergeben.
// Jeder der folgenden Punkte ist eine EIGENE Funktion!

// gib nur das ERSTE Element des Arrays zurück
console.log(funcs.firstEle(['audi', 'bmw', 'ferrari', 'fiat', 'opel']))

// gib alle AUSSER dem letzten Element des Arrays zurück
console.log(funcs.notLast(['audi', 'bmw', 'ferrari', 'fiat', 'opel']))

// gib nur das LETZTE Element des Arrays zurück
console.log(funcs.lastEle(['audi', 'bmw', 'ferrari', 'fiat', 'opel']))

// gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
console.log(funcs.notFirst(['audi', 'bmw', 'ferrari', 'fiat', 'opel']))

// gib das Element zurück, das an Position n steht 
// (du brauchst einen zweiten Parameter in deiner Funktion),
// wenn n negativ oder größer als die Länge des Arrays ist
// gib das letzte Element zurück
console.log(funcs.nPosition(['audi', 'bmw', 'ferrari', 'fiat', 'opel'], 6))

// schreibe eine Funktion,
// die ein bestimmtes Element komplett
// aus deinem Array entfernt
// => Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)
// => Output: [“stay”, “stay5”, 22, true]
console.log(funcs.removeEle(["remove", "stay", "stay5", 22, true, "remove"], "remove"))

// gib ein Array zurück, dass nur aus einzigartigen Werten besteht.
// Entferne die doppelten Elemente!
// => Input: [1,6,9,2,1,6,7,10]
// => Output: [1,6,9,2,7,10]
console.log(funcs.removeDouble([1, 6, 9, 2, 1, 6, 7, 10]))

// gib die Summe des Arrays zurück
console.log(funcs.sumArray([1, 6, 9, 2, 1, 6, 7, 10]))

// Funktionen

// hier Funktionen ohne Array, trotzdem mit Parametern
// Jeder der folgenden Punkte ist eine EIGENE Funktion!
// die Funktion bekommt zwei Parameter übergeben.
// Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
console.log(funcs.randomNum(0, 10))

// Erstelle eine Funktion, der ein String übergeben wird.
// Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt
console.log(funcs.upFirst("hello world"))

// Erstelle eine Funktion, der ein String übergeben wird.
// Sie soll den gesamten String in Großbuchstaben umwandeln
console.log(funcs.upAll("foo bar baz asdf amk"))

// Erstelle eine Funktion, mit zwei Parametern.
// Sie soll überprüfen ob der letzte Buchstabe von Parameter 1
// mit dem Parameter 2 überein stimmt
// => Input: (‘Test’, ‘t’)
// => Output: true 
// => Input: (‘Test’, ‘q’)
// => Output: false 
console.log(funcs.checkOut("Test", "t"))
console.log(funcs.checkOut("Test", "q"))

// lev1_3_node.js-import_export
// Aufgabenstellung

// Erstelle eine Funktion, der 3 Parameter übergeben werden sollen.
// Zwei Zahlen und ein Zeichen (+, -, /, *)
// je nachdem, was für ein Zeichen übergeben wird,
// soll die Funktion addieren, subtrahieren, dividieren oder multiplizieren
// importiere diese Funktion in deiner index.js und teste sie.
console.log(funcs.calculate(3, "+", 2))

// Bonus: Überprüfe, ob die Eingabe richtig war,
// falls nicht gib einen Fehler zurück