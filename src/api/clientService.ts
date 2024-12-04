// src/services/clientService.ts
import axios from "axios";


const API_BASE_URL = "http://localhost:3000";


export interface Client {
  id: string;
  firstName: string;
  salary: string;
  companyValue: string;
}


export const getClients = async (): Promise<Client[]> => {
  const response = await axios.get(`${API_BASE_URL}/clients`);
  return response.data;
};


export const createClient = async (client: Omit<Client, "id">): Promise<Client> => {
    console.log(client)
  const response = await axios.post(`${API_BASE_URL}/clients`, client);
  return response.data;
};


export const updateClient = async (id: string, client: Partial<Client>): Promise<Client> => {
  const response = await axios.put(`${API_BASE_URL}/clients/${id}`, client);
  return response.data;
};


export const deleteClient = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/clients/${id}`);
};
