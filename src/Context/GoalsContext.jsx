import { createContext, useContext, useState } from "react";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  //List of Goals Groups
  const [goalGroups, setGoalGroups] = useState([]);

  //List of Goals
  const [goals, setGoals] = useState([]);

  //Last goal item that was clicked
  const [clickedGoalItem, setClickedGoalItem] = useState({});

  //Last Clicked Goal Group
  const [clickedGoalGroup, setClickedGoalGroup] = useState({});

  return (
    <GoalsContext.Provider
      value={{
        goalGroups,
        setGoalGroups,
        goals,
        setGoals,
        clickedGoalItem,
        setClickedGoalItem,
        clickedGoalGroup,
        setClickedGoalGroup,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => {
  return useContext(GoalsContext);
};
