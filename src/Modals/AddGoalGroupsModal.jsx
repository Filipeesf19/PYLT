import { useModalContext } from "../Context/ModalContext";
import { styled } from "styled-components";
import { useRef } from "react";
import { addDocumentNoAutoId } from "../utils/firebase";

function AddGoalAreaModal() {
  const { closeModal } = useModalContext();

  const titleRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const newDocName = title;
    const fields = {};
    addDocumentNoAutoId("GoalGroups", newDocName, fields);
    closeModal();
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <div>Add your goal area</div>
        <input
          className="edit-text input2"
          type="text"
          id="title"
          ref={titleRef}
        />
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

export default AddGoalAreaModal;
