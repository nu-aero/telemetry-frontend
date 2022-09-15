import styled from 'styled-components';

import Recorder from './Recorder';
import Loader from './Loader';

const ControlBar = () => {
  return (
    <BarWrapper>
      <Recorder />
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
