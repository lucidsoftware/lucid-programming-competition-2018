const count = 500;
// 500 takes ~1 second, 1000 is probably too big.

function intToAZ(num) {
    return `${num}`
    .split('')
    .map(c => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'][+c])
    .join('');
}

console.log(count);
const toGet = [];
for (var i = 0; i < count; i++) {
  toGet.push(intToAZ(i));
}
console.log(toGet.join(' '));
for (var i = 0; i < count; i++) {
  const deps = [];
  for (j = i + 1; j < count; j++) {
    deps.push(intToAZ(j));
  }

  console.log(`${intToAZ(i)} ${intToAZ(i)} ${deps.length} ${deps.join(' ')}`);
}
