import React, { useContext } from "react";
import { AppContext } from "../reducers/AppReducer";

const Home = () => {
    const {dispatch} = useContext(AppContext);
  
  return (
    <div align="center">
      <button
        className="mainBtn"
        onClick={() => dispatch({ type: "CREATE_SURVEY" })}
      >
        Create Survey </button>
      <br />
      <button
        className="mainBtn"
        onClick={() => dispatch({ type: "TAKE_SURVEY" })}
      >
        Take Survey
      </button>
    </div>
  );
};

export default Home;
