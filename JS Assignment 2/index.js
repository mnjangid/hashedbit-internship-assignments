//Q1 first question even number printing from 1 to 100
for(let i=0;i<100;i++){
    if(i%2==0) console.log(i);
}

//Q2 function to calculate add, subtract, multiply and divide two numbers

function calculate(a,b,op){
    switch(op){
        case "+": return a+b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": return a/b;        
    }
}
console.log(calculate(5,10,"+"));
console.log(calculate(5,10,"-"));
console.log(calculate(5,10,"*"));
console.log(calculate(5,10,"/"));


//Q3 function findTax agr 
function findTax(salary){
    let tax = 0;
    switch(true){
        case (salary > 0 && salary <= 500000):
            tax = 0;
            break; 

        case (salary > 500000 && salary <= 1000000):
            tax = 0.10 * salary;
            break;
        
        case (salary > 1000000 && salary <= 1500000):
            tax = 0.20 * salary;
            break;

        case (salary > 1500000):
            tax = 0.30 * salary;
            break;

        default:  
            tax = "invalid salary"
        
    }
    return tax;
}

console.log(findTax(100000));


//Q4 sumofProducts function 
function sumOfProducts(n1,n2){
    let p = 0;
    while(n1>0 || n2>0){
        let ld1 = n1%10;
        let ld2 = n2%10;
        p += (ld1*ld2);
        n1 = Math.floor(n1/10);
        n2 = Math.floor(n2/10);
    }
    console.log(p);
}

sumOfProducts(6,24);