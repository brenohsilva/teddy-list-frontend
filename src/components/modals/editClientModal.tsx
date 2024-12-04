// src/components/EditClientModal.tsx
import React, { useState } from "react";

interface EditClientModalProps {
  client: { id: string; firstName: string; salary: string; companyValue: string }; 
  onClose: () => void; 
  onUpdate: (updatedClient: { id: string; firstName: string; salary: string; companyValue: string }) => void; 
}

const EditClientModal: React.FC<EditClientModalProps> = ({ client, onClose, onUpdate }) => {
  const [updatedClient, setUpdatedClient] = useState(client);

  const handleInputChange = (field: string, value: string | number) => {
    setUpdatedClient({ ...updatedClient, [field]: value });
  };

  const handleUpdate = () => {
    if (updatedClient.firstName.trim() && updatedClient.salary && updatedClient.companyValue) {
      onUpdate(updatedClient); 
      onClose(); 
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <div
      className="modal show d-block"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between m-3 mb-1">
            <h5 className="modal-title fw-bold">Editar Cliente:</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome:"
                value={updatedClient.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o Salário:"
                value={updatedClient.salary}
                onChange={(e) => handleInputChange("salary", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o valor da Empresa:"
                value={updatedClient.companyValue}
                onChange={(e) => handleInputChange("companyValue", e.target.value)}
              />
            </div>
          </div>
          <div className="m-3">
            <button className="btn buttonAction w-100" onClick={handleUpdate}>
              Editar Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditClientModal;
