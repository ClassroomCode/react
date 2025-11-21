import { useState } from "react";

export function Counter(props: any) {
    const [count, setCount] = useState(props.count);

    function inc() {
        return props.inc;
    }

    const increment = () => {
        setCount((prev: any) => prev + inc());
    };

    const decrement = () => {
        setCount((prev: any) => prev - 1);
    };

    const restart = () => {
        setCount(0);
    };

    const switchSigns = () => {
        setCount((prev: any) => prev * -1);
    };

    return (
        <div>
            <h1>Count: <span data-testid="count">{count}</span></h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={restart}>Restart</button>
                <button onClick={switchSigns}>Switch Signs</button>
            </div>
        </div>
    );
}