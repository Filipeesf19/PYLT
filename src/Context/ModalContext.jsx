import { createContext, useContext } from "react";
import { useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  //Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Years Modal
  const [isYearsClicked, setIsYearsClicked] = useState(false);

  const openYearsModal = () => {
    setIsModalOpen(true);
    setIsYearsClicked(true);
  };

  // Self Awareness Edit Modal
  const [isSelfAwarenessEditClicked, setIsSelfAwarenessEditClicked] =
    useState(false);

  const openSelfAwarenessModal = () => {
    setIsModalOpen(true);
    setIsSelfAwarenessEditClicked(true);
  };

  //To Do Tasks Add Item Modal
  const [isToDoTaskAddClicked, setIsToDoTaskAddClicked] = useState(false);

  const openToDoAddModal = () => {
    setIsModalOpen(true);
    setIsToDoTaskAddClicked(true);
  };

  //Edit Task Item Modal
  const [isEditTaskAddClicked, setIsEditTaskAddClicked] = useState(false);

  const openTaskEditModal = () => {
    setIsModalOpen(true);
    setIsEditTaskAddClicked(true);
  };

  //Weeks Selector Modal
  const [isWeekButtonClicked, setIsWeekButtonClicked] = useState(false);

  const openWeekSelectionModal = () => {
    setIsModalOpen(true);
    setIsWeekButtonClicked(true);
  };

  //Goal Add Item Modal
  const [isAddGoalClicked, setIsAddGoalClicked] = useState(false);

  const openAddGoalModal = () => {
    setIsModalOpen(true);
    setIsAddGoalClicked(true);
  };

  //Edit Goal Item Modal
  const [isEditGoalClicked, setIsGoalClicked] = useState(false);

  const openGoalEditModal = () => {
    setIsModalOpen(true);
    setIsGoalClicked(true);
  };

  //Goal Add Item Modal
  const [isAddGoalAreaClicked, setIsAddGoalAreaClicked] = useState(false);

  const openAddGoalAreaModal = () => {
    setIsModalOpen(true);
    setIsAddGoalAreaClicked(true);
  };

  //Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setIsYearsClicked(false);
    setIsSelfAwarenessEditClicked(false);
    setIsToDoTaskAddClicked(false);
    setIsEditTaskAddClicked(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        isYearsClicked,
        openYearsModal,
        isSelfAwarenessEditClicked,
        openSelfAwarenessModal,
        isToDoTaskAddClicked,
        openToDoAddModal,
        openTaskEditModal,
        isEditTaskAddClicked,
        isWeekButtonClicked,
        openWeekSelectionModal,
        isAddGoalClicked,
        openAddGoalModal,
        isEditGoalClicked,
        openGoalEditModal,
        isAddGoalAreaClicked,
        openAddGoalAreaModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};
