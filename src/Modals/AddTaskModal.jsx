import styled from "styled-components";
import { toDoTaskCol } from "../utils/firebase";
import { useRef } from "react";
import { useModalContext } from "../Context/ModalContext";
import { addData } from "../utils/firebase";
import { useTaskContext } from "../Context/TasksContext";

function AddTaskModal() {
  const { closeModal } = useModalContext();
  const { toDoListSelectedWeek } = useTaskContext();

  const taskRef = useRef(null);
  const pointsRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const task = taskRef.current.value;
    const points = pointsRef.current.value;
    const week = toDoListSelectedWeek;
    const newData = {
      description: `${task}`,
      points: `${points}`,
      week: `${week}`,
      isDone: false,
    };
    addData(toDoTaskCol, newData);
    closeModal();
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="edit-text input2"
          type="text"
          id="task"
          ref={taskRef}
        />
        <div className="points-container">
          <div className="points-text">Points</div>
          <input
            type="text"
            className="points-input input2"
            id="points"
            ref={pointsRef}
          />
        </div>
        <button className="add-btn btn4">
          <div className="add-button-text">Add</div>
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  .form {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .edit-text {
    width: 90%;
    height: 50px;
    margin: 10px auto;
  }

  .btns-container {
  }

  .points-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .points-text {
    margin: 5px;
    font-size: var(--medium-text);
  }

  .points-input {
    height: 50%;
    width: 80px;
    text-align: center;
  }

  .points-container {
    display: flex;
  }
`;

export default AddTaskModal;
