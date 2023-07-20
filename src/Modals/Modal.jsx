import { FaTimes } from "react-icons/fa";
import { useModalContext } from "../Context/ModalContext";
import styled from "styled-components";

function Modal({ children }) {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <Wrapper>
      <div className={isModalOpen ? "modal modal-show" : "modal"}>
        <div className="modal-container">
          <div className="close-modal-container">
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes />
            </button>
          </div>
          {children}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0.5;
    z-index: -1;
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

  .modal-container {
    background-color: var(--color4);
    width: 50vw;
    height: 50vh;
    min-width: 300px;
    min-height: 200px;
    border-radius: var(--borderRadius);
    display: flex;
    flex-flow: column;
  }

  .modal-show {
    opacity: 1;
    visibility: visible;
    z-index: 10;
    transition: opacity 2s;
  }

  .close-modal-container {
    display: flex;
    justify-content: end;
    flex: 0 1 auto;
  }

  .close-modal-btn {
    padding: 5px 5px 0px 5px;
    font-size: var(--big-text);
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--color2);
  }
`;

export default Modal;
