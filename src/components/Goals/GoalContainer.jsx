import { styled } from "styled-components";
import GoalItem from "./GoalItem";
import { useGoalsContext } from "../../Context/GoalsContext";
import { useModalContext } from "../../Context/ModalContext";
import { FaPlusCircle } from "react-icons/fa";
import { getDocument } from "../../utils/firebase";

function GoalContainer({ title }) {
  const { GoalGroups, setClickedGoalGroups, clickedGoalGroups } =
    useGoalsContext();
  const { openAddGoalModal } = useModalContext();

  function addButtonClick() {
    getDocument("GoalGroups", `${title}`, setClickedGoalGroups);
    openAddGoalModal();
  }

  return (
    <Wrapper className="goal-container">
      <div className="header">
        <div></div>
        <div className="title">{title}</div>
        <button className="add-task-btn btn3" onClick={addButtonClick}>
          <FaPlusCircle />
        </button>
      </div>
      <div className="body">
        {GoalGroups.map((goal, index) => {
          const { description, points, isDone, id } = goal;
          return (
            <GoalItem
              key={index}
              id={id}
              description={description}
              points={points}
              isDone={isDone}
            />
          );
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
    justify-content: space-around;
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
`;

export default GoalContainer;
