export interface RequestType {
  baseUrl: string;
  endpoint: string;
  method: string;
  data?: any;
  timeout?: number;
  failureCallback?: Function;
  successCallback?: Function;
}
export interface ContextProps {
  modalOpen: boolean;
  modalContent: JSX.Element;
  isLive: boolean;
  request: RequestType;
  setModalOpen: (modalOpen: boolean) => void;
  setModalContent: (modalContent: JSX.Element) => void;
  setIsLive: (isLive: boolean) => void;
  setRequest: (request: RequestType) => void;
}

export interface ToggleableProps {
  active: boolean;
}

export interface DataPoint {
  time: number;
  s0: number;
  s1: number;
  s2: number;
  s3: number;
  s4: number;
  s5: number;
}
