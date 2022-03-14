export class Customer {

    constructor(public firstName: string, public lastName: string) { }

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

let customer = new Customer("John", "Smith");
console.log(customer.fullName());
