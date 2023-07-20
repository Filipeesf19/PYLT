import { FaAngleDoubleRight } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Modal from "../Modals/Modal";
import SelfAwarenessEditModal from "../Modals/SelfAwarenessEditModal";
import { useEffect } from "react";
import { useModalContext } from "../Context/ModalContext";
import styled from "styled-components";
import { fetchAndSetData } from "../utils/firebase";
import { selfAwarenessCol } from "../utils/firebase";
import YearListModal from "../Modals/YearListModal";
import { useSelfAwarenessContext } from "../Context/SelfAwarenessContext";

function SelfAwarenessPage() {
  //Know whether the modal is open or not
  const { openSelfAwarenessModal, isSelfAwarenessEditClicked } =
    useModalContext();

  const {
    selfAwarenessCurrentItem,
    setSelfAwarenessCurrentItem,
    selfAwarenessData,
    setSelfAwarenessData,
  } = useSelfAwarenessContext();

  //Firebase fetch data and set the state value array equal to the array in the server
  useEffect(() => {
    fetchAndSetData(selfAwarenessCol, setSelfAwarenessData);
  }, []);

  // get text, description and text from current item
  let currentItem = selfAwarenessData[selfAwarenessCurrentItem];
  const { title, description, text } = currentItem ?? {};

  return (
    <Wrapper>
      <div className="self-awareness-wrap">
        {/* button container */}
        <div className="buttons-container">
          <ul>
            {selfAwarenessData.map((section, index) => {
              const { title } = section;
              return (
                <li
                  key={index}
                  onClick={() => setSelfAwarenessCurrentItem(index)}
                  className={
                    index === selfAwarenessCurrentItem
                      ? "self-awareness-btn self-awareness-active-btn"
                      : "self-awareness-btn"
                  }
                >
                  <FaAngleDoubleRight />
                  <p>{title}</p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* content container */}
        <div className="self-awareness-container">
          <div className="self-awareness-title">
            <h2>{title}</h2>
            <div
              className="self-awareness-edit btn1"
              onClick={openSelfAwarenessModal}
            >
              <FaEdit />
            </div>
          </div>
          <div className="self-awareness-description text1">{description}</div>
          <div className="self-awareness-text text1">{text}</div>
        </div>
      </div>
      <Modal>
        {isSelfAwarenessEditClicked ? (
          <SelfAwarenessEditModal
            key={selfAwarenessCurrentItem}
            currentItem={currentItem}
            title={title}
            text={text}
          />
        ) : (
          <YearListModal />
        )}
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;

  .self-awareness-wrap {
    max-width: var(--max-width);
    min-width: 80%;
    min-height: 500px;
    column-gap: 3rem;
    color: var(--color1);
    display: grid;
    grid-template-columns: 300px 1fr;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .self-awareness-btn {
    list-style-type: none;
    margin: 1rem;
    padding: 20px;
    gap: 15px;
    cursor: pointer;
    display: flex;
    justify-content: start;
    align-items: center;
    text-transform: capitalize;
    transition: var(--transition);
    font-size: var(--medium-text);
  }

  .self-awareness-active-btn {
    text-decoration: underline;
  }

  .self-awareness-btn:hover {
    transform: translateX(5px);
  }

  .self-awareness-title {
    margin-bottom: 1rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    font-size: var(--big-text);
  }

  .self-awareness-description {
    margin-bottom: 1rem;
  }

  .self-awareness-title {
    display: flex;
    justify-content: space-between;
  }

  .self-awareness-edit {
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    .self-awareness-wrap {
      display: block;
      width: 70vw;
      gap: 1rem;
    }
    .buttons-container ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }

    .self-awareness-btn {
      margin: 0;
    }
  }
`;

export default SelfAwarenessPage;
