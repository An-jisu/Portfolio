import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 80%;
  margin-bottom: 8px;
`;
const Tag = styled.div`
  width: fit-content;
  padding: 3px;
  border-radius: 20px;
  background: #ccc;
  color: black;
  font-family: "The Jamsil 3 Regular";
  font-weight: 700;
`;
const URLBox = styled.div`
  width: 100%;
  height: 23px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const URL = styled.a`
  color: gray;
  font-family: "The Jamsil 3 Regular";
  font-size: 16px;
`;

const Link = (props) => {
  return (
    <Container>
      <Tag>{props.name}</Tag>
      <URLBox>
        <URL href={props.url}>{props.url}</URL>
      </URLBox>
    </Container>
  );
};

export default Link;
