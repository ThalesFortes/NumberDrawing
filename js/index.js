import {initialPrograming} from "./main.js"
import {getTheValues , generateNumberRandom} from "./randoming.js"
import { generateResult , repeatFunction} from "./randomResult.js"
import {toggleChangeRepeat} from "./inputs.js"

initialPrograming()

const form = document.getElementById("generateNumber")
let guarda = ""
let count = 0


form.addEventListener("submit", (event) =>{
  event.preventDefault()
  const value = getTheValues(form)
  guarda = value
  const numbers = generateNumberRandom(value)

  count = generateResult(numbers, count)
  
 
})

repeatFunction(() =>{
  const newResult = generateNumberRandom(guarda)
  count = generateResult(newResult, count)
})

toggleChangeRepeat()


/*      <div class="texts">
        <h2 class="subtitle">resultado do sorteio</h2>
        <p class="randomInfo center" id="resultText">1 RESULTADO</p>
      </div>
      <div class="result">
        <div class="result-number">
          <div class="circle-bg animation-box"></div>
          <span class="number animation-number">23</span>
        </div>
        <div class="result-number">
          <div class="circle-bg animation-box"></div>
          <span class="number animation-number">12</span>
        </div>    
      </div>
 */     



const resultText = document.getElementById("resultText")
const number = document.getElementsByClassName("number")


