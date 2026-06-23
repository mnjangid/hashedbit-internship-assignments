// Q1
function fn(){
    let x = 5;
    const y = 10;
    var z = 10;
}

// let and const are block scope and var is function scope
// var is hoisted with undefined let and const are also hoisted but they are not initialised 
// var can be redeclared and reassigned , let can be reassigned not redeclared and const can't be redeclared and reassigned

// Q2
const fruits = ['Mango', 'Apple', 'Grapes', 'Banana','Chikoo'];
function second(){
    return fruits[1];
}
const secondElement = second();
console.log(secondElement);

//Q3
const arr = [1,2,3,4];
function add(arr){
    arr.push(5);
    console.log(arr);
    arr.pop();
    console.log(arr);
}
add(arr);

//Q4
const a = [1,2,3,4,5];
const b = a.map((val)=>{
    return val*val;
})
console.log(b);

//Q5
const c = [1,2,3,4,5];
const d = c.filter((i)=>{
    if(i%2==1) return true;
    return false;
})
console.log(d);

//Q6
const person = {
    name: "Manmohan",
    age: "20",
    occupation: "Student"
}
function greet(p){
    console.log(`Hello ${p.name}, Good Morning`);
}

greet(person);


//Q7
const x = {
    width: 3,
    height: 5
}
function area(x){
    return x.width*x.height;
}
console.log(area(x));

//Q8
const obj = {
    name: "Manmohan",
    age: 20,
    occupation: "Student"
}
function keys(obj){
    return Object.keys(obj)
}
console.log(keys(obj));

//Q9
const obj1 = {
    name: "Manmohan",
    age: 20,
    occupation: "Student"
}
const obj2 = {
    class: "Btech 2nd Year",
    course: "Information Technology",
}
function combine(obj1, obj2){
    return Object.assign(obj1, obj2);
}
console.log(combine(obj1,obj2));

//Q10
const z = [1,2,3,4,5];
const ans = z.reduce((acc,curr)=>acc+curr,0);
console.log(ans); 