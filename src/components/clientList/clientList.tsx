
import React, { useState } from "react";
import CardClient from "../cardClient/cardClient";
import DeleteModal from "../modals/deleteModal";
import CreateClientModal from "../modals/createModal";
import  styles from "./clientList.module.css";

const ClientList: React.FC = () => {

    const [clients, setClients] = useState([
        { name: "João Silva", salary: 4000, companyValue: 900000 },
        { name: "Maria Santos", salary: 4500, companyValue: 1200000 },
        { name: "Carlos Oliveira", salary: 3800, companyValue: 750000 },
        { name: "Carlos Oliveira", salary: 3800, companyValue: 750000 },
      ])

  const [selectedClient, setSelectedClient] = useState<string | null>(null)
  const [isCreateModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [newClient, setNewClient] = useState({ name: "", salary: 0, companyValue: 0 });

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

  const handleOpenCreateModal = () => setCreateModalOpen(true);
  const handleCloseCreateModal = () => setCreateModalOpen(false);

  const handleCreateClient = () => {
    setClients([...clients, newClient]);
    setCreateModalOpen(false);
    setNewClient({ name: "", salary: 0, companyValue: 0 });
  };


  const handleSelect = (name: string) => {
    alert(`Cliente ${name} selecionado!`);
  };

  const handleEdit = (name: string) => {
    alert(`Editar cliente: ${name}`);
  };

  return (
    <div className=" clientList container mt-5 ">
      <h5 className="mb-4 fw-normal"><strong>{clients.length} </strong>clientes encontrados:</h5>
      <div className="row">
        {clients.map((client, index) => (
          <div key={index} className="col-md-3 ">
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
      <div className="d-flex justify-content-center w-100 mt-5">
        <button className={`btn btn-none w-100 ${styles.buttonColor}`} onClick={handleOpenCreateModal}>
          Criar Cliente
        </button>
      </div>
      {isModalOpen && selectedClient && (
        <DeleteModal
          clientName={selectedClient}
          onClose={handleCloseModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      {isCreateModalOpen && (
        <CreateClientModal onClose={handleCloseCreateModal} onCreate={handleCreateClient} />
      )}
    </div>
  );
};

export default ClientList;
