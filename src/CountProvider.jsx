import { createContext, useState } from "react"
import App from "./App";

export const CountContext = createContext();

export default function CountProvider(props) {

    const [countState, setCountState] = useState(0);
    
    return (
        <CountContext.Provider value={[countState, setCountState]}>
            {props.children}
        </CountContext.Provider>
    )
}



// CountProvide
//  -> App.jsx
//     -> CountText.jsx

// https://www.amazon.com/dp/B0C7WNMCSC

// https://www.amazon.com/MARVELS-SPIDER-MAN-2-Launch-PlayStation-5/dp/B0C7WNMCSC/ref=sr_1_2?keywords=spiderman+2&qid=1698632522&sr=8-2&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc