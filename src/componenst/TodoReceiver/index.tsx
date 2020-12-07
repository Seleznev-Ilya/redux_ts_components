import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../actions";
import { selectAllTodo } from "../../actions";

import Textinput from "../TextInput";
import selectImg from "../../asset/images/select.svg";
import unselectImg from "../../asset/images/unselect.svg";

import styled, { css, keyframes } from "styled-components";

const TodoReceiver = () => {
  const todoList = useSelector((store: any) => store.todoList);
  const dispatch = useDispatch();
  const [selectButton, setSelectButton] = useState(true);

  const selectButtonHendel = () => {
    setSelectButton(!selectButton);
    dispatch(selectAllTodo());
  };

  const animation = keyframes`
  0% {
    opacity: ${selectButton ? "1" : "0"};
  }

  100 {
    opacity: 1;
  }
`;
  const animationRule = css`
    ${animation} 1s;
  `;
  /* ${animationRule} */
  const ImgStyle = styled.img`
    opacity: ${todoList.length ? "1" : "0"};
    animation: ${animationRule};
    cursor: pointer;
    width: 29px;
    height: auto;
    padding: 1px 0 4px 4px;
  `;

  return (
    <div className="receiver">
      <ImgStyle
        className="select"
        onClick={selectButtonHendel}
        src={selectButton ? unselectImg : selectImg}
        alt="selectImg"
      ></ImgStyle>
      <Textinput placeHolder={"Add task here"} action={addTodo} />
    </div>
  );
};

export default memo(TodoReceiver);
