import { useState } from "react";
import Modal from "../../components/modal/index";
import Input from "../input/index";
import AddPeriod from "../addPeriod/index";
import GuestEntity from "../../domain/GuestEntity";
import PeriodValueObject from "../../domain/PeriodValueObject";

function AddGuest({ onAccept, onCancel, isVisible }) {
  const [name, setName] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  const acceptHandler = () => {
    const period = new PeriodValueObject({ from, to });
    const guest = new GuestEntity({ name, period });

    onAccept(guest);
  };
  return (
    <Modal isVisible={isVisible}>
      <h2>Añadir huésped</h2>
      <Input label="Nombre" onChange={setName} />
      <AddPeriod label="Desde: " onChange={setFrom} />
      <AddPeriod label="Hasta: " onChange={setTo} />
      <button onClick={acceptHandler}>Aceptar</button>
      <button onClick={onCancel}>Cancelar</button>
    </Modal>
  );
}

export default AddGuest;
