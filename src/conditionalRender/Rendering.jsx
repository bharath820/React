import React from 'react';


// 1. Using if-else statement
function IfElseExample({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h3>Welcome with if-else!</h3>;
    } else {
        return <h3>Please log in (if-else).</h3>;
    }
}

// 2. Using && operator
function AndOperatorExample({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn && <h3>Welcome with && operator!</h3>}
            {!isLoggedIn && <h3>Please log in (&& operator).</h3>}
        </div>
    );
}

// 3. Using ternary (? :) operator
function TernaryExample({ isLoggedIn }) {
    return (
        <h3>
            {isLoggedIn ? "Welcome with ternary!" : "Please log in (ternary)."}
        </h3>
    );
}

// Example usage
// <IfElseExample isLoggedIn={true} />
// <AndOperatorExample isLoggedIn={false} />
// <TernaryExample isLoggedIn={true} />