import React, { memo } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Number = styled.span`
  color: black;
  margin-left: 6px;
  font-weight: bold;
`;
const QuantityItems = styled.span`
  cursor: pointer;
`;
const QuantityActiveNum = () => {
  const itemlist = useSelector((store: any) => store.todoList);

  const number = () => {
    return itemlist.filter((todo: any) => todo.completed === false).length;
  };
  return (
    <QuantityItems>
      <p>
        <Number>
          <span>{number()} &nbsp;</span>
        </Number>
        items&nbsp;left
      </p>
    </QuantityItems>
  );
};
const QuantityActive = memo(QuantityActiveNum);
export default QuantityActive;
