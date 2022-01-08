import { useState } from 'react'
export default function Counter() {
    const [counter, setCounter] = useState(0)

    let increamentCount = () => {
        setCounter(counter+1)
    }
    let decreamentCount = () => {
        setCounter(counter-1)
    }
    
    return (
        <div>
            <button onClick={increamentCount}>+</button>
            <p>Count: {counter}</p>
            <button onClick={decreamentCount}>-</button>
        </div>
    )
}

