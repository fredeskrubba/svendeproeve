import { create } from 'zustand'

export const useFormStore = create((set) => ({
    firstName: "",
    lastName: "",
    addressName: "",
    addressNumber: 0,
    zip: 0,
    city: "",
    setFirstName: (name) => set({firstName: name}),
    setLastName: (name) => set({lastName: name}),
    setAddressName: (name) => set({addressName: name}),
    setAddressNumber: (number) => set({addressNumber: number}),
    setZip: (number) => set({zip: number}),
    setCity: (name) => set({city: name})
}))