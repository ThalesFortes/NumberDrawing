export const getTheValues = (formValues) => {
  const quantity = Number(formValues.elements["quantity"].value);
  const min = Number(formValues.elements["initial-value"].value);
  const max = Number(formValues.elements["final-value"].value);
  const checked = formValues.elements["repeatButton"].checked;
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
      const array = new Uint32Array(1) // Cria array com 1 número de 32 bits
      crypto.getRandomValues(array)    // Prenche array com um número aleatório seguro
      const number = values.min + (array[0] % range)    /* % intervalo pega resto da divisão e garante que fique dentro do intervalo permitido. Depois soma para nunca ficar abaixo do menor valor */
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
