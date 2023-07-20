import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import { useModalContext } from "../../Context/ModalContext";
import {
  deleteData,
  updateData,
  getDocument,
  toDoTaskCol,
  fetchAndSetData,
} from "../../utils/firebase";
import { useTaskContext } from "../../Context/TasksContext";
import { useEffect } from "react";

function ToDoTask({ description, points, isDone, id }) {
  const { openTaskEditModal } = useModalContext();
  const { setClickedToDoItem, setToDoTasksData, clickedToDoItem } =
    useTaskContext();

  //Firebase fetch data and set the state value array equal to the array in the server
  useEffect(() => {
    fetchAndSetData(toDoTaskCol, setToDoTasksData);
  }, []);

  //Open the modal, get the clicked item and set it in the state
  function editClick() {
    openTaskEditModal();
    getDocument("ToDoTaskList", `${id}`, setClickedToDoItem);
  }

  //Get the clicked item, set it in the state and update the document property in the server
  function toggleTask() {
    fetchAndSetData("ToDoTaskList", `${id}`, setClickedToDoItem);
    updateData("ToDoTaskList", id, { isDone: !isDone });
    fetchAndSetData(toDoTaskCol, setToDoTasksData);
  }

  console.log(clickedToDoItem);

  return (
    <Wrapper className="task-container">
      <div
        className={isDone ? "done-btn btn1" : "done-btn btn2"}
        onClick={toggleTask}
      >
        <FaCheck />
      </div>
      <div className="task input1">{description}</div>
      <div className="points input1">{points} pts</div>

      <div className="edit-btn btn1" onClick={editClick}>
        <FaEdit />
      </div>
      <div
        className="delete-btn btn1"
        onClick={() => deleteData("ToDoTaskList", id)}
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

  .task {
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

export default ToDoTask;
