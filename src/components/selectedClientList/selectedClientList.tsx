import React from "react";

import { useUser } from "../context/UserContext";
import Header from "../header/header";
import { useSelectedClients } from "../context/SelectedClientContext";
import SelectedClientCard from "../cardSelectedClient/cardSelectedClient";
import { Client } from "../../api/clientService";

const SelectedClientList: React.FC = () => {
  const { username } = useUser();
  const { selectedClients, removeClient, clearClients } = useSelectedClients();
  const handleSelectClient = (client: Client) => {
    if (selectedClients.find((c) => c.id === client.id)) {
      removeClient(client.id);
    } 
  };

  return (
    <div>
      <Header username={username}></Header>
      <div className="clientList container mt-5">
        <h5 className="mb-4 fw-normal">Clientes selecionados:</h5>
        <div className="row">
          {selectedClients.map((client) => (
            <div key={client.id} className="col-md-3">
              <SelectedClientCard
                name={client.firstName}
                salary={client.salary}
                companyValue={client.companyValue}
                isSelected={true}
                onRemove={() => handleSelectClient(client)}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center w-100 mt-5">
          <button
            className={`btn btn-none border border-4 w-100`}
            onClick={clearClients}
          >
            Limpar clientes selecionados
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedClientList;
