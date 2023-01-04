import React, { useState, useEffect } from "react";

const UseEffectExample = () => {

    const [count, setCount] = useState(1);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
       setCalculation(()=>count*5) 
    },[count])
    
    const buttonHandler = () => {
        setCount(c => c+1)
    }

    return (
      <div>
        <h3>Count: {count}</h3>
        <button onClick={buttonHandler}>+</button>
        <h3>Calculation: {calculation}</h3>
      </div>
    );
}

export default UseEffectExample;