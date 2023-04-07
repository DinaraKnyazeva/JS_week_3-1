//выбираю элемент с id="number" (инпут где указываю число)
const number = document.getElementById("number");
//выбираю элемент с id="result" (инпут где объявляется результат)
let result = document.getElementById("result");
//выбираю элемент с id="calcButton" (кнопка рассчитать)
const calcButton = document.getElementById("calcButton");
//функция возведения в квадрат
const showResult = (n) => {
  return n ** 2;
};
//добавляю обработчик события и при нажатие на кнопку выполняются следующее:
//1) применяется функция возведения в квадрат и записывается в новой переменной
//2) элемент с id="result" возвращается с новым результатом
calcButton.addEventListener("click", () => {
  const newResult = showResult(parseInt(number.value));
  result.value = newResult;
});

//*value -значение введенному или выбранному пользователем в элементе формы (в <input>, <textarea>, <select>)
//*parseInt - это функция, которая используется для преобразования строки в целое число
