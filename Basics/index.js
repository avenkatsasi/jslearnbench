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

// #1: Creating an Object with factory function
// #2: since function is an object, an object called "personObject" will also be created
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

// #1: Creating an object with Constructor function
// #2: If "this" was not used for propA and other properties, 
// the properties will be added to global object which 
// will be "window" object in a html page.
// **: Here ObjectA will not be an object, but a prototype(Like class).
// **: Unless new is used to create an instance, ObjectA is not useful
function ObjectA() {
    this.propA = 10,
    this.propB = "ABCD",
    this.summary = function() {
        return this.propA + " " + this.propB
    }
}

// - Here new creates an empty object like {}, 
// - and adds properties propA, propB and summary function to it.
const objectAVar = new ObjectA() 
const objectAVarSummary = objectAVar.summary()
console.log(objectAVarSummary)

// #1: Creating an object with Class keyword
// **: this is similar to creating object with constructor function.
// **: In fact internally this will create a constructor function.
class ObjectB {
    constructor() {
        this.propX = "hello world",
        this.propY = "Welcome to Classes",
        this.summary = function () {
            return this.propX + " " + this.propY;
        };
    }
}

const objectBObj = new ObjectB
console.log(objectBObj.summary())

class MathMaster {
    constructor() {
        this.op1 = 10,
        this.op2 = 30,
        this.addOperands = function() {
            return this.op1 + this.op2
        }
        this.printNumbersBetween = function(smallerNum, biggerNum) {
            if (biggerNum <= smallerNum) {
                if (biggerNum == smallerNum) {
                    console.log('As both numbers equal, not printing numbers')
                    return
                }
                // swap smallerNum and biggerNum
                console.log('Smaller number was passed in place of bigger number')
                const tempNum = biggerNum; biggerNum = smallerNum; smallerNum = tempNum
            }
            const actualDifference = biggerNum - smallerNum - 1

            for (let index = 0; index < actualDifference; index++) {
                console.log(smallerNum + index + 1)
            }
        }
    }
}

const mathM = new MathMaster
console.log(mathM.addOperands())
mathM.printNumbersBetween(-5, 5)

// Protoype of an Object
console.log(MathMaster.prototype)
console.log(ObjectB.prototype)