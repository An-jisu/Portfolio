import styled from "styled-components";
//사진
import ProjectName from "./ProjectName";
import TagContainer from "./TagContainer";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 460px;
  padding: 2px;
  border-radius: 5px;
  background: white;
  transition: 0.6s;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
    0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3), 4px 0 20px rgba(0, 0, 0, 0.3),
      0 10px 20px rgba(0, 0, 0, 0.3), -4px 0 20px rgba(0, 0, 0, 0.3);
    transform: translate(0, -10%);
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 160px;
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
`;

const Date = styled.div`
  margin-bottom: 20px;
  color: gray;
  font-family: "The Jamsil 2 Light";
  font-size: 16px;
`;

const Expl = styled.p`
  margin-bottom: 8px;
  font-family: "The Jamsil 3 Regular";
  font-size: 15px;
  text-align: justify;
  line-height: 22px;
  text-justify: inter-word;
  color: #000000c8;
`;

const TagBox = styled.div`
  position: absolute;
  bottom: 15px;
`;
const StackTag = styled.div`
  width: 54px;
  padding: 3px;
  border-radius: 5px;
  background: #3154c1;
  font-family: "The Jamsil 3 Regular";
  text-align: center;
  color: white;
`;
const Stacks = styled.div`
  padding: 2px;
  font-size: 16px;
  color: gray;
  word-break: break-word;
  font-family: "The Jamsil 2 Light";
`;
const ProjectCard = (props) => {
  const explLines = props.shortExpl
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);

  return (
    <CardContainer onClick={props.onClick}>
      <ProjectImg src={props.src} alt="projectImg" />
      <ProjectContent>
        <ProjectName name={props.name} type={props.type} card />
        <Date>{props.date}</Date>
        <Expl>{explLines}</Expl>
        <TagBox>
          <StackTag>Stack</StackTag>
          <Stacks>{props.stacks}</Stacks>
        </TagBox>
      </ProjectContent>
    </CardContainer>
  );
};

export default ProjectCard;
