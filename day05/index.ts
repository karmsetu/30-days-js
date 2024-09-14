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
    'India',
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

//1/
console.log(new Array());
//2
console.log(new Array(6));
//3
console.log(new Array(6).length);

// 4/
console.log(
    webTechs[0],
    webTechs[Math.round((webTechs.length - 1) / 2)],
    webTechs[webTechs.length - 1]
);

//5/
let mixedDataTypes: any[] = [
    1,
    'a',
    2.2,
    'LOL',
    { message: 'hello' },
    undefined,
];
console.log(mixedDataTypes.length);

//6/
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon',
];

// 7/
console.log(itCompanies);

//8/
console.log(itCompanies.length);

// 9/
console.log(
    itCompanies[0],
    itCompanies[Math.round((itCompanies.length - 1) / 2)],
    itCompanies[itCompanies.length - 1]
);

// 10.
itCompanies.forEach((company) => console.log(company));

// 11/
console.log(itCompanies.map((company) => company.toUpperCase()));

//12/
console.log(
    itCompanies.map((company) => company[0].toUpperCase() + company.slice(1))
);

//13/
let companyName = '';
console.log(itCompanies.includes(companyName) ? companyName : 'not found');

// 14/
var filteredArr: string[] = [];
itCompanies.forEach((company) => {
    var oRepeat = 0;
    for (let i = 0; i < company.length; i++) {
        if (company[i].toLowerCase() === 'o') {
            oRepeat += 1;
        }
        if (oRepeat > 1) {
            console.log({ company, oRepeat });

            break;
        }
    }
    if (oRepeat <= 1) filteredArr.push(company);
    // else return null;
});

console.log(filteredArr);

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

// 17
console.log(itCompanies.slice(0, 2));
//18
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length - 1));

// 20
console.log(itCompanies.shift());
// 21
console.log(itCompanies.pop());

console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));

console.log(itCompanies.splice(0));

//? Level
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(text.split(' '));
console.log(text.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(
    shoppingCart[0] === 'Meat' ? shoppingCart : shoppingCart.unshift('Meat')
);
console.log(
    shoppingCart[shoppingCart.length - 1] === 'Sugar'
        ? shoppingCart
        : shoppingCart.push('Sugar')
);

console.log('I am not allergic to honey');

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

countries.includes('Ethiopia')
    ? console.log('ETHIOPIA')
    : countries.push('Ethiopia');

console.log(countries);

webTechs.includes('Sass')
    ? console.log('Sass is a CSS preprocessor')
    : webTechs.push('Sass');

console.log(webTechs);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ? LEVEL 3
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages = ages.sort();
const agesMin = ages.reduce((p, c) => Math.min(p, c));
console.log();
const agesMax = ages.reduce((p, c) => Math.max(p, c));
console.log();
const agesAvg = ages.reduce((p, c) => p + c) / 2;
console.log(agesAvg);

console.log(agesMax - agesMin);

console.log(`
(min - avg): ${Math.abs(agesMin - agesAvg)}
(max - avg): ${Math.abs(agesMax - agesAvg)}
  `);

console.log(countries.slice(0, 9));

const halfer = (countries.length - 1) / 2;
console.log(halfer);

const middleIndex =
    halfer === Math.round(halfer) ? [halfer] : [halfer + 0.5, halfer - 0.5];

console.log({ middleIndex });
