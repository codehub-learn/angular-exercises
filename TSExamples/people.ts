interface output {
    fullname: string, 
    age: number
}

class Person {
    constructor(public firstName: string, public lastName: string, public age: number) {}
}

const person1 = new Person("John", "Doe", 35);
const person2 = new Person("Jane", "Doe", 30);

function generateOutput(people: Person[]): output[] {
    return people.map((person: Person) => {
        const {firstName, lastName, age} = person;
        return {
            fullname: `${firstName} ${lastName}`,
            age
        }
    })
}

console.log(generateOutput([person1, person2]))



