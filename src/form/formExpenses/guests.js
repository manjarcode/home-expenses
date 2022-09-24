import { useState } from "react";
import AddGuest from "../addGuest";
import useModal from "./useModal";
import Guest from "../../components/guest/index";

function Guests({ onChange }) {
  const [guests, setGuests] = useState([]);
  const { isVisible, open, close } = useModal();

  const onAccept = (guest) => {
    const current = [...guests, guest];
    setGuests(current);
    onChange(current);
    close();
  };

  return (
    <div>
      {guests.map((guest) => (
        <Guest {...guest} />
      ))}
      <button onClick={open}>Añadir huésped</button>
      <AddGuest isVisible={isVisible} onAccept={onAccept} onCancel={close} />
    </div>
  );
}
export default Guests;
