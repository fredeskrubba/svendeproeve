import { create } from 'zustand'

export const useLoginStore = create((set) => ({
    loggedIn: false,
    name: "",
    token: "",
    fetchLogin: async (endpoint, username, password) => {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            })
        })
        set({ token: await response.json()})
        set({loggedIn: true})
      },
    logout: ()=> set({token: "", loggedIn: false})
    
}))