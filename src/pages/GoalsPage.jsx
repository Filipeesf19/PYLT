import { styled } from "styled-components";
import GoalContainer from "../components/Goals/GoalContainer";
import { useModalContext } from "../Context/ModalContext";
import { useGoalsContext } from "../Context/GoalsContext";
import { useEffect } from "react";
import Modal from "../Modals/Modal";
import AddGoalModal from "../Modals/AddGoalModal";
import { getCollection } from "../utils/firebase";
import EditGoalModal from "../Modals/EditGoalModal";
import AddGoalGroupModal from "../Modals/AddGoalGroupModal";

function GoalsPage() {
  const {
    openAddGoalModal,
    openAddGoalGroupModal,
    isYearsClicked,
    isAddGoalClicked,
    isEditGoalClicked,
    isAddGoalGroupClicked,
  } = useModalContext();

  const { goalGroups, setGoalGroups } = useGoalsContext();

  //Firebase fetch data and set the state value array equal to the array in the server
  useEffect(() => {
    getCollection("GoalGroups", setGoalGroups);
  }, []);

  return (
    <Wrapper>
      <div className="btns-container">
        <button className="btn4" onClick={openAddGoalGroupModal}>
          Add
        </button>
        <button className="btn4" onClick={openAddGoalModal}>
          Remove
        </button>
      </div>
      <div className="body">
        {goalGroups?.map((goalGroup) => {
          return (
            <GoalContainer
              key={goalGroup.id}
              title={goalGroup.id}
              path={`GoalGroups/${goalGroup.id}/GoalList`}
            />
          );
        })}
      </div>
      <Modal>
        {(() => {
          if (isAddGoalClicked) {
            return <AddGoalModal />;
          } else if (isYearsClicked) {
            return <YearListModal />;
          } else if (isEditGoalClicked) {
            return <EditGoalModal />;
          } else if (isAddGoalGroupClicked) {
            return <AddGoalGroupModal />;
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

  .btns-container {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .body {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 30px;
  }
`;

export default GoalsPage;
