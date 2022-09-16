import { useState } from 'react';
import styled from 'styled-components';

import { ToggleableProps } from '../../shared/types';

const Recorder = () => {
  const [recording, setRecording] = useState(false);

  const handleClick = () => {
    setRecording(!recording);
  }

  return (
    <RecordButton onClick={handleClick}>
      <RecordIcon active={recording} />
      <p>
        {recording ? 'STOP' : 'REC'}
      </p>
    </RecordButton>
  );
}

export default Recorder;

const RecordButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 76px;
  user-select: none;
  cursor: pointer;

  p {
    margin: 0 0 0 8px;
  }
`;

const RecordIcon = styled.div<ToggleableProps>`
  background-color: ${props => props.active ? '#657b83' : '#dc322f'};
  border-radius: ${props => props.active ? 0 : 10}px;
  width: ${props => props.active ? 16 : 20}px;
  height: ${props => props.active ? 16 : 20}px;
  margin: ${props => props.active ? 2 : 0}px;
  transition: all 0.1s ease-out;
`;
