import React, { useState, useEffect } from "react";
import CardClient from "../cardClient/cardClient";
import DeleteModal from "../modals/deleteModal";
import CreateClientModal from "../modals/createModal";
import EditClientModal from "../modals/editClientModal";
import {
  Client,
  createClient,
  deleteClient,
  getClients,
  updateClient,
} from "../../api/clientService";
import { useSelectedClients } from "../context/SelectedClientContext";

const ClientList: React.FC = () => {
  const [clientList, setClientList] = useState<Client[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [clientsPerPage, setClientsPerPage] = useState<number>(16);
  const totalPages = Math.ceil(clientList.length / clientsPerPage);

  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const { selectedClients, addClient, removeClient } = useSelectedClients();
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [newClient, setNewClient] = useState<Omit<Client, "id">>({
    firstName: "",
    salary: "",
    companyValue: "",
  });

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clients = await getClients();
        setClientList(clients);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    fetchClients();
  }, []);

  const handleOpenDeleteModal = (client: Client) => {
    setSelectedClient(client);
    setModalDeleteIsOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedClient(null);
    setModalDeleteIsOpen(false);
  };

  const handleConfirmDelete = async () => {
    if (selectedClient) {
      try {
        await deleteClient(selectedClient.id);
        setClientList(
          clientList.filter((client) => client.id !== selectedClient.id)
        );
        handleCloseDeleteModal();
      } catch (error) {
        console.error("Erro ao excluir cliente:", error);
      }
    }
  };

  const handleOpenCreateModal = () => setModalCreateIsOpen(true);
  const handleCloseCreateModal = () => setModalCreateIsOpen(false);

  const handleCreateClient = async () => {
    try {
      const createdClient = await createClient(newClient);
      setClientList([...clientList, createdClient]);
      setNewClient({ firstName: "", salary: "", companyValue: "" });
      handleCloseCreateModal();
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  };

  const handleOpenEditModal = (client: Client) => {
    setSelectedClient(client);
    setModalEditIsOpen(true);
  };

  const handleCloseEditModal = () => {
    setSelectedClient(null);
    setModalEditIsOpen(false);
  };

  const handleUpdateClient = async (updatedClient: Client) => {
    try {
      const client = await updateClient(updatedClient.id, updatedClient);
      setClientList(clientList.map((c) => (c.id === client.id ? client : c)));
      handleCloseEditModal();
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
    }
  };

  const handleSelectClient = (client: Client) => {
    if (selectedClients.find((c) => c.id === client.id)) {
      removeClient(client.id);
    } else {
      addClient(client);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`btn ${
            i === currentPage ? "button-pagination-active" : "button-pagination"
          } mx-1`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = clientList.slice(indexOfFirstClient, indexOfLastClient);

  const handleClientsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClientsPerPage(Number(event.target.value));
    setCurrentPage(1); 
  };

  return (
    <div className="clientList container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-4 fw-normal">
          <strong>{clientList.length} </strong>clientes encontrados:
        </h5>
        <div>
          <label htmlFor="clientsPerPage" className="me-2">
            Clientes por página:
          </label>
          <select
            id="clientsPerPage"
            value={clientsPerPage}
            onChange={handleClientsPerPageChange}
            className="form-select"
            style={{ width: "auto", display: "inline-block" }}
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
            <option value={24}>24</option>
          </select>
        </div>
      </div>
      <div className="row">
        {currentClients.map((client) => (
          <div key={client.id} className="col-md-5 col-lg-3">
            <CardClient
              name={client.firstName}
              salary={client.salary}
              companyValue={client.companyValue}
              onEdit={() => handleOpenEditModal(client)}
              onDelete={() => handleOpenDeleteModal(client)}
              isSelected={selectedClients.some((c) => c.id === client.id)}
              onSelect={() => handleSelectClient(client)}
            />
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center w-100 mt-5">
        <button
          className="btn btn-none w-100 button-primary-color"
          onClick={handleOpenCreateModal}
        >
          Criar Cliente
        </button>
      </div>
      <div className="d-flex justify-content-center my-4">
        {renderPagination()}
      </div>
      {modalDeleteIsOpen && selectedClient && (
        <DeleteModal
          clientName={selectedClient.firstName}
          onClose={handleCloseDeleteModal}
          onConfirm={handleConfirmDelete}
        />
      )}
      {modalCreateIsOpen && (
        <CreateClientModal
          onClose={handleCloseCreateModal}
          onCreate={handleCreateClient}
          newClient={newClient}
          setNewClient={setNewClient}
        />
      )}
      {modalEditIsOpen && selectedClient && (
        <EditClientModal
          client={selectedClient}
          onClose={handleCloseEditModal}
          onUpdate={handleUpdateClient}
        />
      )}
    </div>
  );
};

export default ClientList;
