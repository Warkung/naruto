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

interface CharIdType{
  data:CharIdData
  status:number
}

export interface CharIdData {
  id: number
  name: string
  images: string[]
  debut: Debut
  family: Family
  jutsu: string[]
  natureType: string[]
  personal: Personal
  uniqueTraits: string[]
}

export interface Debut {
  manga: string
  anime: string
  novel: string
  movie: string
  game: string
  ova: string
  appearsIn: string
}

export interface Family {
  "incarnation with the god tree": string
  "depowered form": string
}

export interface Personal {
  status: string
  kekkeiGenkai: string
  classification: string
  jinchūriki: string[]
  titles: string[]
}


export const serviceCharById = async (id: number):Promise<CharIdType> => {
  const respose = await axios.get(`${NARUTO_BASE_URL}/characters/${id}`);
  return respose;
};
