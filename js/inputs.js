const checkedInput = document.getElementById("repeatButton")

export const entryOnlyNumbers = (inputsEntry) =>{
  inputsEntry.addEventListener("input", () => {
     inputsEntry.value = inputsEntry.value.replace(/\D/g,"")
  })
}

export const formActiveStyles = (input) => {
  const inputs = input
  inputs.forEach(input => {
    const id = input.id;
    const label = document.querySelector(`label[for="${id}"]`);

    if (label) {
      input.addEventListener('focus', () => {
        label.classList.add('active');
      });

      input.addEventListener('blur', () => {
        label.classList.remove('active');
      });
    }
  });
};

export function toggleChangeRepeat () {
  checkedInput.addEventListener("change",() => {
    if (checkedInput.checked) {
      checkedInput.style.backgroundImage = 'url(../assets/stateActive.svg)';
    } else {
      checkedInput.style.backgroundImage = 'url(../assets/stateDefault.svg)';
    }
  })
}