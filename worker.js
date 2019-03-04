class Worker{
    constructor(name, surname, hourRate, hours){
        this.name = name;
        this.surname = surname;
        this.hourRate = hourRate;
        this.hours = hours;
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
}
let workersArray  = [];
for ( i = 0; i < 2; i++){
    let name = prompt('dati nume');
    let surname = prompt('dati prenume');
    let hourRate = prompt('dati salariu pe ora');
    let hours = prompt('dati nr de ore lucrate');
    let worker = new Worker(name, surname, hourRate, hours);
    let salary = worker.getSalary();
    console.log(worker.name);
    console.log(worker.surname);
    console.log( "Salariu " + salary );
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