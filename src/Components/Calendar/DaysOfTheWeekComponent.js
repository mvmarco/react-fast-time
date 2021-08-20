import styled from "styled-components";

const DaysOfTheWeekComponent = (props) => {
  console.log(props);
  return (
    <Day>
      <Title>{props.dayOfTheWeek}</Title>
    </Day>
  );
};

// STYLES
const Day = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  padding-right: 10px;
`;

const Title = styled.div`
  color: white;
`;

export default DaysOfTheWeekComponent;