var prompt = require('prompt-sync')();

//UC1, UC2
let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
let addressRegex = RegExp('^[A-Za-z0-9]{4,}$');
let zipRegex = RegExp('[0-9]{6}');
let phoneRegex = RegExp('^([0-9]{1,4}[ ][0-9]{10})$');
let emailRegex = RegExp('^[a-zA-Z0-9_]+[-+.]?[A-Za-z0-9_]+@[A-Za-z0-9]+[.][a-z]{2,}[.]?([a-z]{2,})?$');

class Contact {
    constructor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName }
    set firstName(firstName) {
        if (nameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "Invalid First Name";
        }
    }
    get lastName() { return this._lastName }
    set lastName(name) {
        if (nameRegex.test(name)) {
            this._lastName = name;
        } else {
            throw "Invalid Last Name";
        }
    }
    get address() { return this._address }
    set address(add) {
        if (addressRegex.test(add)) {
            this._address = add;
        } else {
            throw "Invalid address";
        }
    }
    get city() { return this._city }
    set city(cityName) {
        if (addressRegex.test(cityName)) {
            this._city = cityName;
        } else {
            throw "Invalid city";
        }
    }
    get state() { return this._state };
    set state(stateName) {
        if (addressRegex.test(stateName)) {
            this._state = stateName;
        } else {
            throw "Invalid state";
        }
    }
    get zip() { return this._zip }
    set zip(zipCode) {
        if (zipRegex.test(zipCode)) {
            this._zip = zipCode;
        } else {
            throw "Invalid zip";
        }
    }
    get phone() { return this._phone }
    set phone(number) {
        if (phoneRegex.test(number)) {
            this._phone = number;
        } else {
            throw "Invalid phone number";
        }
    }
    get email() { return this._email }
    set email(email) {
        if (emailRegex.test(emailRegex)) {
            this._email = email;
        } else {
            throw "Invalid Email";
        }
    }
    toString() {
        return "FirstName: " + this.firstName + " LastName: " + this.lastName + " Address: " + this.address + " City: " + this.city + " State: " + this.state
            + " Zip: " + this.zip + " Phone: " + this.phone + " Email: " + this.email;
    }
}
let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter last name: ");
let address = prompt("Enter the address: ");
let city = prompt("Enter the city: ");
let state = prompt("Enter the state: ");
let zip = prompt("Enter the zip: ");
let phone = prompt("Enter the phone: ");
let email = prompt("Enter the email: ");

try {
    let contact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
    console.log(contact);
} catch (e) {
    console.log(e);
}

// UC 3
let addressBookArray = new Array();
function addContact() {
    addressBookArray.push(createContact());
}
addContact();
console.log(addressBookArray);

// UC 4
function editContact(personName) {
    addressBookArray.forEach(contact => {
        if ((contact._firstName + " " + contact._lastName) == (personName)) {
            let choice = prompt("Enter choice \n1.Add new phone number \n2.Add new email \n3.Exit ");
            switch (parseInt(choice)) {
                case 1:
                    var phoneNumber = prompt("Enter new phone number : ");
                    contact._phone = phoneNumber;
                    break;
                case 2:
                    var emailId = prompt("Enter new email : ");
                    contact._email = emailId;
                    break;
                case 3:
                    return;
                default:
                    console.log("Enter valid choice");
            }

        }
    });
}
let editName = prompt("Enter person's name to edit contact : ");
editContact(editName);
console.log(addressBookArray)

// UC 5
function deleteContact(personName) {
    let i = 0;
    addressBookArray.forEach(contact => {
        if ((contact._firstName + " " + contact._lastName) == (personName)) {
            addressBookArray.splice(i, 1);
            addressBookArray.indexOf()
        }
        i++;
    });
}

let deleteName = prompt("Enter the person's name to delete contact : ");
deleteContact(deleteName);
console.log(addressBookArray);

// UC 6
function countContacts(length, Contact) {
    length++;
    return length;
}
console.log("Number of contacts in address book : " + addressBookArray.reduce(countContacts, 0));

// UC 7
function checkDuplicate(newContact) {
    addressBookArray.forEach(contact => {
        if ((contact.firstName + contact.lastName) == (newContact.firstName + newContact.lastName)) {
            return true;
        }
    });
}

// UC 8 
function searchPersonByCity(name, city) {
    return addressBookArray.filter(contact => contact._city == city).filter(contact => (contact._firstName + " " + contact._lastName) == name);
}
let personByCity = searchPersonByCity(prompt("Enter name to search : "), prompt("Enter city name: "));
console.log("Persons in" + personByCity._city + " city are: " + personByCity);

function searchPersonByState(name, state) {
    return addressBookArray.filter(contact => contact._state == state).filter(contact => (contact._firstName + " " + contact._lastName) == name);
}
let personByState = searchPersonByState(prompt("Enter name to search : "), prompt("Enter state name: "));
console.log("Persons in " + personByState._state + " state are: " + personByState);

// UC 9
function viewPersonsByCity(city) {
    let list = addressBookArray.filter(contact => contact.city == city);
    return list;
}
cityToSearch = prompt("Enter a city name to view contacts: ");
let personsByCity = viewPersonsByCity(cityToSearch);
console.log("All persons in " + cityToSearch + " are : " + personsByCity);

function viewPersonsByState(state) {
    return addressBookArray.filter(contact => contact._state == state);
}
stateToSearch = prompt("Enter a state name to view contacts: ");
let personsByState = viewPersonsByStates(stateToSearch);
console.log("All persons in " + state + " are : " + personsByState);

// UC 10
function countByCity(city) {
    return addressBookArray.filter(contact => contact._city = city).reduce(countContacts, 0);
}
let cityToCount = prompt("Enter city name to count contacts : ");
console.log("Number of persons in " + cityToCount + " are : " + countByCity(cityToCount));
function countByState(state) {
    return addressBookArray.filter(contact => contact._state = state).reduce(countContacts, 0);
}
let stateToCount = prompt("Enter state name to count contacts : ");
console.log("Number of persons in " + stateToCount + " are : " + countByState(stateToCount));

// UC 11
function compareByName(contact1, contact2){
    let c1 = (contact1.firstName + " " + contact1.lastName).toUpperCase();
    let c2 = (contact2.firstName + " " + contact2.lastName).toUpperCase();
    return c1 - c2;
}
function sortByName(){
    let sortedList = addressBookArray.sort(compareByName);
    console.log(sortedList);
}
sortByName();

//UC12
function compareByZip(contact1, contact2) {
    let c1 = contact1.zip;
    let c2 = contact2.zip;
    return c1 - c2;
}
function sortByZip() {
    let sortedList = addressBookArray.sort(compareByZip);
    console.log(sortedList);
}
sortByZip(); 