import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import BaseURLInput from './BaseUrlInput';

import { checkConnection } from '../../../shared/api';
import { Context } from '../../../shared/Context';

import { ToggleableProps, RequestType } from '../../../shared/types';

const Indicator = () => {
  const context = useContext(Context);
  
  const [baseUrl, setBaseUrl] = useState(localStorage.getItem('baseUrl') ?? '');
  const [req, setReq] = useState<RequestType>({
    baseUrl: baseUrl,
    endpoint: '/api/read-sensors',
    method: 'get',
    timeout: 500,
    failureCallback: () => context.setIsLive(false),
    successCallback: () => context.setIsLive(true),
  })

  useEffect(() => {
    if (baseUrl !== localStorage.getItem('baseUrl')) {
      localStorage.setItem('baseUrl', baseUrl);
    }
    setReq(prevState => ({
      ...prevState,
      baseUrl: baseUrl,
    }));    
  }, [baseUrl]);

  useEffect(() => {
    checkConnection(req);
  }, [req]);

  const toggleModal = () => {
    context.setModalContent(
      <BaseURLInput
        baseUrl={baseUrl}
        setBaseUrl={setBaseUrl}
      />
    );
    context.setModalOpen(true);
  }

  return (
    <IndicatorButton
      active={context.isLive}
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