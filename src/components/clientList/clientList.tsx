import React, { useState } from "react";
import CardClient from "../cardClient/cardClient";
import DeleteModal from "../modals/deleteModal";
import CreateClientModal from "../modals/createModal";
import EditClientModal from "../modals/editClientModal";
import styles from "./clientList.module.css";

const ClientList: React.FC = () => {
  const [clientList, setClientList] = useState([
    { id: "1", name: "João Silva", salary: "4000", companyValue: "900000" },
    { id: "2", name: "Maria Santos", salary: "4500", companyValue: "1200000" },
    { id: "3", name: "Carlos Oliveira", salary: "3800", companyValue: "750000" },
    { id: "4", name: "Carlos Oliveira", salary: "3800", companyValue: "750000" },
  ]);

  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);

  const [selectedClientName, setSelectedClientName] = useState<string | null>(null);
  const [editingClient, setEditingClient] = useState<{
    id: string;
    name: string;
    salary: string;
    companyValue: string;
  } | null>(null);

  const [newClient, setNewClient] = useState({
    name: "",
    salary: "",
    companyValue: "",
  });

  const handleOpenDeleteModal = (name: string) => {
    setSelectedClientName(name);
    setModalDeleteIsOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedClientName(null);
    setModalDeleteIsOpen(false);
  };

  const handleConfirmDelete = () => {
    setClientList(clientList.filter((client) => client.name !== selectedClientName));
    handleCloseDeleteModal();
  };

  const handleOpenCreateModal = () => setModalCreateIsOpen(true);
  const handleCloseCreateModal = () => setModalCreateIsOpen(false);

  const handleCreateClient = () => {
    setClientList([
      ...clientList,
      {
        id: String(Date.now()), // Gera um ID único
        ...newClient,
      },
    ]);
    setModalCreateIsOpen(false);
    setNewClient({ name: "", salary: "", companyValue: "" });
  };

  const handleOpenEditModal = (client: {
    id: string;
    name: string;
    salary: string;
    companyValue: string;
  }) => {
    setEditingClient(client);
    setModalEditIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setEditingClient(null);
    setModalEditIsOpen(false);
  };

  const handleUpdateClient = (updatedClient: {
    id: string;
    name: string;
    salary: string;
    companyValue: string;
  }) => {
    setClientList((prevClients) =>
      prevClients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
    handleCloseEditModal();
  };

  const handleSelectClient = (name: string) => {
    alert(`Cliente ${name} selecionado!`);
  };

  return (
    <div className="clientList container mt-5">
      <h5 className="mb-4 fw-normal">
        <strong>{clientList.length} </strong>clientes encontrados:
      </h5>
      <div className="row">
        {clientList.map((client) => (
          <div key={client.id} className="col-md-3">
            <CardClient
              name={client.name}
              salary={client.salary}
              companyValue={client.companyValue}
              onSelect={() => handleSelectClient(client.name)}
              onEdit={() => handleOpenEditModal(client)}
              onDelete={() => handleOpenDeleteModal(client.name)}
            />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center w-100 mt-5">
        <button
          className={`btn btn-none w-100 ${styles.buttonColor}`}
          onClick={handleOpenCreateModal}
        >
          Criar Cliente
        </button>
      </div>
      {modalDeleteIsOpen && selectedClientName && (
        <DeleteModal
          clientName={selectedClientName}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      {modalCreateIsOpen && (
        <CreateClientModal onClose={handleCloseCreateModal} onCreate={handleCreateClient} />
      )}
      {modalEditIsOpen && editingClient && (
        <EditClientModal
          client={editingClient}
          onClose={handleCloseEditModal}
          onUpdate={handleUpdateClient}
        />
      )}
    </div>
  );
};

export default ClientList;
