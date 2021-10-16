import React, { useContext } from "react";
import Home from "./components/Home";
import { AppContext } from "./reducers/AppReducer";
import CreateSurvey from "./components/CreateSurvey";
import TakeSurvey from "./components/TakeSurvey";

const App = () => {
  const {appState} = useContext(AppContext);
    
  return (
    <div align="center">
      <h1 style={{ textAlign: "center" }}> Survey Tiger</h1> <hr />
      {!appState.createSurvey && !appState.takeSurvey && <Home/>}
      {appState.createSurvey && <CreateSurvey/>}
      {appState.takeSurvey && <TakeSurvey/>}
    </div>
  );
};

export default App;
