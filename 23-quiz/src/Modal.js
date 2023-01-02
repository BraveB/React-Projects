import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div className={`modal-container ${isModalOpen ? "isOpen" : ""}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered of {((correct / questions.length) * 100).toFixed(0)}
          {"% "}
          questions correctly
        </p>
        <button onClick={closeModal} className="close-btn">
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
