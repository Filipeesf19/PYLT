import { useModalContext } from "../Context/ModalContext";
import styled from "styled-components";
import { useRef } from "react";
import { updateData } from "../utils/firebase";

function SelfAwarenessEditModal({ title, currentItem, text }) {
  const { setIsModalOpen } = useModalContext();
  const ref = useRef(null);
  const id = currentItem?.id;

  //When submit occurs, grab the value from the input and update the text in the server. In the end, close modal.
  function handleSubmit(e) {
    e.preventDefault();
    const inputText = ref.current.value;
    const newData = { text: `${inputText}` };
    updateData("SelfAwarenessText", `${id}`, newData);
    setIsModalOpen(false);
  }

  return (
    <Wrapper>
      <div className="self-awareness-edit-header text1">
        edit text ({title})
      </div>
      <form onSubmit={handleSubmit} className="self-awareness-edit-form">
        <textarea
          className="self-awareness-edit-text input2"
          type="textarea"
          id="inputText"
          ref={ref}
          defaultValue={text}
        />
        <button type="submit" className="self-awareness-close-btn btn4">
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column;

  .self-awareness-edit-header {
    text-transform: capitalize;
    text-align: center;
  }

  .self-awareness-edit-form {
    flex: 1 1 auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 15px;
  }

  .self-awareness-edit {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  }

  .self-awareness-edit-text {
    width: 90%;
    height: 100%;
    margin: 30px auto;
  }

  .self-awareness-close-btn {
    min-width: 50px;
    margin: 0px auto 10px;
  }
`;

export default SelfAwarenessEditModal;
