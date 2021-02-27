import React, { createContext, ReactNode } from 'react'
import ChallengeProvider from './ChallengeContext'
import CountdownProvider from './CountdownContext'

interface RootProviderProps {
  children: ReactNode
}

const providers = [ChallengeProvider, CountdownProvider]
const RootContext = createContext({})

const RootProvider = ({children}: RootProviderProps) => {
  return (
    <RootContext.Provider value={{}}>
      <ChallengeProvider>
        <CountdownProvider>
          {children}
        </CountdownProvider>
      </ChallengeProvider>
    </RootContext.Provider>
  )
}

export default RootProvider
