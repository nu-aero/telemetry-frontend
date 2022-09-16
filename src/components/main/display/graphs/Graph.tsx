import styled from 'styled-components';

const Graph = () => {
  return (
    <GraphWrapper>
      Graph
    </GraphWrapper>
  );
}

export default Graph;

const GraphWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 300px;
  border: 1px solid black;

  @media (min-width: 1280px) {
    width: calc(50% - 20px);
  }
`;
