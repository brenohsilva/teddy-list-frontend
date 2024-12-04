import React, { createContext, useContext, useState, ReactNode } from "react";
import { Client } from "../../api/clientService";

interface SelectedClientsContextType {
  selectedClients: Client[];
  addClient: (client: Client) => void;
  removeClient: (clientId: string) => void;
  clearClients: () => void;
}

const SelectedClientsContext = createContext<SelectedClientsContextType | undefined>(undefined);

export const SelectedClientsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedClients, setSelectedClients] = useState<Client[]>([]);

  const addClient = (client: Client) => {
    setSelectedClients((prev) =>
      prev.find((c) => c.id === client.id) ? prev : [...prev, client]
    );
  };

  const removeClient = (clientId: string) => {
    setSelectedClients((prev) => prev.filter((client) => client.id !== clientId));
  };

  const clearClients = () => {
    setSelectedClients([]);
  };

  return (
    <SelectedClientsContext.Provider value={{ selectedClients, addClient, removeClient, clearClients }}>
      {children}
    </SelectedClientsContext.Provider>
  );
};

export const useSelectedClients = () => {
  const context = useContext(SelectedClientsContext);
  if (!context) {
    throw new Error("useSelectedClients must be used within a SelectedClientsProvider");
  }
  return context;
};
