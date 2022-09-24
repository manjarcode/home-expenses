import { useState } from "react";
import AddExpense from "../addExpense";
import useModal from "./useModal";
import Expense from "../../components/Expense";

function Expenses({ onChange }) {
  const [expenses, setExpenses] = useState([]);

  const { isVisible, open, close } = useModal();

  const onAccept = (period) => {
    setExpenses((value) => {
      const current = [...value, period];
      onChange(current);
      return current;
    });
    close();
  };

  const onAddClick = () => {
    open();
  };

  return (
    <div>
      {expenses.map((expense) => (
        <Expense {...expense} s />
      ))}
      <button onClick={onAddClick}>Añadir Gasto</button>
      <AddExpense onAccept={onAccept} onCancel={close} isVisible={isVisible} />
    </div>
  );
}

export default Expenses;
