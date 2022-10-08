import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()(
  devtools(
    persist((set) => ({
      bears: 10,
      increase: (by) => set((state) => ({ bears: state.bears + by })),
    }))
  )
);

export default useBearStore;