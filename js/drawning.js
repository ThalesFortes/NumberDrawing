const form = document.getElementById("generateNumber")

const getTheValues = () =>{
  const quantity = form.elements["quantity"].value;
  const min = form.elements["initial-value"].value
  const max = form.elements["final-value"].value

  return {quantity, min , max}
}

const values = getTheValues()

const MyParametersNumber = {
  quantitys: values.quantity,
  minValue: values.min,
  maxValue: values.max,
  
}

console.log(MyParametersNumber)
