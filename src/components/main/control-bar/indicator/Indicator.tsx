import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import BaseURLInput from './BaseUrlInput';

import { getData } from '../../../shared/api';
import { Context } from '../../../shared/Context';

import { ToggleableProps, RequestType } from '../../../shared/types';

const Indicator = () => {
  const context = useContext(Context);
  
  const [baseUrl, setBaseUrl] = useState(localStorage.getItem('baseUrl') ?? '');

  useEffect(() => {
    if (baseUrl !== localStorage.getItem('baseUrl')) {
      localStorage.setItem('baseUrl', baseUrl);
    }
    context.setRequest({
      ...context.request,
      baseUrl: baseUrl,
    });    
  }, [baseUrl]);

  useEffect(() => {
    getData(context.request);
  }, [context.request]);

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