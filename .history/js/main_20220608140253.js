function randomInteger(min, max) {
  if (min < 0){
    return ('Ошибка: диапазон может быть только положительный');
  }
  if (max <= min){
    return ('Ошибка: значение ДО не может быть меньше ОТ');
  }
  /*случайное целое от min до (max+1), так как в Math.random max не включительно*/
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = min + Math.random() * (max + 1 - min);
  /*
  если использовать Math.round() для округления, то это может сделать распределение неравномерным
  Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
  */
  return Math.floor(randNum);
}
/*число от 1  ... до 1.9999999999  округлится до 1
число от 4  ... до 4.9999999999  округлится до 4
все интервалы имеют одинаковую длину, что выравнивает вероятность получения случайных чисел
*/
randomInteger(1.9999999999, 4.9999999999);

function checkMaxLength(string, maxLength) {
  if (string === null || string.length <= maxLength) {
    return true;
  }
  return false;
}

checkMaxLength('Комментарий', 140);
