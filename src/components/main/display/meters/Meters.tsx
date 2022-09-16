import styled from 'styled-components';

import Meter from './Meter';

const Meters = () => {
  return (
    <MetersWrapper>
      {
        // Dummy Data
        [0, 1, 2, 3, 4, 5].map((e) => {
          return <Meter key={e} />;
        })
      }
    </MetersWrapper>
  );
}

export default Meters;

const MetersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: -20px;
`;
