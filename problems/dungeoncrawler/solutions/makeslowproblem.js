const count = 500;
// 500 takes my not super optimized JS solution ~6 seconds.

console.log(count);
const toGet = [];
for (var i = 0; i < count; i++) {
  toGet.push(i);
}
console.log(toGet.join(' '));
for (var i = 0; i < count; i++) {
  const deps = [];
  for (j = i + 1; j < count; j++) {
    deps.push(j);
  }

  console.log(`${i} ${i} ${deps.length} ${deps.join(' ')}`);
}
