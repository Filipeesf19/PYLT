import styled from "styled-components";
import { weekList } from "../utils/calculations";
import { useModalContext } from "../Context/ModalContext";
import { useTaskContext } from "../Context/TasksContext";

function WeekSelectionModal() {
  const { closeModal } = useModalContext();

  //Currently Selected week
  const { setToDoListSelectedWeek } = useTaskContext();

  function handleClick(e) {
    const currentWeek = e.target.textContent;
    setToDoListSelectedWeek(currentWeek);
    closeModal();
  }

  return (
    <Wrapper>
      {weekList.map((week, index) => {
        return (
          <li
            key={index}
            id={crypto.randomUUID()}
            className="week"
            onClick={handleClick}
          >
            {week}
          </li>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  .week {
    padding: 5px;
    margin: 5px;
    transition: 0.3s;
    cursor: pointer;
    font-weight: var(--font-weight1);
    display: flex;
    justify-content: center;
  }

  .week:hover {
    background-color: var(--color3);
    color: var(--color4);
  }
`;

export default WeekSelectionModal;
