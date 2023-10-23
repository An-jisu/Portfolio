import styled from "styled-components";

const Name = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  margin-bottom: 6px;
`;

const NameContent = styled.div`
  font-family: "The Jamsil 4 Medium";
  font-size: 25px;
  font-weight: 700;
  color: black;
`;
const Type = styled.div`
  padding-bottom: 3px;
  font-family: "The Jamsil 3 Regular";
  font-size: 16px;
  color: ${(props) => (props.card ? "gray" : "#d3d3d3")};
`;

const ProjectName = (props) => {
  return (
    <Name>
      <NameContent>{props.name}</NameContent>
      <Type card={props.card}>{props.type}</Type>
    </Name>
  );
};

export default ProjectName;
