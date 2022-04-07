import React from "react";

const Input = (props) => {
    const { type, name, value, reCallback, error } = props;
    const handleInput = (e) => {
        let _ret = {
            name: e.target.name,
            value: e.target.value,
        };
        reCallback(_ret);
    };
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={(e) => handleInput(e)}
            />
            {error && <p>{error}</p>}
        </div>
    );
};

export default Input;
