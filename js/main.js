import { ToggleHomePage } from "./nav.js";
import { formActiveStyles } from "./inputs.js";

const form = document.getElementById("generateNumber")
const inputs = document.querySelectorAll('input[id]');

export function initialPrograming () {
  window.onload = () => {
    ToggleHomePage()
    formActiveStyles(inputs)
  }
}