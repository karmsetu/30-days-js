import { log } from 'console';

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

const newEmptySet = new Set();
log(newEmptySet);

for (let i = 0; i < 10; i++) {
    newEmptySet.add(i);
}
console.log(newEmptySet);

// removing no 8
newEmptySet.delete(8);

log(newEmptySet);

const countryMap = new Map<string, number>();
countries.forEach((country) => countryMap.set(country, country.length));

log(countryMap);

// ? Level2
const aUnionB = new Set([...a, ...b]);
console.log(aUnionB);

log(new Set(a.filter((num) => b.includes(num))));

// ? Level 3
