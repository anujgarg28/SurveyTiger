import React, { useReducer } from "react";

const initialState = {
  createSurvey: false,
  takeSurvey: false,
  quesArray: []
};

const reducer = (state = initialState, action) => {
    console.log("Action Called", action);
  switch (action.type) {
    case "CREATE_SURVEY":
      return { ...state, createSurvey: true, takeSurvey: false };
    case "TAKE_SURVEY":
      return { ...state, takeSurvey: true, createSurvey: false };
    case "ADD_QUESTION" :
      return {...state, quesArray : [...state.quesArray].push(action.payload)}
    default:
      return state;
  }
}

export const AppContext = React.createContext();

function AppProvider(props) {
    const [appState, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <AppContext.Provider value={{appState, dispatch}}>
                {props.children}
            </AppContext.Provider>
        </div>
    )
}

export default AppProvider;
