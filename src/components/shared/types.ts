export interface ContextProps {
  modalOpen: boolean;
  modalContent: JSX.Element;
  setModalOpen: (modalOpen: boolean) => void;
  setModalContent: (modalContent: JSX.Element) => void;
}

export interface ToggleableProps {
  active: boolean;
}
