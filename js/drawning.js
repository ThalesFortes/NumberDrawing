const form = document.getElementById("generateNumber")

const getTheValues = () =>{
  const quantity = Number(form.elements["quantity"].value);
  const min = Number(form.elements["initial-value"].value);
  const max = Number(form.elements["final-value"].value);
  const checked = Number(form.elements["repeatButton"].checked);
  return {quantity, min , max, checked}
}


export function generateNumberRandom(MyParametersNumber){
  const values = MyParametersNumber
  const range = values.max - values.min + 1

  /*if (!values.checked || values.quantity > range){
    throw new Error("Intervalo pequeno demais para gerar valors únicos.")
  }*/

  // Estrutura que não aceita valores repetidos
  const result = new Set 

  while (result.size < values.quantitys){
    const array = new Uint32Array(1) // Cria array com 1 número de 32 bits
    crypto.getRandomValues(array) // Prenche array com um número aleatório seguro
    const number = values.min +(array[0] % range)
    // % intervalo pega o resto da divisão e garante que o número fique dentro do intervalo permitido. Depois somar min para ele nunca ficar abaixo do menor valor.

    if(values.checked){
      result.add(number + Math.random());
    } else {
      result.add(number)
    }
  }

  return Array.from(result).map(n => Math.floor(n))
}




form.addEventListener("submit", (event) =>{
  event.preventDefault()
  const values = getTheValues()

const MyParametersNumber = {
  quantitys: values.quantity,
  min: values.min,
  max: values.max,
  checkedInput: values.checked,
}
  console.log(MyParametersNumber)
const resultado = generateNumberRandom(MyParametersNumber)
console.log(resultado)
})