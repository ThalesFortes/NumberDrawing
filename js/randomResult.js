import {sectionInputs , sectionResult} from "./nav.js"

const divMain = document.getElementById("responses")
const reloadButton = document.getElementById("reloadButton")

export function generateResult (numbers, count) {
    divMain.innerHTML = ""
    sectionResult.classList.remove("display-none")
    sectionInputs.classList.add("display-none")
    count++
    numbers.forEach((number, index) => {
      setTimeout(() =>{   
        const div = document.createElement("div")
        div.classList.add("result-number")

        const background = document.createElement("div")
        background.classList.add("circle-bg", "animation-box")

        const span = document.createElement("span")
        span.classList.add("number", "animation-number")
        span.textContent = number

        div.append(background, span)
        divMain.appendChild(div)
      }, index * 1500)
  });

  countGeneratesResult(count) 
  return count
}


export const countGeneratesResult = (counter) => {
  const resultText = document.getElementById("resultText")
  let p = resultText.querySelector("p.randomInfo") 

  if (!p) {
    p = document.createElement("p")
    p.classList.add("randomInfo")
    resultText.appendChild(p)
  }
  p.textContent = `${counter}º Resultado`
}



export const repeatFunction = (generateNew) => {
  reloadButton.addEventListener("click", async (event) => {
    event.preventDefault();

    reloadButton.disabled = true;

    try {
      await generateNew();
    } catch (error) {
      console.error("Erro ao executar a função:", error);
    }

    reloadButton.disabled = false;
  });
};




















