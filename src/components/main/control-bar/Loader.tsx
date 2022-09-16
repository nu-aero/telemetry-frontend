import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import uploadIcon from '../../../icons/file_upload.svg';

const Loader = () => {
  const [fileData, setFileData] = useState<number[][]>();

  useEffect(() => {
    fileData && console.table(fileData);
  }, [fileData]);
  
  const reader = new FileReader;
  reader.onload = (e) => {
    let fileString = (e.target!.result as string).replaceAll('\r', '');

    let data: number[][] = fileString.split('\n').map((i) => {
      return i.split(',').map((j) => {
        return parseFloat(j);
      });
    })

    setFileData(data);
  }

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    reader.readAsText(e.target.files![0]);
  }

  return (
    <label>
      <HiddenInput
        type='file'
        accept='.csv'
        onChange={handleUpload}
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
