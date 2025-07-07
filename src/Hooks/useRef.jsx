import React, {useRef} from 'react'

const useRefExample = () => {
        const inputRef=useRef(null);

        const focusInput=()=>{
            inputRef.current.focus();
        }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default useRefExample;
