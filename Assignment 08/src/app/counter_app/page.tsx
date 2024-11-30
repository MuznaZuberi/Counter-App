"use client";
import {useState} from "react";

export default function CounterApp() {
  
  const [count, setCount] = useState(0);

  // Increment Function
  function IncrementCounter() {
    setCount(count + 1);
  }

 
 // Decrement Function
 function DecrementCounter() {
    setCount(count - 1);
  }
  return (
       <div className = "counter-container shadow-xl mx-auto lg:w-[40%] md:w-[40%] w-[80%] mt-40 py-20 bg-white rounded-2xl border border-3">
       <h1 className = "font-bold font-serif lg:text-4xl md:text-4xl text-2xl text-center  mb-10">Counter App</h1>
       <p className = "font-bold font-serif text-6xl text-center mb-10">{count}</p>
       <div className = "flex flex-wrap justify-center gap-10 px-2">
       <div className = "bg-black text-white lg:px-10 lg:py-3 md:px-10 md:py-3 px-4 py-2 border border-black text-center rounded-xl font-bold font-serif hover:bg-white hover:text-black hover:border-1">
       <button onClick = {()=>IncrementCounter()}>Increment</button>
       </div>
       <div className = "bg-black text-white lg:px-10 lg:py-3 md:px-10 md:py-3 px-4 py-2 border border-black text-center rounded-xl font-bold font-serif hover:bg-white hover:text-black hover:border-1">
       <button onClick = {()=>DecrementCounter()}>Decrement</button>
       </div>
       </div>
       </div> 
   );
}