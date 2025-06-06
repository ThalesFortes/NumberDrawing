const inputs = document.querySelectorAll('input[id]');

export const formActiveStyles = (input) => {
  const inputs = input
  inputs.forEach(input => {
    console.log(input)
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

export const styleLabels = () => {
  formActiveStyles(inputs)
}