import styled from 'styled-components';

import Graph from './Graph';

const Graphs = () => {
  return (
    <GraphsWrapper>
      Graphs
    </GraphsWrapper>
  );
}

export default Graphs;

const GraphsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 0 /*-20px*/;
`;
