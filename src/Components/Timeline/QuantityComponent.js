import styled from "styled-components";


const QuantityComponent = (props) => {
  return (
    <LineQuantityDiv>
      <hr></hr>
    </LineQuantityDiv>
  );
};

const LineQuantityDiv = styled.div`
  width: 100%;
  margin: auto;
  margin-left: 0px;
  &.hr {
    border: -1.9px solid;
  }
`;

export default QuantityComponent;
