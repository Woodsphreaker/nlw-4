import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
 
  > span {
    font-size: 1rem;
  }
`

export const ProgressBar = styled.div`
  display: flex;
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background-color: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;

  > div {
    height: 4px;
    border-radius: 4px;
    width: 10%;
    background-color: var(--green);
  }

  > span {
    position: absolute;
    left: 10%;
    top: 12px;
    transform: translateX(-50%)
  }

`
