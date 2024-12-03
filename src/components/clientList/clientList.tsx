
import React from "react";
import CardClient from "../cardClient/cardClient";


const ClientList: React.FC = () => {

  const clients = [
    { name: "João Silva", salary: 4000, companyValue: 900000 },
    { name: "Maria Santos", salary: 4500, companyValue: 1200000 },
    { name: "Carlos Oliveira", salary: 3800, companyValue: 750000 },
  ];


  const handleSelect = (name: string) => {
    alert(`Cliente ${name} selecionado!`);
  };

  const handleEdit = (name: string) => {
    alert(`Editar cliente: ${name}`);
  };

  const handleDelete = (name: string) => {
    alert(`Excluir cliente: ${name}`);
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
              onDelete={() => handleDelete(client.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
