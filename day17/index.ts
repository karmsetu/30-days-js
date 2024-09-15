// ! will only work on a browser
const details = {
    firstName: 'Shourya',
    lastName: 'gupta',
    age: 19,
    country: 'India',
    city: 'delhi',
};
localStorage.setItem('details', JSON.stringify(details));

const studentDetails = {
    firstName: 'Shourya',
    lastName: 'gupta',
    age: 19,
    country: 'India',
    city: 'delhi',
    skills: ['HTML', 'Css', 'JS', 'React', 'Go', 'python'],
    enrolledKey: 0,
};
localStorage.setItem('studentDetails', JSON.stringify(studentDetails));

console.log(localStorage.getItem('details'));
console.log(localStorage.getItem('studentDetails'));
