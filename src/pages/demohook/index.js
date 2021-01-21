import React, { useState, useRef } from 'react'

export default function DemoHook() {

    let [count, setCount] = useState(0);
    let [val = 1, setVal] = useState();
    let inputRef = useRef();
    
    function increment() {
        let inputLength = inputRef.current.value.length;
        inputLength !== 0 ? setVal(val = parseInt(inputRef.current.value)) : setVal(val = 1);
        count += val;
        setCount(count);
    }

    function decrement() {
        let inputLength = inputRef.current.value.length;
        inputLength !==0 ? setVal(val = parseInt(inputRef.current.value)) : setVal(val = 1);
        count -= val;
        setCount(count);
    }

    // function setValue() {
    //     if (inputRef.current.value.length !== 0) {
    //         setVal(parseInt(inputRef.current.value));
    //     } else {
    //         setVal(1);
    //     }
    // }

    return (
        <>  
            <input type="number" style={{padding: 10}} ref={inputRef} />
            Count: {count}
            <br />
            <button onClick={increment} style={{fontSize: 24,border:'2px solid black'}}>Increment</button>
            <span> </span>
            <button onClick={decrement} style={{fontSize: 24,border:'2px solid black'}}>Decrement</button>
            <br />
            {/* <button onClick={setValue} style={{fontSize: 24,border:'2px solid black'}}>SetValue</button> */}
        </>
    )
}
