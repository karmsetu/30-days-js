// 1.
var firstName = 'BOI';
console.log(typeof firstName);
var lastName = 'KNOWN';
console.log(typeof lastName);
var country = 'INDIA';
console.log(typeof country);
var city = 'DELHI';
console.log(typeof city);
var age = 19;
console.log(typeof age);
var isMarried = false;
console.log(typeof isMarried);
var year = new Date().getFullYear();
console.log(typeof year);

// 2.
console.log(typeof '10' === typeof 10);

// 3.
console.log(typeof parseInt('9.8') === typeof 10);

// 4.
// truthy value
const L1P4I1 = 'lol';
const L1P4I2 = 12;
const L1P4I3 = {};
// falsy value
const L1P4II1 = '';
const L1P4II2 = 0;
const L1P4II3 = undefined;
console.log({ L1P4I1, L1P4I2, L1P4I3, L1P4II1, L1P4II2, L1P4II3 });

// 5.
console.log(4 > 3); //truth
console.log(4 >= 3); //t
console.log(4 < 3); //f
console.log(4 <= 3); //f
console.log(4 == 4); //t
console.log(4 === 4); //t
console.log(4 != 4); //f
console.log(4 !== 4); //f
// console.log(4 != '4'); //f
// console.log(4 == '4'); //t
// console.log(4 === '4'); //f
console.log('python'.length !== 'jargon'.length); //a falsey value

// 6.
console.log(`problem 6:`);

console.log(4 > 3 && 10 < 12); // t
console.log(4 > 3 && 10 > 12); // f
console.log(4 > 3 || 10 < 12); // t
console.log(4 > 3 || 10 > 12); // t
console.log(!(4 > 3)); // f
console.log(!(4 < 3)); // t
console.log(!false); // t
console.log(!(4 > 3 && 10 < 12)); // f
console.log(!(4 > 3 && 10 > 12)); // t
// console.log( !(4 === '4')) // t
console.log('dragon'.includes('on') && 'python'.includes('on'));

// 7.
console.log(`problem 7`);

console.log(`1. What is the year today?`, new Date().getFullYear());
console.log(`2. What is the month today as a number?`, new Date().getMonth());
console.log(`3. What is the date today?`, new Date().getDate());
console.log(`4. What is the day today as a number?`, new Date().getDay());
console.log(`5. What is the hours now?`, new Date().getHours());
console.log(`6. What is the minutes now?`, new Date().getMinutes());
console.log(
    `7. Find out the numbers of seconds elapsed from January 1, 1970 to now.`,
    new Date().getTime()
);

//? LEVEL 2
// 1.
// const base = Number(prompt('enter base'));
// const height = Number(prompt('enter height'));
// console.log((base * height) / 2);

// 2. perimeter
console.log(`perimeter: ${1 + 2 + 3}`);

// 3. area of rectangle
console.log(`Area of Rect: ${2 * (3 + 7)}`);

// 4. area and circumfrence
console.log(`Area of circle: ${Math.PI * 3 ** 2}`);
console.log(`circum of circle: ${2 * Math.PI * 3}`);

// 5. slope
/**
 * y = 2x -2
 * y:0,-2
 * x:1, 0
 */
console.log(`Slope: ${(-2 - 0) / (0 - 1)}`);
console.log(`Slope: ${(10 - 2) / (6 - 2)}`);

let x = 1;
let y = 0;
console.log(y * (y = x ** 2 + 6 * x + 9));

// 8.
var hours = 40;
var ratePerHour = 28;
console.log('weekly earning:', hours * ratePerHour);

// 10.
var L2P10 = `Shouryaa`;
console.log(`your name is ${L2P10.length === 7 ? 'long' : 'short'}`);

// 11.
let L2P11firstName = 'Asabeneh';
let L2P11lastName = 'Yetayeh';
console.log(
    `Your first name,${L2P11firstName}, is ${
        L2P11firstName.length > L2P11lastName.length ? 'longer' : 'shorter'
    } than your family name, ${L2P11lastName}`
);

// 12.
let L2P12myAge = 250;
let L2P12yourAge = 25;
console.log(`I am ${L2P12myAge - L2P12yourAge} older than you`);

// 14.
var L2P14year = 100;
console.log(L2P14year * 365 * 24 * 60 * 60);

// 15.
const date = new Date();

const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const formattedDate = new Intl.DateTimeFormat('en-US', options as any).format(
    date
);
console.log(formattedDate); // Output: MM/DD/YYYY

const format = (date: Date, options: [any]) => {
    const leftPad = (data: any, spacing: number) => {
        const strPad = String(data);
        if (strPad.length < spacing) {
            return `${'0'.repeat(spacing - strPad.length)}${strPad}`;
        }
        return strPad;
    };
    let dateStr = '';
    for (let i = 0; i < options.length; i++) {
        switch (options[i]) {
            case 'year':
                dateStr.concat(`${leftPad(date.getFullYear(), 4)}/`);
                break;
            case 'month':
                dateStr.concat(`${leftPad(date.getMonth(), 2)}/`);
                break;
            case 'date':
                dateStr.concat(`${leftPad(date.getDate(), 2)}/`);
                break;
            case 'day':
                dateStr.concat(`${leftPad(date.getDay(), 2)}/`);
                break;
            case 'hour':
                dateStr.concat(`${leftPad(date.getHours(), 2)}/`);
                break;
            case 'min':
                dateStr.concat(`${leftPad(date.getMinutes(), 2)}/`);
                break;
            case 'sec':
                dateStr.concat(`${leftPad(date.getSeconds(), 2)}/`);
                break;
            default:
                break;
        }
    }
};
