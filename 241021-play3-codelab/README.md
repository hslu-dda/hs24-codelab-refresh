# Play 3 Code Lab, 21.10.2024

Die vier wichtigsten Punkte des Nachmittags zusammengefasst.

## 1. Daten laden

Nutze `d3.csv` oder `d3.json` um Csv oder Json Files in deinen Sketch zu laden. Sobald die Daten geladen sind ("then") können sie in einer globalen Variable gespeichert werden.

```js
let data;

function setup() {
    createCanvas(400, 400);

    d3.csv("./data/manga_characters.csv").then((csv) => {
        data = csv;
        console.log(data);
    });
}
```

## 2. Arrays / Über Daten loopen

Um über einen Array zu iterieren ("loopen") kannst du eine klassische For-Schlaufe oder einen forEach-Loop nutzen.

Beim der klassischen For-Schalufe kannst du über den Index `i` auf das aktuelle Objekt im Array zugreifen uns es in einer Variable speichern.

```js
for (let i = 0; i < data.length; i++) {
    let item = data[i];
    console.log(item);
    // do something with the item
}
```

Beim forEach-Loop entfällt der Umweg über die Variable da der Loop diese bereits vorsieht. Der untere Code produziert das gleiche Resultat wir der obere. forEach ist eine Array-Method und funktioniert nur bei einem Array.

```js
data.forEach((item) => {
    console.log(item);
});
```

## 3. Auf Daten in einem Array zugreifen

Damit du auf die Werte in einem Objekt zugreifen kannst musst du ihren "key" kennen. Je nach Loop ist die Schreibweise etwas unterschiedlich um auf einen Wert zuzugreifen.

```js
for (let i = 0; i < data.length; i++) {
    let item = data[i]; // das objekt
    let label = item["Label"]; // der Key "Label" gibt dir den Value, bspw. "Naruto Uzumaki"
    console.log(label);
}
```

Es wäre auch möglich direkt auf das Label zuzugreifen mit `data[i]["Label"]`. Eine zusätzliche Variable macht aber den Code ev. übersichtlicher.

Das Selbe kann bei einem forEach-Loop gemacht werden.

```js
data.forEach((item) => {
    let label = item["Label"];
    console.log(item);
});
```

Manchmal sieht man auch folgende Schreibweise `item.Label`. Sie führt zum selben Resulat wie `item["Label"]` jedoch kann der Key keine Sonderzeichen wie bspw. Leerzeichen enthalten (e.g. `item["Book Label"]`).

## 4. Scales nutzen um die Daten darzustellen

D3 kann genutzt werden um einen Wert aus einem Datensatz (e.g. das "Power Level" eines Manga Characters) auf eine Position oder Farbe umzurechnen. Es gibt verschiedene [Scales](https://d3js.org/d3-scale) für verschiedene Zwecke.

Eine Scale kann global definiert werden. Bei einer linearen Scale brauchst du die Domain (minimaler und maximaler Wert der Daten) und die Range (min/max Wert der Umrechung, bspw. `0` und die `width` deines Sketches).

```js
// minimaler und maximaler wert aus den daten
let minPower = 60;
let maxPower = 180;

// d3 function um das power_level (domain) in eine X position umzurechnen zwischen 0 und 400 (range)
let xScale = d3.scaleLinear().domain([minPower, maxPower]).range([0, 400]);
```

Danach kannst du die Umrechnung über den Variablen-Namen aufrufen (e.g. `xScale()`). Du musst den Wert welchen du umrechnen möchtest (e.g. `Power Level`) mitgeben und erhälst den berechneten Wert zurück (e.g. die X Position zwischen `0` und `width`).

```js
data.forEach((item) => {
    // wir greifen innerhalb des objektes auf das "Power Level" zu
    let power_level = item["Power Level"];
    // wir kontrollieren, dass wir den wert erhalten
    console.log(power_level);

    // wir senden den wert an die oben definierte xScale funktion und speichern den neuen Wert in x.
    let x = xScale(power_level);

    // wir legen y fix fest
    let y = height / 2;

    // wir zeichnen die daten von links nach rechts entsprechend ihrem power level
    // links = low, rechts = high
    ellipse(x, y, 5, 5);
});
```
