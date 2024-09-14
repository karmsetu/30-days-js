const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
];

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1/
for (let i = 1; i < 11; i++) {
    console.log(i);
}

let i = 1;
while (i > 11) {
    console.log(i);
    i++;
}

let n: number = 10;
let j = 1;
while (j > n) {
    console.log(j);
    j++;
}

for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 7; j++) {
        console.log('#'.repeat(j));
    }
}

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

for (let i = -1; i <= 10; i++) {
    if (i === -1) {
        console.log(`i    i^2   i^3`);
        continue;
    }
    console.log(`${i}    ${i ** 2}   ${i ** 3}`);
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) console.log(i);
}

for (let i = 0; i <= 100; i++) {
    if (!(i % 2 === 0)) console.log(i);
}

// prime number
for (let i = 0; i <= 100; i++) {
    // iterates over n times
    var caught = 0;
    if (i === 2) console.log(i);
    if (i % 2 === 0) continue; //? if  the number is even then continue next iteration, ignoring the code block below
    for (let j = 3; j < Math.round(i / 2); j += 2) {
        //? starting with j = 3, if it dividable(w/ reminder = 0) with the num j then break the loop
        if (i % j === 0) {
            caught += 1;
            break;
        }
    }
    if (!caught) console.log(i);
}

// sum
var sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// sum odd & even
// sum
var sumOdd = 0;
var sumEven = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
        continue;
    }
    sumOdd += i;
}
console.log({ sumEven, sumOdd });

const newArr = new Array(5).map(() => Math.random());
console.log(newArr);

const uniqueCharArr: number[] = [];
while (uniqueCharArr.length < 5) {
    var randNum = Math.random() * 100;
    if (uniqueCharArr.includes(randNum)) continue;
    uniqueCharArr.push(randNum);
}

console.log(uniqueCharArr);

// 15/
var sixChar = '';
while (sixChar.length < 6)
    sixChar += String(Math.round(Math.floor(Math.random() * 10)));

console.log(sixChar);

while (sixChar.length < Math.round(Math.random() * 1000))
    sixChar += String(Math.round(Math.floor(Math.random() * 10)));
console.log(sixChar);

// hexadecimal
const hexdecimalStr = '0123456789abcdef';
var color = '#';
while (color.length < 7)
    color += String(hexdecimalStr[Math.round(Math.random() * 16)]);
console.log(color);

// rgb
var rgbColor: number[] | string = [];
while (rgbColor.length < 3) rgbColor.push(Math.round(Math.random() * 255));
rgbColor = `rgb(${rgbColor[0]},${rgbColor[1]},${rgbColor[2]})`;

// sorted countries
console.log(countries.sort());

// countries length
console.log(countries.map((country) => country.length));

// formatted countries
console.log(
    countries.map((country) => [
        country,
        country.slice(0, 3).toUpperCase(),
        country.length,
    ])
);

// land countries
let landCountries: string[] = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes('land')) landCountries.push(countries[i]);
}

console.log(landCountries);

// IA countries
let iaCountries: string[] = [];
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (
        country[country.length - 1] === 'a' &&
        country[country.length - 2] === 'i'
    )
        iaCountries.push(country);
}
console.log(iaCountries);

let maxLength = 0;
let maxIndex = 0;
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.length > maxLength) {
        maxLength = country.length;
        maxIndex = i;
    }
}
console.log(countries[maxIndex]);

// 5 letter countries
const fiveWordCountries: string[] = [];
for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    if (country.length === 5) fiveWordCountries.push(country);
}

console.log(fiveWordCountries);

// 12
console.log(webTechs.map((tech) => [tech, tech.length]));

// 13
console.log(mernStack.map((tech) => tech[0]).reduce((c, p) => c + p));

// 14
for (let tech of webTechs) console.log(tech);

// 15
const fruit = ['banana', 'orange', 'mango', 'lemon'];
console.log(fruit.reverse());

// 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB'],
];

for (let tech of fullStack.flat()) console.log(tech);

// ? Level 3
let countriesCopy = countries.copyWithin(0, 0);
console.log(countriesCopy);
