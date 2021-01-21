//Radosław Rozmus 12452 - Pętle i ify

//Zadanie 1

const num1 = 7;
const num2 = 2;

if (num1 > num2) {
    console.log(`${num1} jest większa`);
}
else {
    console.log(`${num2} jest większa`);
}

//Zadanie 2

const num1 = 200;
const num2 = 200;
const num3 = 100;

if (num1 >= num2 && num1 >= num3) {
    console.log(`${num1} jest największa`);
}
else if (num2 >= num1 && num2 >= num3) {
    console.log(`${num2} jest największa`);
}
else {
    console.log(`${num3} jest największa`)
}

//Zadanie 3

for (let i = 0; i < 10; i++) {
    console.log("Lubię Javascript");
}

//Zadanie 4

let result = 0;
for (let i = 1; i <= 10; i++) {
    result += i;
}
console.log(result);

//Zadanie 5

var n = 5;
for (let i = 0; i <= n; i++) {
    console.log(i % 2 === 0 ? `${i} - parzysta` : `${i} - nieparzysta`);
}

//Zadanie 6

for (let i = 0; i <= 5; i++) {
    let stars = '';
    for (let j = 0; j <= 10; j++) {
        console.log("i= " + i + ", j= " + j);
    }
}

//Zadanie 7

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
    }
    else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('Buzz');
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}

//Zadanie 8

const a = () => {    
    for(let i=1; i<=5; i++)
    {
        let result="";
        for(let j=1; j<=i; j++)
        {
        result += "*";   
        }
    console.log(result);
    }
};

const b = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
        result[i] = '';
        for (let j = i; j < 5; j++) {
            result[i] += ' ';
        }
        const max = (2 * i - 1);
        for (let j = 1; j <= max; j=j+2) {
            result[i] += ' ';
            result[i] += '*';
        }
    }
    console.log(result.join('\n'));
};

const c = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
        result[i] = '';
        for (let j = i; j < 5; j++) {
            result[i] += ' ';
        }
        const max = (2 * i - 1);
        for (let j = 1; j <= max; j++) {
            result[i] += '*';
        }
    }
    console.log(result.join('\n'));
};

const d = () => {
    for(let i=1; i<=5; i++)
    {
        let result="";
        for(let j=1; j<=i; j++)
        {
        result += "*";   
        }
        for(let j=1; j<=5-i; j++)
        {
        result += j.toString();   
        }

    console.log(result);
    }
    console.log('-----');
    for(let i=5; i>0; i--)
    {
        const text = "1234";
        let result="";
        for(let j=i; j>0; j--)
        {
        result += "*";   
        }
        result += text.slice(i-1 , 4); 

    console.log(result);
    }

};

const e = () => {
    const result = [];
    for (let i = 1; i <= 5; i++) {
        result[i] = '';
        for (let j = i; j < 5; j++) {
            result[i] += ' ';
        }
        const max = (2 * i - 1);
        for (let j = 1; j <= max; j++) {
            if((j%2)) result[i] += '*';
            else result[i] += ' ';
            
        }
    }
    for(let i = 6; i<=8; i++)
    {
        result[i] = '    *';
    }
    console.log(result.join('\n'));
    
};

a();
b();
c();
d();
e();