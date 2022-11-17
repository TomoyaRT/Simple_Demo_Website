import create from 'zustand'

export const useSwitchMode = create((set) => ({
  mode: 'light',
  useLightMode: () => set(() => ({ mode: 'light' })),
  useDarkMode: () => set(() => ({ mode: 'dark' })),
}))
