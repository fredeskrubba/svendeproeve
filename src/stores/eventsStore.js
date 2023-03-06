import { create } from 'zustand'

export const useEventsStore = create((set) => ({
    events: null,
    fetch: async (endpoint) => {
        const response = await fetch(endpoint)
        set({ events: await response.json() })
    },
}))