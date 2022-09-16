import styled from 'styled-components';

type Props = {
  sensor: string;
}

const Meter = ({
  sensor,
}: Props) => {
  return (
    <MeterWrapper>
      {sensor} Meter
    </MeterWrapper>
  );
}

export default Meter;

const MeterWrapper = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid black;
  margin-top: 20px;
`;
