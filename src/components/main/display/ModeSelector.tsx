import styled from 'styled-components';

import ToggleableProps from '../../../types/ToggleableProps';

type Props = {
  mode: 'graphs' | 'meters';
  handleClick: () => void;
}

const ModeSelector = ({
  mode,
  handleClick,
}: Props) => {
  return (
    <Selector onClick={handleClick}>
      <StyledText active={mode === 'graphs'} >
        Graphs
      </StyledText>
      <StyledText active={false} > | </StyledText> {/* Keep whitespace characters */}
      <StyledText active={mode === 'meters'} >
        Meters
      </StyledText>
    </Selector>
  );
}

export default ModeSelector;

const Selector = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledText = styled.p<ToggleableProps>`
  margin: 0;
  font-size: 14px;
  color: ${props => props.active ? '#657b83' : '#93a1a1'}
`;