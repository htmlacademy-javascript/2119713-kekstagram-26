function randomInteger(min, max) {
  //случайное целое от min до (max+1), так как в Math.random max не включительно
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console(randomInteger(1, 3));
