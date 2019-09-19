// CODE here for your Lambda Classes

// Person class.
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

// Instructor class.

class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        return `Today we're learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

// Student class.
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach((subject) => {
            console.log(subject);
        });
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

// Project Manager class.
class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


// Test Cases
// Person test.
const person1 = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
});

console.log('-------- Person ---------');
console.log(person1.speak());

// Student test.
const student1 = new Student({
    name: 'Kerri-Ann',
    location: 'Florida',
    age: 30,
    previousBackground: '2 year college',
    className: 'WEB24',
    favSubjects: ['HTML', 'CSS', 'Javascript']
});

console.log('-------- Student ---------');
console.log(student1.speak());
student1.listsSubjects()
console.log(student1.PRAssignment('CSS'));
console.log(student1.sprintChallenge('Javascript'));

// Instructor test.
const instructor1 = new Instructor({
    name: 'Brit',
    location: 'Canada',
    age: 35,
    specialty: 'Frontend',
    favLanguage: 'JavaScript',
    catchPhrase: 'You got it!'
});

console.log('-------- Instructor ---------');
console.log(instructor1.speak());
console.log(instructor1.demo('Javascript'));
console.log(instructor1.grade(student1, 'Javascript'));

// PM test.
const pm = new ProjectManager({
    name: 'Juan',
    location: 'Texas',
    age: 30,
    specialty: 'Frontend',
    favLanguage: 'JavaScript',
    catchPhrase: 'You got it!',
    gradClassName: 'WEB1',
    favInstructor: 'Dan'
});

console.log('-------- Project Manager ---------');
console.log(pm.speak());
console.log(pm.standUp('Web_24'));
console.log(pm.debugsCode(student1, 'Javascript'));