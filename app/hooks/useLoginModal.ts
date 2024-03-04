import React from 'react'
import { create } from 'zustand'
import { ModalType } from '../types'

const useLoginModal = create<ModalType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({isOpen: false}),
  
}))

export default useLoginModal