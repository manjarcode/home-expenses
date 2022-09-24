import { useState } from "react";

function useModal() {
  const [isVisible, setIsVisible] = useState();

  const open = () => {
    setIsVisible(true);
  };

  const close = () => {
    setIsVisible(false);
  };

  return { isVisible, open, close };
}

export default useModal;
