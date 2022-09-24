import Period from "./period";

function Expense({ name, period }) {
  return (
    <div>
      <div>{name}</div>
      <Period {...period} />
    </div>
  );
}

export default Expense;
