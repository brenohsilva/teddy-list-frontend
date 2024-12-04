// src/components/DeleteModal.tsx
import React from "react";

interface DeleteModalProps {
  clientName: string;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ clientName, onClose, onConfirm }) => {
  return (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between p-2 m-2">
            <h5 className="modal-title fw-bold">Excluir Cliente:</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="mx-3 m-0 p-0">
            <p className="fs-5">Você está prestes a excluir o cliente: <strong>{clientName}</strong>.</p>
          </div>
          <div className="d-flex justify-content-between mx-3 my-2">

            <button className="btn buttonAction w-100" onClick={onConfirm}>
              Excluir cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
