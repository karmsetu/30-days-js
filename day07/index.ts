// Level
function logFullName(fullName: string) {
    console.log(fullName);
}

logFullName('Shourya Gupta');

// 2
function fullName(firstName: string, lastName: string) {
    return firstName + lastName;
}
console.log(fullName('Shourya', 'Gupta'));

// 3
function addNum(a: number, b: number) {
    return a + b;
}

//4
function areaOfRect(length: number, width: number) {
    return length * width;
}

//5
function perimeterOfRect(length: number, width: number) {
    return 2 * (length + width);
}

//6
function areaOfRectPrism(length: number, width: number, height: number) {
    return length * width * height;
}

// 9
function circumOfCircle(radius: number) {
    return 2 * Math.PI * radius;
}

// density
function density(mass: number, volume: number) {
    return mass / volume;
}

// gravity
function convertCelsiusToFahrenheit(oC: number) {
    return (oC * 9) / 5 + 32;
}

function BMI(
    weight: number,
    height: number
): 'Underweight' | 'Normal weight' | 'Overweight' | 'Obese' {
    const bmi = weight / (height * height);
    if (bmi >= 30) return 'Obese';
    if (bmi >= 25) return 'Overweight';
    if (bmi >= 18.5) return 'Normal weight';
    return 'Underweight';
}

function findMax(a: number, b: number, c: number) {
    var inputArr = [a, b, c];
    return inputArr.reduce((prev, curr) => (prev > curr ? prev : curr));
}
console.log(findMax(1, 2, 3));

// ? Level 2
function solveLinEquation(m: number, x: number, b: number): number {
    // Linear equation: y = mx + b
    return m * x + b;
}

function solveQuadraticFormula(a: number, b: number, c: number) {
    return (
        ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a,
        ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a
    );
}

console.log(solveQuadraticFormula(1, 4, 4));

function printArray(arr: [any]) {
    arr.forEach((elem) => console.log(elem));
}

function showDateTime(): string {
    const date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

console.log(showDateTime());

// swap var
let a = 1;
let b = 4;
function swapValues(a: any, b: any) {
    let c: any;
    c = b;
    b = a;
    a = c;
}
swapValues(a, b);
console.log({ a, b });

const reverseArray = (array: any[]) => {
    var returnArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
        returnArray[i] = array[array.length - 1 - i];
    }
    return returnArray;
};
console.log(reverseArray([1, 2, 34, 8, 56, 7]));
