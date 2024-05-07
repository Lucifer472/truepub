import { create } from "zustand";

interface useNavbarState {
  open: boolean;
  setIsOpen: () => void;
  setClose: () => void;
}

export const useNavbarState = create<useNavbarState>((set) => ({
  open: false,
  setIsOpen: () => set((state) => ({ open: !state.open })),
  setClose: () => set({ open: false }),
}));

interface useSectionChange {
  currentSectionIdx: string;
  setCurrentSectionIdx: (v: string) => void;
}

export const useSectionChangeState = create<useSectionChange>((set) => ({
  currentSectionIdx: "#home",
  setCurrentSectionIdx: (v) => set({ currentSectionIdx: v }),
}));

interface useHeightState {
  height: number; 
  setHeight: (v: number) => void;
  setPlusHeight: (v: number) => void;
  setMinusHeight: (v: number) => void;
}

export const useHeightState = create<useHeightState>((set) => ({
  height: 0,
  setHeight: (v) => set({ height: v }),
  setPlusHeight: (v) => set((prev) => ({ height: v + prev.height })),
  setMinusHeight: (v) => set((prev) => ({ height: prev.height - v })),
}));

interface useOpeningChange {
  opening: number;
  setOpening: (v: number) => void;
}

export const useOpeningChangeState = create<useOpeningChange>((set) => ({
  opening: 0,
  setOpening: (v) => set({ opening: v }),
}));
