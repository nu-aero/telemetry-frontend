import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import { Context } from '../../../shared/Context';

import { ToggleableProps } from '../../../shared/types';

type Props = {
  endpoint: string;
  setEndpoint: (endpoint: string) => void; 
}

const EndpointInput = ({
  endpoint,
  setEndpoint,
}: Props) => {
  const context = useContext(Context);

  const [newEndpoint, setNewEndpoint] = useState('');

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    let target = e.target as HTMLInputElement;
    setNewEndpoint(target.value);
  }

  const handleSubmit = () => {
    if (newEndpoint !== '') {
      setEndpoint(newEndpoint);
      context.setModalOpen(false);
    }
  }

  return (
    <FormWrapper>
      <StyledLabel>
        Backend Endpoint
        <StyledInput
          type='text'
          value={newEndpoint}
          placeholder={endpoint}
          onInput={handleInput}
        />
      </StyledLabel>
      <Submit
        active={newEndpoint !== ''}
        onClick={handleSubmit}
      >
        Update
      </Submit>
    </FormWrapper>
  );
}

export default EndpointInput;

const FormWrapper = styled.div`
  margin-top: -10px;
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

const Submit = styled.div<ToggleableProps>`
  font-size: 14px;
  border: 2px solid #657b83;
  border-radius: 12px;
  width: fit-content;
  height: 24px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  user-select: none;
  cursor: ${props => props.active ? 'pointer' : 'default'};
  filter: ${props => props.active ? 'none' : 'opacity(0.41)'};
`;
