import { create } from "zustand";
import { CharactersData } from "../service/serviceChar";

const initStoroe = {
  char: {
    data: [],
    loading: false,
    error: null,
  },
  fetchChar: {
    data: [],
    loading: false,
    error: null,
  },
};

interface NarutoType {
  data: CharactersData[];
  loading: boolean;
  error: null;
}
interface UseStoreType {
  char: NarutoType;
  fetchChar: NarutoType;
  setChar: (value: NarutoType) => void;
  setFetchChar: (value: NarutoType) => void;
}

export const useCharStore = create<UseStoreType>((set) => ({
  ...initStoroe,
  setChar: (value: NarutoType) => set({ char: value }),
  setFetchChar: (value: NarutoType) => ({ fetchChar: value }),
}));
