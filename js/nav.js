const navigation = document.getElementById("navbar") 
const sectionInputs = document.getElementById("randoming")
const sectionResult = document.getElementById("randomResult")

export function ToggleHomePage (){
  sectionResult.classList.add("display-none")
  sectionInputs.classList.remove("display-none")
}



export function activeToggleHomePage () {
  navigation.addEventListener("click", () =>{
    ToggleHomePage()
  })
}