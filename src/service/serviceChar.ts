import axios from "axios";
import { NARUTO_BASE_URL } from "../Utils/BaseURL";


export interface CharactersType{
    
}

export const serviceChar = async () => {
  const respose = await axios.get(`${NARUTO_BASE_URL}/characters`);
  return respose;
};
