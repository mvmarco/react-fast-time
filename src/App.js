import styled from "styled-components";
import CalendarIndex from "./Components/Calendar/CalendarIndex";
import OverviewIndex from "./Components/Overview/OverviewIndex";
import TimeLineIndex from "./Components/Timeline/TimeLineIndex";
import GlobalStyle from "./Styles/GlobalStyle";
function App() {
  return (
    <div className="App">
      {" "}
      <GlobalStyle />
      <GlobalWrapper>
        <BoxOne>
          <CalendarIndex />
          <OverviewIndex />
        </BoxOne>
        <BoxTwo>
          <TimeLineIndex />
        </BoxTwo>
      </GlobalWrapper>
    </div>
  );
}

const GlobalWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: rgba(234,234,239,255);
  margin: 10px; // issue
`;
const BoxOne = styled.div`
width: 40%;
`;

const BoxTwo = styled.div`
  width: 60%;
`;

export default App;
