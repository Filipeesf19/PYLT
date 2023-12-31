import React from "react";
import { styled } from "styled-components";
import { FaEdit, FaTrashAlt, FaCheck } from "react-icons/fa";
import { useGoalsContext } from "../../Context/GoalsContext";
import { updateData, getCollection } from "../../utils/firebase";
import { useModalContext } from "../../Context/ModalContext";
import { getDocument } from "../../utils/firebase";
import { deleteData } from "../../utils/firebase";

function GoalItem({ description, points, isDone, id, path }) {
  const { openGoalEditModal } = useModalContext();

  const { setClickedGoalItem } = useGoalsContext();

  //Open the modal, get the clicked item and set it in the state
  function editClick() {
    openGoalEditModal();
    getDocument(`${path}`, `${id}`, setClickedGoalItem);
  }

  //Get the clicked item, set it in the state and update the document property in the server
  function toggleTask() {
    getCollection(`${path}`, `${id}`, setClickedGoalItem);
    updateData(`${path}`, `${id}`, { isDone: !isDone });
  }

  return (
    <Wrapper>
      <div
        className={isDone ? "done-btn btn1" : "done-btn btn2"}
        onClick={toggleTask}
      >
        <FaCheck />
      </div>
      <div className="goal input1">{description}</div>
      <div className="points input1">{points} pts</div>
      <div className="edit-btn btn1" onClick={editClick}>
        <FaEdit />
      </div>
      <div
        className="delete-btn btn1"
        onClick={() => deleteData(`${path}`, id)}
      >
        <FaTrashAlt />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 10px;
  height: 45px;

  .goal {
    padding: 5px;
    height: auto;
    flex-grow: 1;
    font-size: var(--small-text);
    letter-spacing: var(--letterSpacing);
    margin: 0px 10px;
  }

  .points {
    padding: 5px;
    margin: 0 10px;
  }

  .done-btn {
  }

  .delete-btn {
    margin: 0 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edit-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GoalItem;
