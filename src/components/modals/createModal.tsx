import React from "react";

interface CreateClientModalProps {
  onClose: () => void;
  onCreate: () => void;
  newClient: { firstName: string; salary: string; companyValue: string };
  setNewClient: (client: { firstName: string; salary: string; companyValue: string }) => void;
}

const CreateClientModal: React.FC<CreateClientModalProps> = ({
  onClose,
  onCreate,
  newClient,
  setNewClient,
}) => {
  // Função para formatar como moeda
  const formatToCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, ""); // Remove tudo que não for número
    const formattedValue = (Number(numericValue) / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return formattedValue;
  };

  const handleInputChange = (field: string, value: string) => {
    if (field === "salary" || field === "companyValue") {
      setNewClient({ ...newClient, [field]: formatToCurrency(value) }); // Formata o valor
    } else {
      setNewClient({ ...newClient, [field]: value });
    }
  };

  const handleCreate = () => {
    const { firstName, salary, companyValue } = newClient;

    if (!firstName.trim() || !salary.trim() || !companyValue.trim()) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    onCreate();
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
            <h5 className="modal-title fw-bold">Criar Cliente:</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o nome:"
                value={newClient.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o Salário:"
                value={newClient.salary}
                onChange={(e) => handleInputChange("salary", e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Digite o valor da Empresa:"
                value={newClient.companyValue}
                onChange={(e) => handleInputChange("companyValue", e.target.value)}
              />
            </div>
          </div>
          <div className="m-3">
            <button className="btn button-action w-100" onClick={handleCreate}>
              Criar Cliente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClientModal;
