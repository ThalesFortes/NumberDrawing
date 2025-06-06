import { activeToggleHomePage } from "./nav.js";
import { styleLabels } from "./inputs.js";

export function initialPrograming () {
  window.onload = () => {
    activeToggleHomePage()
    styleLabels()
  }
}