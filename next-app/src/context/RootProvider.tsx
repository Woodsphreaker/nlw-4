import React, { createContext, ReactNode } from 'react'
import ChallengeProvider from './ChallengeContext'
import CountdownProvider from './CountdownContext'
import ModalProvider from './ModalContext'


interface RootProviderProps {
  children: ReactNode
}

const providers = [ChallengeProvider, CountdownProvider]
const RootContext = createContext({})

const RootProvider = ({children}: RootProviderProps) => {
  return (
    <RootContext.Provider value={{}}>
      <ModalProvider>
        <ChallengeProvider>
          <CountdownProvider>
            {children}
          </CountdownProvider>
        </ChallengeProvider>
      </ModalProvider>
    </RootContext.Provider>
  )
}

export default RootProvider
