import styled from "styled-components";
const CardComponentOverview = (props) => {
  return (
    <>
      <CardBlock>
        <StatusAndCounter>
          <HiglightRed>{props.statusOne}</HiglightRed>
          {"x 1"}
        </StatusAndCounter>
      </CardBlock>

      <CardBlock>
        <StatusAndCounter>
          <Higlight>{props.statusTwo}</Higlight>
          {"x 3"}
        </StatusAndCounter>
      </CardBlock>
      <CardBlock>
        <StatusAndCounter>
          <Higlight>{props.statusThree}</Higlight>
          {"x 22"}
        </StatusAndCounter>
      </CardBlock>
    </>
  );
};
const CardBlock = styled.div`
  background-color: #f2f1f3;
  margin-top: 10px;
  height: 20%;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const StatusAndCounter = styled.div`
  background-color: #f2f1f3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HiglightRed = styled.div`
  background-color: #fb423a;
  color: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px;
  margin: 0px 5px;
`;
const Higlight = styled.div`
  background-color: #344860;
  color: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 5px;
  margin: 0px 5px;
`;
export default CardComponentOverview;
