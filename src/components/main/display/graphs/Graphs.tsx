import styled from 'styled-components';

import Graph from './Graph';

const DUMMY_DATA = [
  'Altitude',
  'Airspeed',
  'Battery Level',
  'Battery Temp',
  'Motor RPM',
  'Motor Temp'
];

const Graphs = () => {
  return (
    <GraphsWrapper>
      {
        DUMMY_DATA.map((e, i) => {
          return <Graph sensor={e} key={i} />;
        })
      }
    </GraphsWrapper>
  );
}

export default Graphs;

const GraphsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -20px;
`;
