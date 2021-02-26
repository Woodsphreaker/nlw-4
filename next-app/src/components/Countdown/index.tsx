import React from 'react';

import { Container, CountdownContainer, Counter, Separator, Button } from './styles';

const Countdown: React.FC = () => {
  return (
    <Container>
      <CountdownContainer>
        <Counter>
          <span>2</span>
          <span>5</span>
        </Counter>
        <Separator>
          :
        </Separator>
        <Counter>
          <span>2</span>
          <span>5</span>
        </Counter>
      </CountdownContainer>

      <Button>
        Iniciar um ciclo
      </Button>
    </Container>
  )
}

export default Countdown;