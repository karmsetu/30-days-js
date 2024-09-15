import { log } from 'console';

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
};
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16,
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22,
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25,
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26,
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18,
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20,
    },
];

//1.
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const [fin, est, sw, den, nor] = countries;
log(fin, est, sw, den, nor);

const { area, height, perimeter, width } = rectangle;
log(area, height, perimeter, width);

// Level 2
users.forEach((user) => {
    const { name, scores, skills, age } = user;
    log(`${name}:${{ scores, skills, age }}`);
});

log(users.filter((user) => user.skills.length < 2));

// Level 3
