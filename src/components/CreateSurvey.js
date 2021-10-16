import React, { useContext, useState } from "react";
import { AppContext } from "../reducers/AppReducer";
import Question from "./Question";

const CreateSurvey = () => {
  const [quesType, setQuesType] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selection, setSelection] = useState(false);
  const {dispatch} = useContext(AppContext);

  const handleChange = ({ target }) => {
    setQuesType(target.value);
  };

  const handleQuesChange = ({ target }) => {
    setQuestion(target.value);
  };

  const addQuestion = () => {
      const ques = {
          quesText : question,
          options : options,
          quesType: quesType
      };

      dispatch({
          type: 'ADD_QUESTION',
          payload: ques
      });

      setOptions([]);
      setQuesType('');
      setQuestion('');
  }

  return (
    <div>
      <select
        name="question"
        onChange={handleChange}
        value={quesType}
        className="selectQuestion"
      >
        <option value="" disabled selected>Select Question Type</option>
        <option value="multi">Multi Select</option>
        <option value="single">Single Select</option>
      </select>

      {quesType && (
        <Question
          quesType={quesType}
          question={question}
          updateQuestion={handleQuesChange}
          options={options}
          addOption={(data) => setOptions(data)}
        />
      )}

      {selection && (
        <div>
          <button onClick={addQuestion}> Add Question </button>
          <button> Publish </button>
        </div>
      )}
    </div>
  );
};

export default CreateSurvey;
