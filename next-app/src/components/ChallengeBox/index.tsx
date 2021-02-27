import React from "react"
import { useChallenge } from "../../context/ChallengeContext";

import {
  Container,
  BoxInactiveContainer,
  BoxActiveContainer,
  Main,
  Footer,
  ButtonFailed,
  ButtonSucceeded
} from './styles';

const ChallengeBox: React.FC = () => {

  const {
    currentChallenge,
    levelUp,
    experienceUp,
    resetChallenge
  } = useChallenge()

  const succeededChallenge = (xp:number) => {
    experienceUp(xp)
  }

  const failedChallenge = () => {
    resetChallenge()
  }

  const renderBoxChallenge = () => {

    if (currentChallenge) {
      const {amount, description, type} = currentChallenge
      return (
        <BoxActiveContainer>
          <header>Ganhe {amount} xp</header>

          <Main>
            <img src={`icons/${type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{description}</p>
          </Main>

          <Footer>
            <ButtonSucceeded onClick={() => succeededChallenge(amount)}>Completei</ButtonSucceeded>
            <ButtonFailed onClick={failedChallenge}>Falhei</ButtonFailed>
          </Footer>
        </BoxActiveContainer>
      )
    }

    return (
      <BoxInactiveContainer>
        <strong>Finalize um ciclo para receber um desafio</strong>
        <p>
          <img src="icons/level-up.svg" alt="Level Up"/>
          Avance de level completando desafios.
        </p>
      </BoxInactiveContainer>
    )
  }

  return (
    <Container>
      {renderBoxChallenge()}
    </Container>
  )
}

export default ChallengeBox;
