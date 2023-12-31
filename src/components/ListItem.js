import styled from "styled-components";

const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style-type: none;
`;

const SkillName = styled.div`
  width: 150px;
  font-family: "The Jamsil 2 Light";
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;

const DegreeContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 800px;
  height: 40px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Degree = styled.div`
  position: absolute;
  left: 0;
  width: ${(props) => `${props.degree}%`};
  max-width: 100%; // 변경: 최대 너비 설정
  height: 37px;
  border-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  transition: width 3s; // 추가: 너무 빨리 움직이지 않도록 애니메이션 지속 시간 설정
`;

const DegreeNum = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 4px 10px 0 0;
  font-family: "The Jamsil 3 Regular";
  font-size: 20px;
  color: white;
`;

const ListItem = (props) => {
  return (
    <ListItemContainer>
      <SkillName>{props.value}</SkillName>
      <DegreeContainer>
        <Degree degree={props.degree}>
          <DegreeNum>{props.degree} %</DegreeNum>
        </Degree>
      </DegreeContainer>
    </ListItemContainer>
  );
};

export default ListItem;
