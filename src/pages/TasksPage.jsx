import React from "react";
import styled from "styled-components";
import ToDoTasksContainer from "../components/Tasks/ToDoTasksContainer";
import AddTaskModal from "..//Modals/AddTaskModal";
import Modal from "..//Modals/Modal";
import YearListModal from "..//Modals/YearListModal";
import EditTaskModal from "..//Modals/EditTaskModal";
import WeekSelectionModal from "..//Modals/WeekSelectionModal";
import { getCollection } from "../utils/firebase";
import { useEffect } from "react";
import { useTaskContext } from "../Context/TasksContext";
import { useModalContext } from "../Context/ModalContext";

function TasksPage() {
  const { setToDoTasksData } = useTaskContext();

  //Fetch data from Firebase and set the state value "ToDoTasksData" equal to the array in the server every time the page is rendered
  useEffect(() => {
    getCollection("ToDoTaskList", setToDoTasksData);
  }, []);

  //Get all the modals available in this page
  const {
    isToDoTaskAddClicked,
    isYearsClicked,
    isEditTaskAddClicked,
    isWeekButtonClicked,
  } = useModalContext();

  return (
    <Wrapper>
      <ToDoTasksContainer />
      <Modal>
        {(() => {
          if (isToDoTaskAddClicked) {
            return <AddTaskModal />;
          } else if (isYearsClicked) {
            return <YearListModal />;
          } else if (isEditTaskAddClicked) {
            return <EditTaskModal key={crypto.randomUUID()} />;
          } else if (isWeekButtonClicked) {
            return <WeekSelectionModal />;
          }
        })()}
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

export default TasksPage;
