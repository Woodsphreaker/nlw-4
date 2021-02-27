import React from "react"

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

  const hasActiveChallenge = true

  const renderBoxChallenge = () => {

    if (hasActiveChallenge) {
      return (
        <BoxActiveContainer>
          <header>Ganhe 400 xp</header>

          <Main>
            <img src="icons/body.svg" alt=""/>
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </Main>

          <Footer>
            <ButtonSucceeded>Completei</ButtonSucceeded>
            <ButtonFailed>Falhei</ButtonFailed>
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
