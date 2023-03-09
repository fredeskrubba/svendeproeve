import { create } from 'zustand'

export const useFavouriteStore = create((set) => ({
    favourites: "",
    addFavourite: async (endpoint, token, eventId) => {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            body: JSON.stringify({
                event_id: `${eventId}`,
            })
        })
      },
      fetchFavourites: async (endpoint, token) => {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
        })
        set({ favourites: await response.json()})
      },
      removeFavourite: async (endpoint, token) => {
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
        })
      }, 
    
}))