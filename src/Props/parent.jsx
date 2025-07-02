import React from "react";
import Child from "./Props/child.jsx";

function Parent(){

     const meaasge="hello from parent";
return(
    <div>
        <h1>Parent component</h1>
        <Child greating={meaasge} />
    </div>
)
}
export default Parent;
