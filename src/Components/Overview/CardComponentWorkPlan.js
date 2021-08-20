import styled from "styled-components";
const CardComponentWorkPlan = (props) => {
  return (
    <CardBlock>
      {props.hours}
    </CardBlock>
  );
};
const CardBlock = styled.div`
  background-color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default CardComponentWorkPlan;
