
console.log('init');

//points = fetch("./nodes.json");
fetch("./nodes.json");
    .then(results => results.json())
    .then(console.log);
//const obj = JSON.parse(points);

//console.log(obj);