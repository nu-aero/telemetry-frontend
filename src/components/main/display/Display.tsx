import { useState } from 'react';
import styled from 'styled-components';

import ModeSelector from './ModeSelector';
import Graphs from './graphs/Graphs';
import Meters from './meters/Meters';

const Display = () => {
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
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
`;

