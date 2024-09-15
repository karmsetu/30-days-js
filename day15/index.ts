import { log } from 'console';

class Animal {
    name = '';
    legs = 4;
    color;
    age;
    constructor(color: string, age: number) {
        this.color = color;
        this.age = age;
    }
    greet = () => {
        return '*Animal noises*';
    };
}

class Dog extends Animal {
    name = 'dog';
    constructor(color: string, age: number) {
        super(color, age);
    }
    greet = () => {
        return '*Woof Woof*';
    };
}
log(new Dog('brown', 12).greet());

class Cat extends Animal {
    constructor(color: string, age: number) {
        super(color, age);
    }
    name = 'cat';
    greet = () => {
        return '*Meow*';
    };
}
log(new Cat('black', 12).greet());

class Statistics {
    data: number[];
    length: number;
    constructor(data: Array<number>) {
        this.data = data;
        this.length = data.length;
    }

    //central tendency
    mean = (): number => this.sum() / this.data.length;

    median = (): number[] => {
        const newData = this.data.sort();
        if (this.length % 2 === 0)
            return [newData[this.length / 2], newData[this.length / 2 + 1]];
        return [newData[this.length / 2 - 0.5]];
    };

    mode = () => {
        const frequencyCounts: any = {};
        let maxFrequency = 0;
        let mode = [];

        // Count the frequency of each number
        for (const number of this.data) {
            frequencyCounts[number] = (frequencyCounts[number] || 0) + 1;
            maxFrequency = Math.max(maxFrequency, frequencyCounts[number]);
        }

        // Find the numbers with the maximum frequency
        for (const number in frequencyCounts) {
            if (frequencyCounts[number] === maxFrequency) {
                mode.push(parseInt(number));
            }
        }

        return mode;
    };

    min = (): number => this.data.reduce((p, c) => Math.min(p, c));
    max = (): number => this.data.reduce((p, c) => Math.max(p, c));

    count = (): number => this.length;
    sum = (): number => this.data.reduce((p, c) => p + c);

    range = (): number => this.max() - this.min();

    std = (): number => {
        return Math.sqrt(
            this.data
                .map((num) => Number((num - this.mean()) ** 2))
                .reduce((p, c) => Number(p) + Number(c)) /
                this.length -
                1
        );
    };
}

const ages = [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
];

const statistics = new Statistics(ages);
console.log('Count:', statistics.count()); // 25
console.log('Sum: ', statistics.sum()); // 744
console.log('Min: ', statistics.min()); // 24
console.log('Max: ', statistics.max()); // 38
console.log('Range: ', statistics.range()); // 14
console.log('Mean: ', statistics.mean()); // 30
console.log('Median: ', statistics.median()); // 29
console.log('Mode: ', statistics.mode()); // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()); // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
