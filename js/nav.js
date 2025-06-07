const navigation = document.getElementById("navbar") 
export const sectionInputs = document.getElementById("randoming")
export const sectionResult = document.getElementById("randomResult")

export function ToggleHomePage (){
  navigation.addEventListener("click", () => {
    sectionResult.classList.add("display-none")
    sectionInputs.classList.remove("display-none")
  })
}

