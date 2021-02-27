import { createContext, ReactNode, useContext, useState } from "react";

interface ChallengeProviderProps {
  children: ReactNode
}

const ChallengeContext = createContext({})

const ChallengeProvider = ({children}: ChallengeProviderProps) => {
  const [currentExperience, setCurrentExperience] = useState(0)

  const upLevel = () => {
    setCurrentExperience((prevLevel) => prevLevel + 1 )
  }

  return (
    <ChallengeContext.Provider value={{currentExperience, upLevel}}>
      {children}
    </ChallengeContext.Provider>
  )
}

export const useChallenge = () => useContext(ChallengeContext)

export default ChallengeProvider
