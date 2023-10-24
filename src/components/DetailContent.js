import styled from "styled-components";
import Link from "./Link";

//sample img
import ProjectName from "./ProjectName";
import TagContainer from "./TagContainer";

const DetailContainer = styled.div`
  display: flex;
  width: 70%;
  height: fit-content;
  margin-bottom: 20px;
  border-radius: 3px;
  // box-shadow: 0 0 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1),
  //   0 4px 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
`;
const DetailLeft = styled.div`
  width: 45%;
`;
const LeftImg = styled.img`
  width: 80%;
  height: 250px;
  margin: 0 0 30px 40px;
  padding: 10px;
  border: 6px dotted #ceb8b8;
  border-radius: 10px;
`;
const Date = styled.div`
  margin-bottom: 40px;
  color: #d3d3d3;
  font-family: "The Jamsil 2 Light";
  font-size: 17px;
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
`;

const LinkList = styled.div``;
const Name = styled.div``;
const DetailRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  padding-left: 30px;
`;

const DetailContent = (props) => {
  return (
    <DetailContainer>
      <DetailLeft>
        <LeftImg src={props.src}></LeftImg>
        <LeftContent>
          <ProjectName name={props.name} type={props.type} />
          <Date>{props.date}</Date>
          <LinkList>
            {props.deploy ? <Link name={"Deploy"} url={props.deploy} /> : null}
            {props.velog ? <Link name={"Velog"} url={props.velog} /> : null}
            {props.github ? <Link name={"Github"} url={props.github} /> : null}
            {props.figma ? <Link name={"Figma"} url={props.figma} /> : null}
          </LinkList>
        </LeftContent>
      </DetailLeft>
      <DetailRight>
        <TagContainer
          size={20}
          name={
            props.lang === "한국어" ? "프로젝트 소개" : "Project Introduction"
          }
          content={props.expl}
          lang={props.lang}
        />
        <TagContainer
          size={20}
          name={
            props.lang === "한국어" ? "후기 & 교훈" : "Reviews & What I Learned"
          }
          content={props.reviews}
          lang={props.lang}
        />
        <TagContainer
          small
          size={17}
          name={props.lang === "한국어" ? "구현 기능" : "Funtions"}
          content={props.function}
          lang={props.lang}
        />
        <TagContainer
          size={17}
          name={props.lang === "한국어" ? "기술 스택" : "Technology Stacks"}
          content={props.stacks}
          lang={props.lang}
        />
      </DetailRight>
    </DetailContainer>
  );
};

export default DetailContent;
