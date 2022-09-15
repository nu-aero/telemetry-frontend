import styled from 'styled-components';

import ControlBar from './control-bar/ControlBar';
import Display from './display/Display';

const Main = () => {
  return (
    <MainWrapper>
      <ControlBar />
      <Display />
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  flex: 1;
  background-color: #fdf6e3;
  display: flex;
  flex-direction: column;
`;
