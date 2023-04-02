const number = document.getElementById("number");
let result = document.getElementById("result");
const calcButton = document.getElementById("calcButton");
const showResult = (n) => {
  return n ** 2;
};
calcButton.addEventListener("click", () => {
  const newResult = showResult(parseInt(number.value));
  result.value = newResult;
});
