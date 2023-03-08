import { create } from 'zustand'

export const useActorStore = create((set) => ({
    actors: "",
    actorDetails: "",
    fetchActors: async (endpoint) => {
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
              },
        })
        set({ actors: await response.json()})
      },
}))