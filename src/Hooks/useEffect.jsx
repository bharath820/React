import React from 'react'

import {useState, useEffect} from "react";

const UseEffectExample = () => {
    const [data, setData]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    useEffect(()=>{
        const fetchdata= async()=>{
            try{
                const response=await fetch("fetch('https://api.example.com/data')")
                if(!response.ok){
                    throw new Error("network error")
                }
                const data=await response.json();
                setData(data);
                setLoading(false);
            }
            catch(e){
                setError(e);
                setLoading(false);
            }
        };
        fetchdata();
    }, []);

    if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <div>Error: {error.message}</div>;
    }
    
  return (
    <div>
      <ul>
        {data.map(dataItem=>(
<li key={dataItem.id}>{dataItem.name}</li>
        ))}

      </ul>
    </div>
  )
}

export default UseEffectExample
