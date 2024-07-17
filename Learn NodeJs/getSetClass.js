//data properti getter and setter

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullname) {
        const [firstName, lastName] = fullName.split('');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}