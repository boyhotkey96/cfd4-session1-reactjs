import React, { useState, useRef } from "react";

export default function Statetest() {

    // Khai báo một biến trạng thái mới đặt tên là "count"
    const [count = 3, setCount] = useState({
        c: 0
    });
    let [val, setVal] = useState(1);

    // Khai báo một biến Ref mới đặt tên là inputRef
    let inputRef = useRef();
    console.log(inputRef);

    function Increment() {
        count.c += val;
        console.log(count);
        setCount({
            // c: count.c++
            ...count
        });
    }

    // Function: cách 1
    function Example(props) {
        // Bạn có thể sử dụng hooks tại đây
        return <div />
    } 

    // Function: cách 2
    const Example2 = (props) => {
        // Bạn có thể sự dụng hooks tại đây
        return <div />
    }

    function setValue() {
        // setVal(parseInt(inputRef.current.value));
        setVal(parseInt(document.querySelector('.step-input').value));
    }

    return (
        <>
            <input style={{padding: "10px"}} className="step-input" type="number" ref={inputRef} />
            <p style={{fontSize: '26px'}}>Count: {count.c}</p>
            <button style={{color: 'red',fontSize: '26px'}} onDoubleClick={Increment}>Tăng count +</button>
            <br />
            <button style={{color: 'blue',fontSize: '26px'}} onClick={() => {count.c--; setCount({...count})}}>Giảm count -</button>
            <br />
            <button style={{fontSize: '26px'}} onClick={setValue}>Set Value</button>
        </>
    );
}
