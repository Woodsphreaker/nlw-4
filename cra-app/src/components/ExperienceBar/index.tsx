import React from 'react';

import { Header, ProgressBar } from './styles';

const ExperienceBar = () => {
  return (
    <Header>
      <span>0 xp</span>
      <ProgressBar>
        <div />
        <span>
          300 px
        </span>
      </ProgressBar>
      <span>600 xp</span>
    </Header>
  )
}

export default ExperienceBar;