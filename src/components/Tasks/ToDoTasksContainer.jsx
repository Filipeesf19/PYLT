import styled from "styled-components";
import ToDoTask from "./ToDoTask";
import { FaCalendarWeek, FaPlusCircle } from "react-icons/fa";
import { useModalContext } from "../../Context/ModalContext";
import { useTaskContext } from "../../Context/TasksContext";

function ToDoTasksContainer() {
  const { openToDoAddModal, openWeekSelectionModal } = useModalContext();
  const { toDoTasksData, setToDoTasksData, toDoListSelectedWeek } =
    useTaskContext();

  return (
    <Wrapper className="to-do-container">
      <div className="header">
        <div></div>
        To Do Tasks ({toDoListSelectedWeek})
        <div className="btn-container">
          <button className="add-task-btn btn3" onClick={openToDoAddModal}>
            <FaPlusCircle />
          </button>
          <button
            className="week-selector-btn btn3"
            onClick={openWeekSelectionModal}
          >
            <FaCalendarWeek />
          </button>
        </div>
      </div>
      <div className="body">
        {toDoTasksData.map((task, index) => {
          const { description, points, week, isDone, id } = task;
          if (week === toDoListSelectedWeek) {
            return (
              <ToDoTask
                key={index}
                id={id}
                description={description}
                points={points}
                isDone={isDone}
                toDoTasksData={toDoTasksData}
                setToDoTasksData={setToDoTasksData}
              />
            );
          }
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  min-height: 40%;
  max-height: 60vh;
  display: flex;
  flex-flow: column;
  background-color: var(--color5);
  border-radius: var(--borderRadius);

  .header {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color3);
    color: var(--color4);
    font-size: var(--medium-text);
    border-radius: var(--borderRadius);
  }

  .body {
    display: grid;
    gap: 5px;
    overflow-y: scroll;
    border-radius: var(--borderRadius);
  }

  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: var(--color5);
  }

  *::-webkit-scrollbar-thumb {
    background-color: var(--color3);
    border-radius: 5px;
  }

  .btn-container {
    display: flex;
    margin-left: 30px;
  }

  .btn3:hover {
    color: var(--color1);
    transform: scale(1.2);
    transition: var(--transition);
  }
`;

export default ToDoTasksContainer;
