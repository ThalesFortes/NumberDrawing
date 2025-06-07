import { ToggleHomePage } from "./nav.js";
import { formActiveStyles, toggleChangeRepeat, entryOnlyNumbers  } from "./inputs.js";
import { repeatFunction, generateResult } from "./randomResult.js";
import {getTheValues , generateNumberRandom} from "./randoming.js"

const form = document.getElementById("generateNumber")
const inputs = document.querySelectorAll('input[id]');
const inputsEntry = document.getElementById('quantity');

let inputValues = ""
let count = 0

export function initialPrograming () {
    entryOnlyNumbers(inputsEntry)
    ToggleHomePage()
    formActiveStyles(inputs)
    toggleChangeRepeat()
    repeatFunction(async () => {
      const newResult = generateNumberRandom(inputValues);
      count = generateResult(newResult, count);
      let totalDelay = newResult.length * 1500 + 1500; 
      console.log(totalDelay)
      await new Promise(resolve => setTimeout(resolve, totalDelay));
    })
}


export const formSubmitFunction = () =>{
  form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const value = getTheValues(form)
    inputValues = value
    const numbers = generateNumberRandom(value)
    count = generateResult(numbers, count)
  })
}


      



  // Simula uma demora de 1 segundo para testar (pode remover depois)
