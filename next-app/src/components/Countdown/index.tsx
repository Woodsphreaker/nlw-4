import React, {useState, useEffect} from 'react';
import { Container, CountdownContainer, Counter, Separator, Button } from './styles';

const splitTime = (time) => {
  return time.toString().padStart(2, '0').split('')
}

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60)
  const [counterActive, setCounterActive] = useState(false)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = splitTime(minutes)
  const [secondLeft, secondRight] = splitTime(seconds)

  const changeConterStatus = () => {
    setCounterActive((prevState) => !prevState )
  }

  useEffect(() => {
    if(counterActive && time > 0) {
      setTimeout(() => setTime((prevState) => prevState - 1) , 1000)
    }
  }, [counterActive, time]);
  
  return (
    <Container>
      <CountdownContainer>
        <Counter>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </Counter>
        <Separator>
          :
        </Separator>
        <Counter>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </Counter>
      </CountdownContainer>

      <Button onClick={changeConterStatus}>
        {counterActive ? 'Pausar ciclo atual' : 'Iniciar um ciclo'} 
      </Button>
    </Container>
  )
}

export default Countdown;