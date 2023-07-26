let name = prompt("Adınızı daxil edin:");
console.log("Welcome " + name);

let num1 = prompt("Birinci rəqəmi daxil edin:");
let num2 = prompt("İkinci rəqəmi daxil edin:");

let result = Math.max(Number(num1), Number(num2));


console.log(result);

let num = prompt("Bir rəqəm daxil edin:");

if (num > 0) {
  console.log("Daxil etdiyiniz rəqəm müsbət idi.");
} else if (num < 0) {
  console.log("Daxil etdiyiniz rəqəm mənfi idi.");
} else {
  console.log("Daxil etdiyiniz rəqəm sifira bərabər idi.");
}
