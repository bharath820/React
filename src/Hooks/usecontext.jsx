import React,{createContext,useContext} from 'react'

const MyContext = createContext("light");


  function TheamButton (){
const theam=useContext(MyContext)
return ( <button style={{background:theam==="dark"?"black":"white",color:theam==="dark"?"white":"black"}}>{theam==="dark"?"Switch to Light":"Switch to Dark"}</button>
  )}

  function App(){
  return (
    <div>
      <MyContext.Provider value="dark"><TheamButton /></MyContext.Provider>
    </div>
  )
}

export default App;
