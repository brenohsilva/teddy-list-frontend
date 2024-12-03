// src/components/CreateClientModal.tsx
import React, { useState } from "react";

interface CreateClientModalProps {
  onClose: () => void;
  onCreate: (client: { name: string; salary: number; companyValue: number }) => void;
}

const CreateClientModal: React.FC<CreateClientModalProps> = ({ onClose, onCreate }) => {
  const [newClient, setNewClient] = useState({ name: "", salary: 0, companyValue: 0 });

  const handleInputChange = (field: string, value: string | number) => {
    setNewClient({ ...newClient, [field]: value });
  };

  const handleCreate = () => {
    if (newClient.name.trim() && newClient.salary > 0 && newClient.companyValue > 0) {
      onCreate(newClient);
      setNewClient({ name: "", salary: 0, companyValue: 0 });
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  };

  return (
    <div
      className="modal show d-block"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro para overlay
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between m-3 mb-1">
            <h5 className="modal-title">Criar Cliente:</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome"
                value={newClient.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Digite o Salário"
                value={newClient.salary}
                onChange={(e) => handleInputChange("salary", Number(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="Digite o valor da Empresa"
                value={newClient.companyValue}
                onChange={(e) => handleInputChange("companyValue", Number(e.target.value))}
              />
            </div>
          </div>
          <div className="m-3">
            <button className="btn btn-success w-100" onClick={handleCreate}>
              Criar Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClientModal;
