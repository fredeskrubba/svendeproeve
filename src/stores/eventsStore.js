import { create } from 'zustand'

export const useEventsStore = create((set) => ({
    events: null,
    eventDetails: "",
    reviews: "",
    fetch: async (endpoint) => {
        const response = await fetch(endpoint)
        set({ events: await response.json() })
    },
    fetchEventDetails: async (endpoint) => {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              },
        })
        set({ eventDetails: await response.json()})
      },
    fetchEventReviews: async (endpoint) => {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              },
        })
        set({ reviews: await response.json()})
      },
}))