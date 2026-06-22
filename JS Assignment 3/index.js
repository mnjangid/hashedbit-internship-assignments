// Q1 
const array = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const newArray = array.filter(function(value){
    if(value.startsWith('A') || value.startsWith('E') || (value.startsWith('I') || value.startsWith('O') || value.startsWith('U'))) return false;
    return true;
});
console.log(newArray);

// Q2
let str = 'I love my India'

let newStr = str.split(' ').reverse().join(' ');
console.log(newStr);

//Q3
let str2 = "INDIA"
let arr = str2.split('');
arr.splice(3,0,"ONES");
let ans = arr.join('');
console.log(ans);

// Q4
let s = "My name is Manmohan Jangid.I am from Kuchaman City";

let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        if (vowels.includes(ch)) {
            vowelCount++;
        } 
        else {
            consonantCount++;
        }
    }
}

console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);

//Q5
function correct(st,wrong, correct){
  return st.replace(wrong,correct);
}
let st = "My naem is Manmohan Jangid"
let correctAns = correct(st,"naem", "name");
console.log(correctAns);

//Q6
let inputArr = [1,2,3,9,10,7,5,4,3]
let a = inputArr.filter((value)=>{
  if(value>5) return true;
  return false;
})
console.log(a);

//Q7
const students = [
{ name: "Ram", scores: [80, 70, 60] },
{ name: "Mohan", scores: [80, 70, 90] },
{ name: "Sai", scores: [60, 70, 80] },
{ name: "Hemang", scores: [90, 90, 80, 80] },
];

let result = students.map((val)=>{
  let totalScore = val.scores.reduce((acc,score)=>acc+score,0);
  let avg = totalScore/val.scores.length;

  return {
    name: val.name,
    avg: avg
  }
})
console.log(result);

//Q8
function find(num) {
    while(num>=10){
        let sum = 0;
        while(num>0){
            sum += num % 10;
            num = Math.floor(num/10);
        }
        num = sum;
    }
    return num;
}

console.log(find(456)); 

//Q9
let para = "My name is Manmohan Jangid";
let b = para.split(' ');
console.log(b.length);

// Q10
function reverse(s){
  let a = s.split('').reverse().join('');
  console.log(a);
}
reverse("Hello");


// Q11 
let input = [[40,50,60,50,100],[19,90,60,89,55],[23,34,34,56,90],[56,56,54,32,45]]
let output = input.map((student)=>{
  let total = student.reduce((acc,marks)=>acc+marks,0);
  let average = total/5;
  return{
    average: average
  }
})
    
console.log(output);
