import React from 'react';
import CompleteChallenges from '../CompleteChallenges';
import Profile from '../Profile';

import { Container, Panel } from './styles';

const MainContent: React.FC = () => {
  return (
    <Container>
      <Panel>
        <Profile />
        <CompleteChallenges />
      </Panel>
      <Panel>
        Right
      </Panel>
    </Container>
  )
}

export default MainContent;