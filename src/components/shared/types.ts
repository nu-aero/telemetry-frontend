export interface ContextProps {
  modalOpen: boolean;
  modalContent: JSX.Element;
  setModalOpen: (modalOpen: boolean) => void;
  setModalContent: (modalContent: JSX.Element) => void;
}

export interface ToggleableProps {
  active: boolean;
}

export interface DataPoint {
  time: number,
  s0: number,
  s1: number,
  s2: number,
  s3: number,
  s4: number,
  s5: number,
}
