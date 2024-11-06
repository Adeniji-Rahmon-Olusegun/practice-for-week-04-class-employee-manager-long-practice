const Employee = require('./employee');
const Manager = require('./manager');

const hob = new Manager("Hobbes", 1000000, "Founder");
const cal = new Manager("Calvin", 130000, "Director", hob);
const sus = new Manager("Susie", 100000, "TA Manager", cal);
const lil = new Employee("Lily", 90000,"TA", sus);
const clif = new Employee("Cliford", 90000, "TA", sus);

console.log(hob.calculateBonus(0.05));
console.log(cal.calculateBonus(0.05));
console.log(sus.calculateBonus(0.05));
console.log(lil.calculateBonus(0.05));
console.log(clif.calculateBonus(0.05));