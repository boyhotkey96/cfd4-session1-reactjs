import React, { useState, useRef } from 'react'

export default function Forwardref() {
    let inputRef = useRef();
    let countRef = useRef();
    
    function setBg() {
        countRef.current.style.color = 'blue';
        countRef.current.style.backgroundColor = 'pink';
        inputRef.current.value = 5;
    }

    return (
        <>
            <input type="number" style={{padding: 10}} ref={inputRef} />
            <br />
            <CountRef step={inputRef} ref={countRef} />
            <button onClick={setBg} style={{fontSize: 24,border:'2px solid black'}}>SetBackground</button>
        </>
    )
}

function Count({step, step2, step3}, cRef) {
    // let { step } = props;
    let [count, setCount] = useState(0);

    function increment() {
        step.current.value.length !== 0 ? count += parseInt(step.current.value) : count += 1;
        setCount(count);
    }

    function decrement() {
        step.current.value.length !== 0 ? count -= parseInt(step.current.value) : count -= 1;
        setCount(count);
    }

    return <div ref={cRef}>
            Count: {count}
            <br />
            <button onClick={increment} style={{fontSize: 24,border:'2px solid black'}}>Increment</button>
            <span> </span>
            <button onClick={decrement} style={{fontSize: 24,border:'2px solid black'}}>Decrement</button>
            <br />
    </div>
}

const CountRef = React.forwardRef(Count);