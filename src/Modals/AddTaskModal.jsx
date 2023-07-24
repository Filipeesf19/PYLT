import styled from "styled-components";
import { useRef } from "react";
import { useModalContext } from "../Context/ModalContext";
import { addDocumentAutoId } from "../utils/firebase";
import { useTaskContext } from "../Context/TasksContext";

function AddTaskModal() {
  const { closeModal } = useModalContext(); //Modal to close when form is submitted
  const { toDoListSelectedWeek } = useTaskContext(); //Get last week clicked, so we can add it to the property of the task

  const taskRef = useRef(null); //Task description reference initialization (input text)
  const pointsRef = useRef(null); //Task points reference initialization (input text)

  function handleSubmit(e) {
    e.preventDefault();
    const task = taskRef.current.value; //Task description reference initialization (input text)
    const points = pointsRef.current.value; //Task points reference initialization (input text)
    const newData = {
      description: `${task}`,
      points: `${points}`,
      week: `${toDoListSelectedWeek}`,
      isDone: false,
    }; //define the new data
    addDocumentAutoId("ToDoTaskList", newData); //Add the new document to the "toDoTaskList" collection
    closeModal(); //close modal
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
