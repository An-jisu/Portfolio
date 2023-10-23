import styled from "styled-components";

const CategoryBox = styled.div`
  width: 100px;
  display: flex;
  padding: 10px 8px;
  justify-content: center;
  align-items: center;
  border: 0.1px solid #ebebf0;
  border-radius: 8px;
  background: ${(props) => (props.isSelected ? "#3154c1" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  text-align: center;
  font-family: "The Jamsil 5 Bold";
  font-size: 17px;
  font-weight: 700;
  line-height: normal;
  box-shadow: 4px 0 8px rgba(206, 184, 184, 0.5);
  cursor: pointer;
  &:hover {
    border: none;
    box-shadow: 0 0 10px #3154c1, 4px 0 10px #3154c1, 0 10px 10px #3154c1,
      -4px 0 10px #3154c1;
    transform: translate(0, -8%);
  }
`;

const Category = (props) => {
  return (
    <CategoryBox isSelected={props.isSelected} onClick={props.onClick}>
      {props.name}
    </CategoryBox>
  );
};

export default Category;
