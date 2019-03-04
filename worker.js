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
        return this.getSalary() -  Math.floor(this.tax / this.getSalary() * 100);
    }
}
