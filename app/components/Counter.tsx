"use client";
import { useState } from "react";
type Props = {}


const Counter = (props: Props) => {
    const [count,setCount]=useState(0)
  return (
    <div className="flex flex-col justify-center items-center 
    border-2 px-10 py-10 w-[300px] mx-auto my-5 rounded-md 
    shadow-lg">
        <p>{count}</p>
        <button onClick={()=>(setCount(count+1))}>Increase Value</button>
    </div>
  )
};

export default Counter;