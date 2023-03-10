import { create } from 'zustand'

export const useFormStore = create((set) => ({
    firstName: "",
    lastName: "",
    addressName: "",
    addressNumber: 0,
    zip: 0,
    city: "",
    setFirstName: (firstName) => set({firstName: firstName}),
    setLastName: (lastName) => set({lastName: lastName}),
    setAddressName: (addressName) => set({addressName: addressName}),
    setAddressNumber: (addressNumber) => set({addressNumber: addressNumber}),
    setZip: (zip) => set({zip: zip}),
    setCity: (city) => set({city: city})
}))