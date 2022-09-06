import data from "./universiteler.json"

import React from 'react';

const UniOptions = () => {
    return (
        <React.StrictMode>
            {data.map((data, key) => {
                return <option value={key} key={key}>{data}</option>
            })}
        </React.StrictMode>
    );
};

export default UniOptions;