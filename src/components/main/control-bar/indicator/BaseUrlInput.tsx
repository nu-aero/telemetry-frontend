import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../../shared/Context';

import { ToggleableProps } from '../../../shared/types';

type Props = {
  baseUrl: string;
  setBaseUrl: (baseUrl: string) => void; 
}

const BaseURLInput = ({
  baseUrl,
  setBaseUrl,
}: Props) => {
  const context = useContext(Context);

  const [newBaseUrl, setNewBaseUrl] = useState('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    setNewBaseUrl(target.value);
  }

  const handleSubmit = () => {
    if (newBaseUrl !== '') {
      setBaseUrl(newBaseUrl);
      context.setModalOpen(false);
    }
  }

  const handleDisconnect = () => {
    setBaseUrl('');
    context.setModalOpen(false);
  }

  return (
    <FormWrapper>
      <StyledLabel>
        Backend Base url
        <StyledInput
          type='text'
          value={newBaseUrl}
          placeholder={baseUrl ? baseUrl : 'Enter base url'}
          onInput={handleInput}
        />
      </StyledLabel>
      <ButtonTray>
        <Submit
          active={newBaseUrl !== ''}
          onClick={handleSubmit}
        >
          Connect
        </Submit>
        <Submit
          active={true}
          onClick={handleDisconnect}
        >
          Disconnect
        </Submit>
      </ButtonTray>
    </FormWrapper>
  );
}

export default BaseURLInput;

const FormWrapper = styled.div`
  margin-top: -8px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
`;

const StyledInput = styled.input`
  border: 2px solid #657b83;
  border-radius: 14px;
  height: 28px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  background: none;
  color: #657b83;
  font-family: 'Source Code Pro', monospace;
  font-size: 20px;
  width: 512px;

  ::placeholder {
    color: #657b8369;
  }

  :focus {
    outline: none;
  }
`;

const ButtonTray = styled.div`
  margin-top: 10px;
  display: flex;
`;

const Submit = styled.div<ToggleableProps>`
  font-size: 14px;
  border: 2px solid #657b83;
  border-radius: 12px;
  width: fit-content;
  height: 24px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: ${props => props.active ? 'pointer' : 'default'};
  filter: ${props => props.active ? 'none' : 'opacity(0.41)'};
  margin-right: 10px;
`;
