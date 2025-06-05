const navigation = document.getElementById("navbar") 
const sectionInputs = document.getElementById("drawning")
const sectionResult = document.getElementById("drawnResult")

export function ToggleHomePage (){
  sectionResult.classList.add("display-none")
  sectionInputs.classList.remove("display-none")
}

navigation.addEventListener("click", () =>{
  ToggleHomePage()
})

