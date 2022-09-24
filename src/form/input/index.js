import "./index.scss";

function Input({ label, onChange, ...props }) {
  const onInputChange = (ev) => {
    onChange(ev.target.value);
  };
  return (
    <>
      {label && <label className="Input-label">{label}</label>}
      <input
        className="Input-input"
        onChange={onInputChange}
        {...props}
      ></input>
    </>
  );
}

export default Input;
