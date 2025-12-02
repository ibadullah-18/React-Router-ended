import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTokens = create(persist(
  (set) => ({
    accesToken:"",
    refreshToken:"",
    setAccesToken: (token) => set(() => ({...state, accesToken: token })),
    setRefreshToken: (token) => set(() => ({...state, refreshToken: token })),
    clearToken: (token) => set(() => ({...state, accesToken: "", refreshToken:"" })),
}),{name:"tokens"}))
