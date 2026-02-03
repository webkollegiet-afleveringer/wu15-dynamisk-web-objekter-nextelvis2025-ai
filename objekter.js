
// --- opgave 1 --- 

let Chaly = {
    fronavn: "Chaly",
    efternavn: "Bob",
    alder: 42,
    by: "Nestved"
}

console.log(Chaly.fronavn);
console.log(Chaly.efternavn);
console.log(Chaly["alder"]);
console.log(Chaly["by"]);


// --- opgave 2 --- 

let Chaly2 = {
    fronavn: "Chaly",
    efternavn: "Bob",
    alder: 42,
    by: "Nestved",
    Pistoler: ["Glock", "Desert Eagle", "Colt"],
    Cat: {
        name: "Misser",
        age: 3
    },
}

Chaly2.Pistoler.forEach(function(Pistoler) {
    console.log(Pistoler);
})

console.log(Chaly2.Cat.name);
console.log(Chaly2.Cat.age);



// --- opgave 3 ---


let elever = [
    { fronavn: "Elvis", alder: 23, by: "København" },
    { fronavn: "Anna", alder: 21, by: "Aarhus" },
    { fronavn: "Mikkel", alder: 25, by: "Odense" },
];

let eleverDiv = document.querySelector(".EleveDiv");
eleverDiv.classList.add("student");
elever.forEach(function(elev) {
    eleverDiv.textContent += 
        elev.fronavn + ', alder ' + elev.alder + ', bor i ' + elev.by + ' ';
});


