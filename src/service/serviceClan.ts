import axios from "axios";
import { NARUTO_BASE_URL } from "../Utils/BaseURL";

export interface ClanType {
  data: ClanData;
  status: number;
}
export interface ClanData {
  clans: Clans[];
}
export interface Clans {
  characters: number[];
  id: number;
  name: string;
}

export const serviceClans = async (): Promise<ClanType> => {
  const response = await axios.get(`${NARUTO_BASE_URL}/clans?limit=58`);
  return response;
};

export const serviceClanByID = async (id: number) => {
  const response = await axios.get(`${NARUTO_BASE_URL}/clans/${id}`);
  return response;
};
