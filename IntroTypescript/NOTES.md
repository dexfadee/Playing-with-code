# Typescript
Provides strict type checking over JavaScript
### Variables

```typescript
// let variableName: type = value;

let greeting: string = "Hello"; 
// greeting is now of type string and will be treated as a string variable just like Java or C++

let isVerified: boolean = true;
// Above line is redundant, it is automatically assigned boolean
let isVerified = true;

let valueFromFunction: string;
// This is used when you know the datatype the variable should be but are not assigning it there
```
### Union
```typescript
// Can be a number or a string
let id: number | string = 2231;
```
### Type 'any' 
- Basically turns of the type checking for a variable or when a variable is assinged without any type inference or a value
```typescript
let someValue; // It is assigned 'any'
```
### Functions
```typescript
function addTwo(num: number, numTwo: number = 2): number // Defines the return type of the function
{
    return num + numTwo;
}
```
More than one type return
```typescript
function addTwo(num: number, numTwo: number = 2): number | string // Defines the return type of the function
{
    return num + numTwo;
}
```
### Objects
```typescript
function returnObject(): {name: string, age: number}// Object return type along with specified value
{
    return {name: "Fade", age: 20}
}
```
```typescript
function returnObject(
    {username, isLoggedIn}: {username: string, isLoggedIn: boolean} /* Object parameter along with type of properties of the object */
    ): {name: string, logged: boolean}{
    return {name: username, logged: isLoggedIn}
}
```
### Type Aliases
```typescript
type User = {
    readonly _id: string, // Can't be changed once assigned
    name: string,
    active: boolean,
    email: string,
    payment?: number // Won't be a problem if not assigned
}

function createsEntry(user: User): User{
    return {
        name: user.name,
        active: true,
        email: user.email
    }
}

createsEntry({name: "Fade", active: true, email: "fade@fade.com"})
```
- Combining two types
```typescript
type cardNumber = {
    cardnumber: number
}

type cardType = {
    cardType: string
}

type cardDetails = cardNumber & cardType & {
    cvv: number
}
```
### Arrays
```typescript
// if type is not mentioned it automatically takes 'never'
const serverList: string[] = [] // Now values can be pushed explicitly

const serverList: (string | number)[] = []

const serverList: string[] | number[] = [] // Different that above syntax

const servers: Array<number> = [] // Another syntax for same declaration

const matrix: number[][] = [
    [1, 2, 3]
]

serverList.push("AWS");
```
### Tuples
```typescript
let something: [string, number, boolean];
something = ["string", 123, false] // Order can't be changed
```
### Enums
```typescript
const enum seatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}

const mySeat = seatChoice.AISLE;
```
### Interface
```typescript
interface User {
    email: string,
    userId: number,
    doSome: () => string
    doSome(): string // Same as above
}

const user: User = { email: "email", userId: 211, doSome: () => {
    return "String";
} }

interface User {
    githubToken?: string
} // Extends the interface

interface Admin extends User {
    role: "Admin" | "Tester"
} // Inheritence
```
### Classes
```typescript
class User {
    email: string;
    name: string;
    private readonly city: string = 'City'
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

// Can be written like this too
class User {
    private stuff = 1;
    protected thing = 2;
    constructor(public email: string, public name: string){}

    get getEmail(): string{
        return this.email
    }

    set setStuff(stu){
        this.stuff = stu;
    }
}

class SubUser extends User {
    isGood: boolean = true
    changeProtected(){
        this.thing = 3;
    }
}

const user = new User("email", "name")
```
### Interface with classes
```typescript
interface TakePhoto {
    cameraMode: string,
    burst: number
}

class Instagram implements TakePhoto {
    constructor(public cameraMode: string, public burst: number){} // Interface is a guideline which makes sure those properties are there in this class
}
```
### Abstract class
Does not create an objects of its own, but acts as blueprint for other classes
```typescript
abstract class Photo {
    constructor(public Mode: string, public filter: string){}

    abstract doesSomething()
}

class Video extends Photo {
    constructor(
        public Mode: string,
        public filter: string,
        public fps: number
    ){
        super(Mode, filter)
    }

    doesSomething(){
        console.log("Something");
    }
}
```
### Generics
```typescript
function identity<Type>(val: Type): Type {
    return val; // Takes any type of value and return type is same as input type
}

// Same as above
function identity<T>(val: T): T {
    return val;
}

interface Bottle {
    brand: string,
    type: number
}

interface Bottle {
    brand: string,
    type: number
}

function identity<Bottle> (args: Bottle): Bottle{
    return args
} // Syntax for custom types
```
For array
```typescript
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so won't give error in case of normal generic type
  return arg;
}
```
```typescript
interface Bottle {
    brand: string,
    type: number
}

function something<T, U extends number | Bottle>(valOne: T, valTwo: U): void {}
```
Classes
```typescript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```
### Narrowing
Using ***typeof***
```typescript
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
```
The ***in*** operator narrowing
```typescript
interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {
        return account.isAdmin
    }
    return false
}
```
***instanceof*** narrowing
```typescript
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
```
Using type predicates
```typescript
type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        return "Fish Food"
    }
    return "Bird Food"
}
```
Exhaustiveness checking
```typescript
interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // When every possibility is over and there is nothing left
  }
}
```
```typescript
interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
// Type 'Triangle' is not assignable to type 'never'. because possibility of 'Triangle' is still left
      return _exhaustiveCheck;
  }
}
```