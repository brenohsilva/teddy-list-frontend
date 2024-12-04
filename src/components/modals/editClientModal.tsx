// src/components/EditClientModal.tsx
import React, { useState } from "react";

interface EditClientModalProps {
  client: { id: string; firstName: string; salary: string; companyValue: string };
  onClose: () => void;
  onUpdate: (updatedClient: { id: string; firstName: string; salary: string; companyValue: string }) => void;
}

const EditClientModal: React.FC<EditClientModalProps> = ({ client, onClose, onUpdate }) => {
  const [updatedClient, setUpdatedClient] = useState(client);

  const formatToCurrency = (value: string) => {
    if (!value) return ""; 
    const numericValue = value.replace(/\D/g, ""); 
    if (!numericValue) return ""; 
    const formattedValue = (Number(numericValue) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "salary" || field === "companyValue") {
      setUpdatedClient({ ...updatedClient, [field]: formatToCurrency(value) }); // Formata o valor
    } else {
      setUpdatedClient({ ...updatedClient, [field]: value });
    }
  };

  const handleUpdate = () => {
    const { firstName, salary, companyValue } = updatedClient;

    if (!firstName.trim() || !salary.trim() || !companyValue.trim()) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    onUpdate(updatedClient);
    onClose();
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
                value={updatedClient.salary || ""}
                onChange={(e) => handleInputChange("salary", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o valor da Empresa:"
                value={updatedClient.companyValue || ""}
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
