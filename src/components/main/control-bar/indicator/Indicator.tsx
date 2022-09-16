import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import EndpointInput from './EndpointInput';

import { Context } from '../../../shared/Context';

import { ToggleableProps, DataPoint } from '../../../shared/types';

import axios, { AxiosRequestConfig } from 'axios';

type Props = {
  isLive: boolean;
  setIsLive: (isLive: boolean) => void;
}

const Indicator = ({
  isLive,
  setIsLive,
}: Props) => {
  const context = useContext(Context);
  
  const [endpoint, setEndpoint] = useState(localStorage.getItem('endpoint') ?? '');

  useEffect(() => {
    if (endpoint !== localStorage.getItem('endpoint')) {
      localStorage.setItem('endpoint', endpoint);
    }
    axios({
      method: 'get',
      baseURL: `//${endpoint}`,
      url: `/api/read-sensor`,
      timeout: 500,
    }).then(res => {
      let casted = res.data as DataPoint;
      if (
        casted.time !== undefined &&
        casted.s0 !== undefined &&
        casted.s5 !== undefined
      ) {
        setIsLive(true);
      } else {
        setIsLive(false);
      }
    }).catch(err => {
      setIsLive(false);
    });
  }, [endpoint]);

  const toggleModal = () => {
    context.setModalContent(
      <EndpointInput
        endpoint={endpoint}
        setEndpoint={setEndpoint}
      />
    );
    context.setModalOpen(true);
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