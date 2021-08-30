// styled components
import styled from "styled-components";

const GreenCurrentTimeLine = ({ index, hours, minutes, showDot }) => {
  // consts
  const ratio = minutes / 60;
  const topValue = 54 * ratio; // 54 in the height of the GreenLine Div
  return (
    <>
      {index === hours && (
        <GreenLine
          style={{
            top: `${topValue}px`,
          }}
        >
          {showDot && <Dot></Dot>}
        </GreenLine>
      )}
    </>
  );
};

// STYLES
const GreenLine = styled.div`
  background-color: #02b396;
  height: 2px;
  width: 100%;
  position: absolute;
  top: 54px;
  z-index: 98;
  position: relative;
  display: flex;
  align-items: center;
`;

const Dot = styled.div`
  background-color: #02b396;
  position: absolute;
  left: 10px;
  border-radius: 20px;
  width: 10px;
  height: 10px;
  z-index: 99;
  left: -1px;
`;
export default GreenCurrentTimeLine;
