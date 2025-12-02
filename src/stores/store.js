import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useDarkMode = create(persist(
  (set) => ({
  isDarkmodeEnable: false,
  toggleDarkmode: () => set((state) => ({ isDarkmodeEnable: !state.isDarkmodeEnable  }))
}),{name:"darkmode"}))
