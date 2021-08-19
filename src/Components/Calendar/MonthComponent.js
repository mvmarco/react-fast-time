import { useEffect, useRef } from "react";
import styled from "styled-components";
import { DATE, MONTH } from "../../Utils/constantsCalendar";

const MonthComponent = (props) => {
  const monthRef = useRef();
  // 214
  useEffect(() => {
    let obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio >= 0.8) {
            props.onVisible(props.mid);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      }
    );
    obs.observe(monthRef.current);
  });

  useEffect(() => {
    const monthRefValue = monthRef && monthRef.current;
    if(monthRefValue) {
      if(props.mid === DATE.getMonth()) {
        monthRefValue.scrollIntoView();
      }
    }
  }, [])
  return (
    <Months id={MONTH[props.mid]} ref={monthRef}>
      {props.children}
    </Months>
  );
};
// STYLES month name 
const Months = styled.div`
  scroll-snap-align: start;
  /* color: #2a8282; */
`;
export default MonthComponent;
