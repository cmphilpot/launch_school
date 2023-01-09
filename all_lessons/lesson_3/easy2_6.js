flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

let newFlintstones = [];

flintstones.forEach(element => {
    newFlintstones = newFlintstones.concat(element);
});

console.log(newFlintstones);
