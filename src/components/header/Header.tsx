import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>
        NU Aero Telemetry
      </h1>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding: 20px 40px;
  background-color: #002b36;
`;