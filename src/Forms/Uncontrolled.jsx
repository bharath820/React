import React, { useRef } from "react";

function Uncontrolled() {
    const inputRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Input Value: ${inputRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" ref={inputRef} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Uncontrolled;