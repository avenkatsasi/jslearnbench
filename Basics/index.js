// Global property
a = "Window-A"
// Creating an Object with an Object literal
let sampleObj = {
    // Primitive type as a properties
    firstName: "John",
    lastName: "Doe",
    a: "sampleObject-A",
    // Function as a Property
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // Another object as a property
    identificationInfo: {
        IDNumber: 121212121,
        DOE: "20/04/2030",
        a: "Info-A",
        summary: function() {
            // this.a will refer to the 'a' property in identificationInfo object
            console.log(this.a)
            // 'a' will refer to property of global object(In this case 'window' of html file)
            console.log(a)
        }
    }
}

console.log(sampleObj.fullName())
sampleObj.identificationInfo.summary()

// Creating an Object with factory function
function personObject(name, age, gender) {
    return {
        name: name,
        age,
        gender,
        summary: function() {
            return name + ' ' + age + ' ' + gender
        }
    }
}

let person1 = personObject('Peter', 45, 'Male')
console.log(person1.summary())

// Creating an object with Constructor function
function ObjectA() {
    this.propA = 10,
    this.propB = "ABCD",
    this.summary = function() {
        return this.propA + " " + this.propB
    }
}
const objectAVar = new ObjectA() // Here new creates an empty object like {}, and adds properties propA, propB and summary function to it.
objectAVar.summary()