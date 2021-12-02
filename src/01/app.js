import fs from 'fs';

const input = fs.readFileSync('./input.txt').toString();

let count = 0, last;
input.trim().split('\n').forEach((line, i ) => {
    const num = Number(line);
    if (i !== 0) {
        count += last < num;
    }
    last = num;
});

console.log(count);
