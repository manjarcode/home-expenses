import Period from "../period";
import "./index.scss";

function Guest({ name, period }) {
  return (
    <div className="Guest">
      <div>{name}</div>
      <Period {...period} />
    </div>
  );
}

export default Guest;
