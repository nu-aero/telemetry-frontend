import { useContext } from 'react';

import styled from 'styled-components';

import Indicator from './indicator/Indicator';
import Recorder from './Recorder';
import Loader from './Loader';

import { Context } from '../../shared/Context';

import { ToggleableProps } from '../../shared/types';

const ControlBar = () => {
  const context = useContext(Context);

  return (
    <BarWrapper>
      <LiveControls active={context.isLive}>
        <Indicator />
        <Recorder />
      </LiveControls>
      <Loader />
    </BarWrapper>
  );
}

export default ControlBar;

const BarWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding: 20px 40px;
  background-color: #fdf6e3;
  border-bottom: 3px dotted #eee8d5;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LiveControls = styled.div<ToggleableProps>`
  display: flex;
  align-items: center;
  height: fit-content;
  
  filter: ${props => props.active
    ? 'none'
    : 'grayscale(100%) invert(47%) sepia(9%) saturate(779%) hue-rotate(150deg) brightness(97%) contrast(86%)'
  };
`;
