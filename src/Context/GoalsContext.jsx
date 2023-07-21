import { createContext, useContext, useState } from "react";

const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {
  //List of Goals
  const [GoalGroups, setGoalGroups] = useState([]);

  //Last goal item that was clicked
  const [clickedGoalGroup, setClickedGoalGroup] = useState([]);

  //Last Clicked Goal Group
  const [clickedGoalGroups, setClickedGoalGroups] = useState({});

  return (
    <GoalsContext.Provider
      value={{
        GoalGroups,
        setGoalGroups,
        clickedGoalGroup,
        setClickedGoalGroup,
        clickedGoalGroups,
        setClickedGoalGroups,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export const useGoalsContext = () => {
  return useContext(GoalsContext);
};
