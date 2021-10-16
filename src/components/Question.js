import React, { useEffect, useState } from 'react'
import QuesOption from './QuesOption';

const Question = ({quesType, question, updateQuestion, options, addOption}) => {  
    const [myOptions, setMyOptions] = useState([{value: 'option1', option: 1}]);
    const [optionNo, setOptionNo] = useState(1);

    useEffect(() => {
        if(quesType == 'single') {
            add();
        }
    }, []);
    
    const add = () => {
        console.log("Method Called");
        const opts = [...myOptions];
        const newOption = {
            value : `option${optionNo+1}`,
            option : optionNo + 1
        }
        opts.push(newOption)
        setMyOptions(opts);
        setOptionNo(optionNo + 1);
    };

    const sub = (optionValue, optionType) => {
        const validOptions = myOptions.filter((opt) => opt.value != optionValue);
        setMyOptions(validOptions);

        const data = options.filter((opt) => opt != optionType);
        addOption(data);
    };
    
    return (
      <div className="quesDiv">
        <input
          id="question"
          type="text"
          value={question}
          placeholder="Enter Question"
          onChange={updateQuestion}
        />
        <br /><span style={{fontSize: '20px'}}>Options </span> <br />
        {myOptions.map((option) => {
            return(
                <QuesOption 
                    key={option.value} 
                    add={add} 
                    sub={sub} 
                    name={option.value} 
                    optionNo={option.option}
                    options={options}
                    addOption={addOption}
                />
            )
        })}
      </div>
    );
}

export default Question;