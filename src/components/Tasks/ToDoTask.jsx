import { FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import styled from "styled-components";
import { useModalContext } from "../../Context/ModalContext";
import {
  deleteData,
  updateData,
  getDocument,
  getCollection,
} from "../../utils/firebase";
import { useTaskContext } from "../../Context/TasksContext";

function ToDoTask({ description, points, isDone, id }) {
  const { openTaskEditModal } = useModalContext(); //Open the edit Modal when clicking the edit button on the single item
  const { setClickedToDoItem } = useTaskContext(); //get last item clicked so we can update its properties

  //Open the modal, get the clicked item and set it in the state
  function editClick() {
    openTaskEditModal();
    getDocument("ToDoTaskList", `${id}`, setClickedToDoItem);
  }

  //Get the clicked item and set it in the state
  function toggleTask() {
    getCollection("ToDoTaskList", `${id}`, setClickedToDoItem);
    updateData("ToDoTaskList", `${id}`, { isDone: !isDone });
  }

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
