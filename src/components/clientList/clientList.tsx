
import React, { useState } from "react";
import CardClient from "../cardClient/cardClient";
import DeleteModal from "../modals/deleteModal";


const ClientList: React.FC = () => {

  const clients = [
    { name: "João Silva", salary: 4000, companyValue: 900000 },
    { name: "Maria Santos", salary: 4500, companyValue: 1200000 },
    { name: "Carlos Oliveira", salary: 3800, companyValue: 750000 },
  ];

  const [selectedClient, setSelectedClient] = useState<string | null>(null)
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const handleDeleteClick = (name: string) => {
    setSelectedClient(name);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedClient(null);
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    alert(`Cliente ${selectedClient} excluído!`);
    handleCloseModal();
  };


  const handleSelect = (name: string) => {
    alert(`Cliente ${name} selecionado!`);
  };

  const handleEdit = (name: string) => {
    alert(`Editar cliente: ${name}`);
  };


  return (
    <div className="container mt-5">
      <h2 className="mb-4">Lista de Clientes</h2>
      <div className="row">
        {clients.map((client, index) => (
          <div key={index} className="col-md-4">
            <CardClient
              name={client.name}
              salary={client.salary}
              companyValue={client.companyValue}
              onSelect={() => handleSelect(client.name)}
              onEdit={() => handleEdit(client.name)}
              onDelete={() => handleDeleteClick(client.name)}
            />
          </div>
        ))}
      </div>
      {isModalOpen && selectedClient && (
        <DeleteModal
          clientName={selectedClient}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
};

export default ClientList;
