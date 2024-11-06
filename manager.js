const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        if (this.employees.length === 0) return this.salary * multiplier;

        const subTotal = this._totalSubSalary(this.employees)

        const bonus = (subTotal + this.salary) * multiplier;

        return bonus;
    }

    _totalSubSalary(arr = this.employees, index = -1, sum = 0, flag = false) {
        if (index + 1 === this.employees.length ) {
            return + this.employees[index].salary
        }

        if (arr[index + 1] instanceof Manager) {
            flag = true;

            return arr[index + 1].salary + sum + this._totalSubSalary(arr[index + 1].employees, index, sum, flag);
        } else if (arr[index + 1] instanceof Employee) {
            
            sum = arr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.salary;
            }, 0);

            index++;

            if (flag === false) {
                return sum;
            } else if (index + 1 === this.employees.length) {
                return sum;
            }

            return sum + this._totalSubSalary(this.employees, index, sum);
        }
    }
}

// const splinter = new Manager("Splinter", 100000, "Sensei");

// console.log("Before: ", splinter);

// const leo = new Employee("Leonardo", 90000, "Ninja", splinter);
// const mikey = new Employee("Michelangelo", 90000, 'Ninja', splinter);
// const donnie = new Employee("Donatello", 90000, "Ninja", splinter);
// const raph = new Employee("Raphael", 90000, "Ninja", splinter);

// const splinter = new Manager('Splinter', 100000, 'Sensei');
// const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
// //const vic = new Manager('Victor', 90000, "Ninja", splinter);
// const raph = new Manager('Raphael', 90000, 'Ninja', leo);
// const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
// const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', leo);

// console.log(splinter.calculateBonus(0.05)); // => 22500 
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000

//console.log(splinter.calculateBonus(0.05)); // => 22500 
// console.log(leo.calculateBonus(0.05)); // => 17500
// console.log(raph.calculateBonus(0.05)); // => 13000

// console.log(splinter);
// console.log("=============");
// console.log(leo);
// console.log("=============");
// // console.log(vic);
// // console.log("=============")
// console.log(raph);
// console.log("=============");
// console.log(mikey);

// splinter.addEmployee(leo);
// splinter.addEmployee(mikey);
// splinter.addEmployee(donnie);
// splinter.addEmployee(raph);

// console.log("After: ", splinter);

module.exports = Manager;