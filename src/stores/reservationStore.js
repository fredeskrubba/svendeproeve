import { create } from 'zustand'

export const useReservationStore = create((set) => ({
    reservations: [],
    fetchReservations: async (endpoint, token) => {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        set({ reservations: await response.json() })
    },

}))