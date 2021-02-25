import React from 'react';

import { Container, InfoPanel } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/Woodsphreaker.png" alt="Woods"/>
      <InfoPanel>
        <strong>Carlo Enrico</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
          Level 1
        </p>   
      </InfoPanel>
    </Container>
  );
}

export default Profile;