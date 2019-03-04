class Worker{
    constructor(name, surname, hourRate, hours){
        this.name = name;
        this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours;
        this.getSalary();
    }
    getSalary(){
        this.salary =  Number( this.hourRate) * Number(this.hours);
        return this.salary;
    }
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;

    }
    getHourRate(){
        return this.hourRate;
    }
    getHours(){
        return this.hours;
    }
    increaseSalary(){
        this.hourRate = this.hourRate * 2;
    }
    setTax(percents){
        this.tax = percents;
    }
    getSalaryNetto(){
        return this.getSalary() -  Math.floor(this.getSalary() / percents * 100);
    }
}
let workersArray  = [];
for ( i = 0; i < 3; i++){
    let name = prompt('dati nume');
    let surname = prompt('dati prenume');
    let hourRate = prompt('dati salariu pe ora');
    let hours = prompt('dati nr de ore lucrate');
    let worker = new Worker(name, surname, hourRate, hours);
    console.log(worker.name);
    console.log(worker.surname);
    console.log( "Salariu " + worker.salary );
    workersArray.push(worker);
}
console.log(workersArray);
let maxIndex = 0;
let maxSallary = workersArray[0].Worker.salary;
console.log(maxSallary);
workersArray.forEach( function (el,index) {
    if( el.Worker.salary > maxSallary ){
        maxSallary = el.Worker.salary;
        maxIndex = index;
    }
});
console.log('Salariul maxim il are :' + workersArray[maxIndex].Worker.name + ' '+ workersArray[maxIndex].Worker.surname + ' fiind ' +maxSallary);