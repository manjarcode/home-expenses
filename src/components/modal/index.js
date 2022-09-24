import "./index.scss";

function Modal({ isVisible, ...props }) {
  console.log("isVisible", isVisible);
  return (
    isVisible && (
      <>
        <div className="Modal"></div>
        <div className="Modal-modal" {...props} />
      </>
    )
  );
}

export default Modal;
