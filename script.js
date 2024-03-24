
const result = document.querySelector(".result")

const clear = document.querySelector("#clear")
clear.addEventListener("click", () => {
  result.textContent = ''
  firstNum = null
  secondNum = null
  lastOperator = ''
})

let firstNum = null;
let secondNum = null;
let lastOperator = '';
let operatorPressed = false

function operate(a, b, operation) {
  switch (operation) {
    case "+":
      const addition = (a + b)
      return Math.round(addition *10e4)/10e4
    case "-":
      const subtraction = (a - b)
      return Math.round(subtraction*10e4)/10e4
    case "×":
      const multiplication = (a * b)
      return Math.round(multiplication*10e4)/10e4
    case "÷":
      if (b === 0){
        return "Are you nuts?"
      }
      const division = (a / b)
      return Math.round(division*10e4)/10e4
  }
}

const operators = document.querySelectorAll(".operator")

const numbers = document.querySelectorAll(".number")
numbers.forEach(number => {
  number.addEventListener("click", () => {
    if (operatorPressed) {
      result.textContent = number.textContent
      operatorPressed = false
      const lastOperatorBtn = Array.from(operators).find(operator => operator.textContent === lastOperator)
      lastOperatorBtn.classList.toggle("active")
    } else {
      result.textContent += number.textContent
    }
  })
})


operators.forEach(operator => {
  operator.addEventListener("click", () => {
    if (firstNum === null) {
      firstNum = Number(result.textContent)
    } else {
      secondNum = Number(result.textContent)
      const solution = operate(firstNum, secondNum, lastOperator)
      firstNum = solution
      secondNum = null
      result.textContent = firstNum
    }

    lastOperator = operator.textContent
    operatorPressed = true
    operator.classList.toggle("active")
  })
})

const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
  secondNum = Number(result.textContent)
  const solution = operate(firstNum, secondNum, lastOperator)
  firstNum = null
  secondNum = null
  result.textContent = solution
})