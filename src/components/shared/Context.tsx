import React from "react";
import { ContextProps, RequestType } from "./types";

const Context = React.createContext<ContextProps>({
  modalOpen: false,
  modalContent: <></>,
  isLive: false,
  request: {} as RequestType,
  setModalOpen: (modalOpen: boolean) => {},
  setModalContent: (modalContent: JSX.Element) => {},
  setIsLive: (isLive: boolean) => {},
  setRequest: (request: RequestType) => {},
});

const { Provider } = Context;
const ContextConsumer = Context.Consumer;

type PropsType = {
  children?: JSX.Element;
};

type StateType = ContextProps;

class ContextProvider extends React.Component<PropsType, StateType> {
  state: ContextProps = {
    modalOpen: false,
    modalContent: <></>,
    isLive: false,
    request: {
      baseUrl: localStorage.getItem('baseUrl') ?? '',
      endpoint: '/api/read-sensors',
      method: 'get',
      timeout: 500,
      failureCallback: () => {
        this.setState({ isLive: false });
      },
      successCallback: () => {
        this.setState({ isLive: true });
      },
    },
    setModalOpen: (modalOpen: boolean) => {
      this.setState({ modalOpen });
      if (!modalOpen) {
        this.state.setModalContent(<></>);
      }
    },
    setModalContent: (modalContent: JSX.Element) => {
      this.setState({ modalContent });
    },
    setIsLive: (isLive: boolean) => {
      this.setState({ isLive });
    },
    setRequest: (request: RequestType) => {
      this.setState({ request });
    },
  };

  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>
  }
}

export { Context, ContextProvider, ContextConsumer };
