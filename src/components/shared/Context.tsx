import React from "react";
import { ContextProps } from "./types";

const Context = React.createContext<Partial<ContextProps>>({});

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
    setModalOpen: (modalOpen: boolean) => {
      this.setState({ modalOpen });
      if (!modalOpen) {
        
        this.state.setModalContent(<></>);
      }
    },
    setModalContent: (modalContent: JSX.Element) => {
      this.setState({ modalContent });
    }
  };

  render() {
    return <Provider value={{ ...this.state }}>{this.props.children}</Provider>
  }
}

export { Context, ContextProvider, ContextConsumer };
