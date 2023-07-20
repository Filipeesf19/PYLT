import { createContext, useContext } from "react";
import { useState } from "react";
import { weekList } from "../utils/calculations";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  //List of To Do tasks
  const [toDoTasksData, setToDoTasksData] = useState([]);

  //Current Week selected on To Do List
  const [toDoListSelectedWeek, setToDoListSelectedWeek] = useState(weekList[0]);

  //List of To Do tasks
  const [clickedToDoItem, setClickedToDoItem] = useState([]);

  return (
    <TaskContext.Provider
      value={{
        toDoTasksData,
        setToDoTasksData,
        toDoListSelectedWeek,
        setToDoListSelectedWeek,
        clickedToDoItem,
        setClickedToDoItem,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
