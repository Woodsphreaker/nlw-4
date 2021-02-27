import React, {useState, useEffect} from "react";
import { Container, CountdownContainer, Counter, Separator, Button, FinishedButton } from './styles';

const splitTime = (time) => {
  return time.toString().padStart(2, '0').split('')
}

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60)
  const [counterIsActive, setCounterActive] = useState(false)
  const [hasFinish, setHasFinish] = useState(false)
  const [counterID, setCounterID] = useState(null)
  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = splitTime(minutes)
  const [secondLeft, secondRight] = splitTime(seconds)

  const startCountdown = () => {
    setCounterActive(true)
  }

  const resetCountdown = () => {
    setCounterActive(false)
    setTime(25 * 60)
    clearTimeout(counterID)
  }

  useEffect(() => {
    if(counterIsActive && time > 0) {
      return setCounterID(setTimeout(() => setTime((prevState) => prevState - 1) , 1000))
    }

    if (counterIsActive && time === 0) {
      resetCountdown()
      setHasFinish(true)
      // setCounterActive(false)
      return console.log('done')
    }

  }, [counterIsActive, time]);

  const renderButtonByCounterStatus = () => {

    if(hasFinish) {
      return <FinishedButton>Finalizado</FinishedButton>
    }

    if (counterIsActive) {
      return (
        <Button isActive={counterIsActive} onClick={resetCountdown}>
          Abandonar ciclo atual
        </Button>
      )
    }

    return (
      <Button isActive={counterIsActive} onClick={startCountdown}>
        Iniciar um ciclo
      </Button>
    )
  }

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

      {
        renderButtonByCounterStatus()
      }
    </Container>
  )
}

export default Countdown;
