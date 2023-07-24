import { useModalContext } from "../Context/ModalContext";
import { styled } from "styled-components";
import { useRef } from "react";
import { addSubCollection } from "../utils/firebase";
import { useGoalsContext } from "../Context/GoalsContext";

function AddGoalModal() {
  const { closeModal } = useModalContext(); //Close the Modal
  const { clickedGoalGroup } = useGoalsContext(); //Last clicked goal group
  const goalRef = useRef(null); //goal description ref (input field)
  const pointsRef = useRef(null); //points ref (input field)

  //Add the data in the input fields as properties of the new goal object in the server
  function handleSubmit(e) {
    e.preventDefault();
    const goal = goalRef.current.value;
    const points = pointsRef.current.value;
    const newData = {
      description: `${goal}`,
      points: `${points}`,
      isDone: false,
    };
    addSubCollection(
      "GoalGroups",
      `${clickedGoalGroup.id}`,
      "GoalList",
      newData
    );
    closeModal();
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div>Add your goal</div>

        <input
          className="edit-text input2"
          type="text"
          id="goal"
          ref={goalRef}
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

export default AddGoalModal;
