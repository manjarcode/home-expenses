import { CULTURE } from "../../config.js";
function Period({ from, to }) {
  return (
    <span>
      {from.toLocaleDateString(CULTURE)} - {to.toLocaleDateString(CULTURE)}
    </span>
  );
}

export default Period;
