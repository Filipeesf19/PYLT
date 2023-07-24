import styled from "styled-components";
import { useGoalsContext } from "../Context/GoalsContext";
import { useRef } from "react";
import { updateData } from "../utils/firebase";
import { useModalContext } from "../Context/ModalContext";

function EditGoalModal() {
  const { clickedGoalItem } = useGoalsContext();
  const { closeModal } = useModalContext();

  const goalRef = useRef(null);
  const pointsRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const goal = goalRef.current.value;
    const points = pointsRef.current.value;
    const id = clickedGoalItem.id;
    const newData = {
      description: `${goal}`,
      points: `${points}`,
    };
    updateData("GoalGroups", `${id}`, newData);
    closeModal();
  }

  console.log(clickedGoalItem);
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="edit-text input2"
          type="text"
          id="goal"
          ref={goalRef}
          defaultValue={clickedGoalItem.description}
        />
        <div className="points-container">
          <div className="points-text">Points</div>
          <input
            type="text"
            className="points-input input2"
            id="points"
            ref={pointsRef}
            defaultValue={clickedGoalItem.points}
          />
        </div>
        <button className="confirm-btn btn4">
          <div className="confirm-button-text">Confirm</div>
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

export default EditGoalModal;
