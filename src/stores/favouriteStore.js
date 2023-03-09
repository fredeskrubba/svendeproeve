import { create } from 'zustand'

export const useFavouriteStore = create((set) => ({
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
    
}))