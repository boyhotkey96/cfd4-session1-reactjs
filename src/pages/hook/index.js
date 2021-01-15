import React, { useState } from "react";

export default function Demo() {

    // Khai báo một biến trạng thái mới đặt tên là "count"
    const [count = 3, setCount] = useState({
        c: 0
    });

    function Increment() {
        // count.c++;
        // console.log(count);
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

    return (
        <>
            <p style={{fontSize: '26px'}}>Count: {count.c}</p>
            <button style={{color: 'red',fontSize: '26px'}} onDoubleClick={Increment}>Tăng count +</button>
            <br />
            <button style={{color: 'blue',fontSize: '26px'}} onClick={() => setCount(count - 1)}>Giảm count -</button>
        </>
    );
}
