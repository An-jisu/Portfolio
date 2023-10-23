import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: ${(props) => (props.small ? "10px" : "26px")};
`;

const Name = styled.div`
  width: fit-content;
  background-image: linear-gradient(90deg, #30cfd0, #3e0d7a);
  background-size: 100% 50%;
  background-position: bottom;
  background-repeat: no-repeat;
  color: #e0e0e0;
  font-family: "The Jamsil 4 Medium";
  font-size: ${(props) => `${props.size}px`};
  font-weight: 700;
`;
const Content = styled.div`
  color: #d3d3d3;
  font-family: "SUIT-Medium";
  font-size: ${(props) => (props.lang === "한국어" ? "17px" : "18px")};
  text-align: justify;
  text-justify: inter-word;
  //line-height: 23px;
`;
const TagContainer = (props) => {
  const explLines = props.content.split("\n").map((line, index) => (
    <>
      <p style={{ marginBottom: "7px" }} key={index}>
        {line}
      </p>
    </>
  ));
  return (
    <Box small={props.small}>
      <Name size={props.size}>{props.name}</Name>
      <Content lang={props.lang}>{explLines}</Content>
    </Box>
  );
};

export default TagContainer;
