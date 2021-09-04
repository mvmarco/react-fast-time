// styled components
import styled from "styled-components";
import { motion } from "framer-motion";

const TemplateItem = ({ color, title, isSelected, onClick }) => {
  return (
    <TemplateContainter>
      <Item onClick={onClick} style={{ backgroundColor: color }}>
        {isSelected && (
          <Outline
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: color }}
          transition={spring}
          />
        )}

            <Title style={{ backgroundColor: { color } }}>{title}</Title>
      </Item>
    </TemplateContainter>
  );
};

// STYLES
const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
;
const TemplateContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Item = styled.li`
  display: block;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin: 18px;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
`;

const Outline = styled(motion.div)`
  position: absolute;
  top: -18px;
  left: -18px;
  right: -18px;
  bottom: -18px;
  border: 10px solid white;
  border-radius: 50%;
`;

const Title = styled.div`
  color: white;
  padding: 40.5px 0px;
  font-size: 0.8em;
`;

export default TemplateItem;
