"use strict";
var Person, person;
Person = (function() {

    function Person(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        return this;
    }

    Person.prototype = {
        get fullName() {
            return this._firstName + ' ' + this._lastName;
        },
        set fullName(name) {
            var names = name.split(' ');
            this._firstName = names[0].trim();
            this._lastName = names[1].trim();
        }
    }

    return Person;
})();

person = new Person("Peter", "Jackson");
console.log(person._firstName);
console.log(person._lastName);
console.log(person.fullName);

// Changing values
person._firstName = "Michael";
console.log(person._firstName);
console.log(person.fullName);
person._lastName = "Williams";
console.log(person._lastName);
console.log(person.fullName);

/*
Michael
Michael Jackson
Williams
Michael Williams
*/

// Changing the full name should work too
person.fullName = "Alan Marcus";
console.log(person.fullName);
console.log(person._firstName);
console.log(person._lastName);

/*
Alan Marcus
Alan
Marcus
 */

console.log(person);
