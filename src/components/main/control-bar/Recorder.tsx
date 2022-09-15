import { useState } from 'react';
import styled from 'styled-components';

import ToggleableProps from '../../../types/ToggleableProps';

const Recorder = () => {
  const [recording, setRecording] = useState(false);

  const handleClick = () => {
    setRecording(!recording);
  }

  return (
    <RecorderWrapper>
      <Indicator active={true}>
        LIVE
      </Indicator>
      <RecordButton onClick={handleClick}>
        <RecordIcon active={recording} />
        <p>
          {recording ? 'STOP' : 'REC'}
        </p>
      </RecordButton>
    </RecorderWrapper>
  );
}

export default Recorder;

const RecorderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;

const Indicator = styled.div<ToggleableProps>`
  border-radius: 14px;
  border: 2px solid ${props => props.active ? '#dc322f' : '#657b83'};
  color: ${props => props.active ? '#dc322f' : '#657b83'};
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: fit-content;
`;

const RecordButton = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
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
