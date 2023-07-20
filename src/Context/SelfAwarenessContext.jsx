import { createContext, useContext } from "react";
import { useState } from "react";

const SelfAwarenessContext = createContext();

export const SelfAwarenessProvider = ({ children }) => {
  //Current item selected
  const [selfAwarenessCurrentItem, setSelfAwarenessCurrentItem] = useState(0);

  //Save the array in a state value
  const [selfAwarenessData, setSelfAwarenessData] = useState([]);

  return (
    <SelfAwarenessContext.Provider
      value={{
        selfAwarenessCurrentItem,
        setSelfAwarenessCurrentItem,
        selfAwarenessData,
        setSelfAwarenessData,
      }}
    >
      {children}
    </SelfAwarenessContext.Provider>
  );
};

export const useSelfAwarenessContext = () => {
  return useContext(SelfAwarenessContext);
};
