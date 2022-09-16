import { useContext, useState } from 'react';
import styled from 'styled-components';

import EndpointInput from './EndpointInput';

import { Context } from '../../../shared/Context';

import { ToggleableProps } from '../../../shared/types';

type Props = {
  isLive: boolean;
  setIsLive: (isLive: boolean) => void;
}

const Indicator = ({
  isLive,
  setIsLive,
}: Props) => {
  const context = useContext(Context);
  
  const [endpoint, setEndpoint] = useState('localhost:8080');

  const toggleModal = () => {
    context.setModalContent!(
      <EndpointInput
        endpoint={endpoint}
        setEndpoint={setEndpoint}
      />
    );
    context.setModalOpen!(true);
  }

  return (
    <IndicatorButton
      active={isLive}
      onClick={toggleModal}
    >
      LIVE
    </IndicatorButton>
  );
}

export default Indicator;

const IndicatorButton = styled.div<ToggleableProps>`
  border-radius: 14px;
  border: 2px solid ${props => props.active ? '#dc322f' : '#657b83'};
  color: ${props => props.active ? '#dc322f' : '#657b83'};
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;