import fs from 'fs';

const input = fs.readFileSync('./input.txt').toString();

let count = 0, last;
const lines = input.trim().split('\n');

for (let i = 0; i < lines.length - 2; i++) {
    const sum = Number(lines[i]) + Number(lines[i + 1]) + Number(lines[i + 2]);
    if (i !== 0) {
        count += sum > last;
    }
    last = sum;
}

console.log(count);
