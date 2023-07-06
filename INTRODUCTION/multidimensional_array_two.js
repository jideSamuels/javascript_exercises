var arrays = [];
var arrays2 = ["car", 2000, ["Toyota", "Nissan"]];
var arrays3 = ["Truck", 500, ["Ford"]];
var arrays4 = ["Bike", 6500, ["Honda"]];
var arrays5 = ["Scooter", 1500, [null]]
arrays.push(arrays2);
arrays.push(arrays3);
arrays.push(arrays4);
arrays.push(arrays5);



console.table(arrays)