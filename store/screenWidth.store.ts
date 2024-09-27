import { create } from 'zustand';

interface ScreenStoreState {
  width: number;
  setScreenWidth: (width: number) => void;
}

export const useScreenStore = create<ScreenStoreState>((set) => ({
  width: 0, // Valeur initiale
  setScreenWidth: (width) => set({ width: width }),
}));
