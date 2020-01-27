import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  var elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  useEffect(function initModal() {
    var modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return function cleanupModal() {
      return modalRoot.removeChild(elRef.current);
    };
  }, []); // only run once - no state dependancies

  return createPortal(<div>{children}</div>, elRef.current);
}

export default Modal;
