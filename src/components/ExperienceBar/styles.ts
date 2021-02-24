import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  border: 10px solid;
  height: fit-content;
  flex: 1;

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

`
