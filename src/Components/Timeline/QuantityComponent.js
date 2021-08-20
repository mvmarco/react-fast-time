import styled from "styled-components";
const QuantityComponent = (props) => {
  return (
    <HoursLines>
      <hr></hr>
    </HoursLines>
  );
};

const HoursLines = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 0px;
  &.hr {
    border: -1.9px solid;
  }
`;

export default QuantityComponent;
