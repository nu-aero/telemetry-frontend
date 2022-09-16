import styled from 'styled-components';

import uploadIcon from '../../../icons/file_upload.svg';

const Loader = () => {
  return (
    <label>
      <HiddenInput
        type='file'
      />
      <LoaderFacade>
        <Icon src={uploadIcon} />
        <p>Load</p>
      </LoaderFacade>
    </label>
  );
}

export default Loader;

const HiddenInput = styled.input`
  display: none;
`;

const LoaderFacade = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;

  p {
    margin: 0 0 0 8px;
  }
`;

const Icon = styled.img`
  width: 26px;
  height: 26px;
  filter: invert(50%) sepia(8%) saturate(876%) hue-rotate(150deg) brightness(91%) contrast(90%);
`;
