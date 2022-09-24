import Expenses from "./expenses";
import Guests from "./guests";

function FormExpenses() {
  return (
    <div>
      <Expenses
        onChange={(dto) => {
          console.log(dto);
        }}
      />
      <Guests
        onChange={(dto) => {
          console.log(dto);
        }}
      />
    </div>
  );
}

export default FormExpenses;
