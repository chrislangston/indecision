//Car
//make
//model
//vin

//getDescription()

//

class Person {

    constructor(fullName = 'Anonymous', age = 0){
        console.log(fullName);
        this.fullName = fullName;
        this.age = age;
    }

    getGreeting(){
        return `Hi ${this.fullName}`;
    }

    getDescription() {
        return `About ${this.fullName}; Age: ${this.age}`;
    }

}

class Student extends Person {
    constructor(name, age, major = ''){
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

}

const me = new Student('Chris Langston', 47, 'MIS');
console.log(me);

const stephanie = new Student('Stephanie Langston', 46, 'Education');
console.log(stephanie.getDescription());

const anonymous = new Student();
console.log(anonymous.getDescription());