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
let maxSallary = workersArray[0].salary;
console.log(maxSallary);
workersArray.forEach( function (el,index) {
    if( el.salary > maxSallary ){
        maxSallary = el.salary;
        maxIndex = index;
    }
});
console.log('Salariul maxim il are :' + workersArray[maxIndex].name + ' '+ workersArray[maxIndex].surname + ' fiind ' +maxSallary);
var worker = new Worker('Ion', 'Creangă', 10, 176);
worker.setTax(12);
console.log(worker.getSalaryNetto());
