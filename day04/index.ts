// 1.
const L1P1age = 18;
console.log(
    `You are ${
        L1P1age >= 18 ? 'old enough' : `left with ${18 - L1P1age} years`
    } to drive`
);

//2.
let L1P2a = 4;
let L1P2b = 3;
console.log(L1P2a > L1P2b ? 'a is greater than b' : 'b is greater than a');

//3.
let L1P3num = 2;
console.log(`${L1P3num} is an ${L1P3num % 2 === 0 ? 'even' : 'odd'} number`);

//? Level 2

// p1
const L2P1score = 90;
let grade;
if (L2P1score >= 90 && L2P1score <= 100) grade = 'A';
if (L2P1score >= 70 && L2P1score <= 89) grade = 'B';
if (L2P1score >= 60 && L2P1score <= 69) grade = 'C';
if (L2P1score >= 50 && L2P1score <= 59) grade = 'D';
if (L2P1score >= 0 && L2P1score <= 49) grade = 'F';

// p2
let L2P2month = 'September';
var season;
if (
    L2P2month === 'September' ||
    L2P2month === 'October' ||
    L2P2month === 'November'
) {
    season = 'Autumn';
}
if (
    L2P2month === 'December' ||
    L2P2month === 'January' ||
    L2P2month === 'February'
) {
    season = 'Winter';
}
if (L2P2month === 'March' || L2P2month === 'April' || L2P2month === 'May')
    season = 'Spring';
if (L2P2month === 'June' || L2P2month === 'July' || L2P2month === 'August')
    season = 'Summer';

// p3
let L2P3Day = 'Monday';
var weekend;
if (L2P3Day.toLowerCase() === 'saturday' || L2P3Day.toLowerCase() === 'sunday')
    weekend = true;
else weekend = false;

// ? Level 3
let L3P1month = 'january';
const monthDaysMap = new Map([
    ['january', 31],
    ['february', 28], // Leap years would need special handling
    ['march', 31],
    ['april', 30],
    ['may', 31],
    ['june', 30],
    ['july', 31],
    ['august', 31],
    ['september', 30],
    ['october', 31],
    ['november', 30],
    ['december', 31],
]);
console.log(`${L3P1month} has ${monthDaysMap.get(L3P1month)} days`);
