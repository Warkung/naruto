import axios from "axios";
import { NARUTO_BASE_URL } from "../Utils/BaseURL";

export interface CharactersType {
  data: CharactersData;
  status: number;
}

export interface CharactersData {
  characters: Characters[];
}
export interface Characters {
  name: string;
  id: number;
  images: string[];
}

export const serviceChar = async (limit?: number): Promise<CharactersType> => {
  const respose = await axios.get(
    `${NARUTO_BASE_URL}/characters?limit=${limit || 60}`
  );
  return respose;
};
