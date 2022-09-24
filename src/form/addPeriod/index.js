import { useState, useEffect, useCallback } from "react";
import Input from "../input/index";
import "./index.scss";

function AddPeriod({ label, onChange }) {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const isNumeric = useCallback((str, length) => {
    if (typeof str !== "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str)) && str.length === length;
  }, []);

  useEffect(() => {
    const isValid =
      isNumeric(day, 2) && isNumeric(month, 2) && isNumeric(year, 4);

    if (isValid) {
      const date = new Date(parseInt(year), parseInt(month - 1), parseInt(day));
      onChange(date);
    }
  }, [day, month, year, isNumeric, onChange]);

  const onChangeHandler = ({ day, month, year }) => {
    day && setDay(day);
    month && setMonth(month);
    year && setYear(year);
  };

  return (
    <div className="AddPeriod">
      <Input
        label={label}
        onChange={(value) => onChangeHandler({ day: value })}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={(value) => onChangeHandler({ month: value })}
        size="2"
        maxLength="2"
      />
      <Input
        onChange={(value) => onChangeHandler({ year: value })}
        size="4"
        maxLength="4"
      />
    </div>
  );
}

export default AddPeriod;
