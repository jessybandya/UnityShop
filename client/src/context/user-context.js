import React, { useReducer, createContext } from "react";

export const UserContext = createContext();

//userData = null;
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, [action.payload.key]: action.payload.value };
    //return userData = action.payload;
    case "DEL_USER":
      return { ...state, [action.payload.key]: null };
    default:
      throw new Error();
  }
};

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
