import CalendarIndex from "./Components/Calendar/CalendarIndex";
import TimeLineIndex from "./Components/Timeline/TimeLineIndex";
import GlobalStyle from "./Styles/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* <OverviewIndex /> */}
      <Box>
        <CalendarIndex />
      </Box>
      <BoxOne>
        <TimeLineIndex />
      </BoxOne>
    </div>
  );
}

export default App;
