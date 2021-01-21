import React, { useState, useRef } from 'react'

export default function Forwardreftest() {
    let inputRef = useRef();
    let countRef = useRef();

    function setBackground() {
        countRef.current.style.color = 'blue';
        countRef.current.style.backgroundColor = 'pink';
        inputRef.current.value = 5;
    }

    return (
        <>
            <input type="number" style={{padding: 10}} ref={inputRef} />
            <CountRef step={inputRef} ref={countRef} />
            <button onClick={setBackground} style={{fontSize: 24,border:'2px solid black'}}>setBackground</button>
        </>
    )
}

const CountRef = React.forwardRef((props, cRef) => {
    let [count, setCount] = useState(Number);
    
    function increment() {
        console.log(props.step);
        props.step.current.value.length !== 0 ? count += parseInt(props.step.current.value) : count += 1;
        setCount(count);
    }

    function decrement() {
        props.step.current.value.length !== 0 ? count -= parseInt(props.step.current.value) : count -= 1;
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
});