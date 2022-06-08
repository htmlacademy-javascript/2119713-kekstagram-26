function randomInteger(min, max) {
  /*случайное целое от min до (max+1), так как в Math.random max не включительно*/
  const randNum = min + Math.random() * (max + 1 - min);
  /*
  если использовать Math.round() для округления, то это может сделать распределение неравномерным
  Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
  */
  if (max < 0 || min < 0){
    return ('Ошибка: диапазон может быть только положительный');
  }
  if (max <= min){
    return ('Ошибка: значение ДО не может быть меньше ОТ');
  }
  return Math.floor(randNum);
}
/*число от 1  ... до 1.9999999999  округлится до 1
число от 4  ... до 4.9999999999  округлится до 4
все интервалы имеют одинаковую длину, что выравнивает вероятность получения случайных чисел
*/
randomInteger(1.9999999999, 4.9999999999);


function randomIntegerNoRandom(min, max, random) {
  /*случайное целое от min до (max+1), так как в Math.random max не включительно*/
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = min + random * (max + 1 - min);
  /*
  если использовать Math.round() для округления, то это может сделать распределение неравномерным
  Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
  */
  if (max < 0 || min < 0){
    return ('Ошибка: диапазон может быть только положительный');
  }
  if (max <= min){
    return ('Ошибка: значение ДО не может быть меньше ОТ');
  }
  return Math.floor(randNum);
}

function test() {
  console.log(randomIntegerNoRandom(1.99, 4.99, 0));
  console.log(randomIntegerNoRandom(1.99, 4.99, 1));
}

function checkMaxLength(string, maxLength) {
  if (string.length > maxLength) {
    return false;
  }
  return true;
}

checkMaxLength('Комментарий', 140);
