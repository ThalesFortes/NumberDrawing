const form = document.getElementById("generateNumber")

const getTheValues = () =>{
  const quantity = Number(form.elements["quantity"].value);
  const min = Number(form.elements["initial-value"].value);
  const max = Number(form.elements["final-value"].value);
  const checked = form.elements["repeatButton"].checked;
  return {quantity, min , max, checked}
}


export function generateNumberRandom(values){
  const range = values.max - values.min + 1

  if (values.checked && values.quantity > range){
    throw new Error("Intervalo pequeno demais para gerar valors únicos.")
  }

  if(!values.checked){
    const result = []
    console.log("Repetindo")
    while(result.length < values.quantity){
      const array = new Uint32Array(1)
      crypto.getRandomValues(array)
      const number = values.min + (array[0] % range)
      result.push(number);
    }
    return result
  } else {
    const result = new Set() 
    console.log("Numeros Unicos")
    while(result.size < values.quantity){
      const array = new Uint32Array(1)
      crypto.getRandomValues(array)
      const number = values.min + (array[0] % range)
      result.add(number)
    }
      return Array.from(result);
  }
}





form.addEventListener("submit", (event) =>{
  event.preventDefault()
  const values = getTheValues()
  console.log(values)

  const resultado = generateNumberRandom(values)
  console.log(resultado)
})









  /*if (!values.checked || values.quantity > range){
    throw new Error("Intervalo pequeno demais para gerar valors únicos.")
  }*/

  // Estrutura que não aceita valores repetidos





    /*const array = new Uint32Array(1) // Cria array com 1 número de 32 bits
    crypto.getRandomValues(array) // Prenche array com um número aleatório seguro
    const number = values.min +(array[0] % range)
    // % intervalo pega o resto da divisão e garante que o número fique dentro do intervalo permitido. Depois somar min para ele nunca ficar abaixo do menor valor.*/