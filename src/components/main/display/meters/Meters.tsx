import styled from 'styled-components';

import Meter from './Meter';

const DUMMY_DATA = [
  'Altitude',
  'Airspeed',
  'Battery Level',
  'Battery Temp',
  'Motor RPM',
  'Motor Temp'
];

const Meters = () => {
  return (
    <MetersWrapper>
      {
        // Dummy Data
        DUMMY_DATA.map((e, i) => {
          return <Meter sensor={e} key={i} />;
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
