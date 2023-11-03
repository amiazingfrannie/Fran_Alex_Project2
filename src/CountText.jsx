import { useContext } from "react"
import { CountContext } from "./CountProvider"

export default function CountText() {
    const [countState, setCountState] = useContext(CountContext)

    function resetCount() {
        setCountState(0);
    }

    return (
        <div>
            <button onClick={() => resetCount()}>Reset</button>
            <div>You have clicked this box {countState} times</div>
        </div>
    )
}

// function topLevelFunction() {
//     console.log("first");
//     secondLevelFunction();
// }

// function secondLevelFunction() {
//     console.log('second');
//     thirdLevelFunction();
// }

// function thirdLevelFunction() {
//     console.log('third');
// }


// topLevelFunction()