import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ModeSelector from './ModeSelector';
import Graphs from './graphs/Graphs';
import Meters from './meters/Meters';

import { Context } from '../../shared/Context';

const Display = () => {
  const context = useContext(Context);

  const [mode, setMode] = useState<'graphs' | 'meters'>('graphs');

  const handleClick = () => {
    if (mode === 'graphs') {
      setMode('meters');
    } else {
      setMode('graphs');
    }
  }

  return (
    <DisplayWrapper>
      <ModeSelector
        mode={mode}
        handleClick={handleClick}
      />
      <ContentWrapper>
        {mode === 'graphs'
          ? <Graphs />
          : <Meters />
        }
      </ContentWrapper>
    </DisplayWrapper>
  );
}

export default Display;

const DisplayWrapper = styled.div`
  flex: 1;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
`;

// TODO: fix janky-ass height calculation
const ContentWrapper = styled.div`
  height: calc(100vh - 241px);
  overflow-y: auto;
`;

