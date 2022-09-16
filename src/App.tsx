import styled, { createGlobalStyle } from 'styled-components';

import { ContextProvider } from './components/shared/Context';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/shared/Modal';

const App = () => {
  return (
    <ContextProvider>
      <AppWrapper>
        <GlobalStyle />
        <Header />
        <Main />
        <Modal />
      </AppWrapper>
    </ContextProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Source Code Pro', monospace;
    font-size: 20px;
    color: #657b83;
  }

  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 48px;
    line-height: 1;
    letter-spacing: -0.06em;
    color: #dc322f;
    margin: 0;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
