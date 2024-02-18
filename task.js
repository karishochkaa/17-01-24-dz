let sallary = prompt("Введіть розмір вашої зарплати");
sallary = parseFloat(sallary);
//премія
const pramium = (sallary / 100 *15);
//податки
const taxes =  ((sallary + pramium) / 100 * 10);
//витрати
const costs = 190;
//залишок
const remainder = sallary + pramium - taxes - costs;
alert(`Залишок зарплатні складає: ${remainder}`)