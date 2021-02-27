import { createContext, ReactNode, useContext, useState } from "react";
import challenges from '../../challenge.json'

interface ChallengeProviderProps {
  children: ReactNode
}

interface ChallengeData {
  type: string
  description: string
  amount: number
}

interface ChallengeContextData {
  challengeTimeCourse: number
  level: number
  currentExperience: number
  challengesCompleted: number
  currentChallenge: ChallengeData
  experienceToNextLevel: number
  levelUp: () => void
  startNewChallenge: () => void
  experienceUp: (xp: number) => void
  resetChallenge: () => void
}

const INITIAL_VALUES = {
  level: 0,
  currentExperience: 0,
  challengesCompleted: 0
}

const ChallengeContext = createContext(INITIAL_VALUES as ChallengeContextData)

const ChallengeProvider = ({children}: ChallengeProviderProps) => {
  const [level, setLevel] = useState(1)
  const [currentExperience, setCurrentExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState(0)
  const [currentChallenge, setCurrentChallenge] = useState(null)
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
  const challengeTimeCourse = 0.1

  const levelUp = () => {
    setLevel((prevLevel) => prevLevel + 1 )
  }

  const experienceUp = (xp: number) => {
    setCurrentExperience((previousXp) => previousXp + xp)
  }

  const resetChallenge = () => {
    setCurrentChallenge(null)
  }

  const startNewChallenge = () => {
    const numberOfChallenges = challenges.length
    const randomChallenge = Math.floor(Math.random() * numberOfChallenges)
    const currentChallenge = challenges[randomChallenge]
    setCurrentChallenge(currentChallenge)
  }

  return (
    <ChallengeContext.Provider value={
      {
        challengeTimeCourse,
        level,
        currentExperience,
        challengesCompleted,
        currentChallenge,
        experienceToNextLevel,
        levelUp,
        experienceUp,
        startNewChallenge,
        resetChallenge
     }
    }>
      {children}
    </ChallengeContext.Provider>
  )
}

export const useChallenge = () => useContext(ChallengeContext)

export default ChallengeProvider
