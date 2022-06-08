function randomInteger(min, max) {
  //случайное целое от min до (max+1), так как в Math.random max не включительно
  let rand = min + Math.random() * (max + 1 - min);
  //если использовать Math.round() для округления, то это может сделать распределение неравномерным
  return Math.floor(rand);
}
randomInteger(1, 4);

