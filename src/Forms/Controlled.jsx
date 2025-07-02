import React, { useState } from "react";

function Controlled() {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter text:
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {submittedValue && (
                <p>You submitted: {submittedValue}</p>
            )}
        </div>
    );
}

export default Controlled;