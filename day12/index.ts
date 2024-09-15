import { log } from 'console';

log(
    'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
        .match(/\d+/gi)
        ?.reduce((p, c) => String(Number(p) + Number(c)))
);

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
const distance = 12;
