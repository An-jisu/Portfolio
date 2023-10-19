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
  font-family: Inter;
  font-size: 17px;
  font-weight: 700;
  line-height: normal;
  box-shadow: 4px 0 8px rgba(206, 184, 184, 0.5);
`;

const Category = (props) => {
  return (
    <CategoryBox isSelected={props.isSelected} onClick={props.onClick}>
      {props.name}
    </CategoryBox>
  );
};

export default Category;
