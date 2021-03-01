import React, { createContext, ReactNode, useContext, useState } from 'react'

interface ModalProps {
  children: ReactNode
}

interface ModalContext {
  showModal: boolean,
  setShowModal: (status: boolean) => void
}

const ModalContext = createContext({} as ModalContext)

const ModalProvider = ({children}: ModalProps) => {

  const [showModal, setShowModal] = useState(false)

  return (
    <ModalContext.Provider value={{showModal, setShowModal}}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)

export default ModalProvider
