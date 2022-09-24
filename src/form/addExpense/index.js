import { useState } from "react";
import Input from "../input";
import AddPeriod from "../addPeriod";
import PeriodValueObject from "../../domain/PeriodValueObject";
import ExpenseEntity from "../../domain/ExpensesEntity";
import Modal from "../../components/modal/index";

function AddExpense({ onAccept, onCancel, isVisible }) {
  const [name, setName] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [ammount, setAmmount] = useState();

  const onClick = () => {
    //TODO: Validar datos

    const period = new PeriodValueObject({ name, from, to });
    const expense = new ExpenseEntity({ name, period, ammount });
    onAccept(expense);
  };

  return (
    <Modal isVisible={isVisible}>
      <Input onChange={setName} label="Nombre: " />
      <Input onChange={setAmmount} label="Cantidad: " />
      <AddPeriod label="Desde: " onChange={setFrom} />
      <AddPeriod label="Hasta: " onChange={setTo} />
      <button onClick={onClick}>Aceptar</button>
      <button onClick={onCancel}>Cancelar</button>
    </Modal>
  );
}

export default AddExpense;
