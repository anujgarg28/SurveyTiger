import React, { useEffect, useState } from 'react'

const QuesOption = ({add, sub, name, options, addOption, optionNo}) => {
    const [option, setOption] = useState('');

    useEffect(() => {
        const data = [...options];
        data[optionNo - 1] = option;
        addOption(data);
    }, [option])

    return(
        <div>
        <input
          id="option"
          style={{ marginTop: "10px" }}
          type="text"
          value={option}
          placeholder="Type Answer Here"
          onChange={(e) => setOption(e.target.value)}
        />
        <button style={{padding:'7px'}} onClick={add}>+</button>
        <button style={{padding:'7px'}} onClick={() => sub(name, option)}>-</button>
        </div>
    )
}

export default QuesOption;