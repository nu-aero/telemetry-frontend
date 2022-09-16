import styled from 'styled-components';

import Graph from './Graph';

const Graphs = () => {
  return (
    <GraphsWrapper>
      {
        // Dummy Data
        [0, 1, 2, 3, 4, 5].map((e) => {
          return <Graph key={e} />;
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
