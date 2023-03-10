import { create } from 'zustand'

export const useSeatStore = create((set) => ({
    seats: "",
    fetchSeats: async (endpoint) => {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              },
        })
        set({ seats: await response.json()})
      },
}))