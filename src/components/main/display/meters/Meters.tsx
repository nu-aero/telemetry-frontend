import styled from 'styled-components';

import Meter from './Meter';

const Meters = () => {
  return (
    <MetersWrapper>
      Meters
    </MetersWrapper>
  );
}

export default Meters;

const MetersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 0 /*-20px*/;
`;
