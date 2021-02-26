import React from 'react';
import CompleteChallenges from '../CompleteChallenges';
import Countdown from '../Countdown';
import Profile from '../Profile';

import { Container, Panel } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Panel>
        <Profile />
        <CompleteChallenges />
        <Countdown />
      </Panel>
      <Panel>
        Right
      </Panel>
    </Container>
  )
}

export default MainContent;