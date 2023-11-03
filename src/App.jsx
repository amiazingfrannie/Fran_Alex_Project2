import { useContext, useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import CountText from './CountText';
import './App.css'
import { CountContext } from './CountProvider';
import Header from './Header';
import React from 'react';
import { Link } from 'react-router-dom';


// App() homepage
export default function App() {

  const [blackOutState, setBlackedOutState] = useState(false);
  const [countState, setCountState] = useContext(CountContext)

  // let isBlackedOut = false;

  function reverseIsBlackedOut() {
    setBlackedOutState(!blackOutState);
    // -results in App() getting rerun
    // isBlackedOut = !isBlackedOut;
    // console.log(isBlackedOut);
    setCountState(countState + 1);  
  }

  function reset() {
    setCountState(0);
  }

  useEffect(function() {
    if(countState % 10 === 0) console.log("Count state is divisible by 10")
    // console.log("I have been rerendered")
  }, [countState]);

  
  let boxClassName = ''
  if (blackOutState) {
    boxClassName = 'box boxBlackBackground';
  } else {
    boxClassName = 'box';
  }
  
  return (
    <div>
      <Header />
      <CountText color='red' nickname='Bobby' countAmount={countState} >
        <button onClick={() => reset()}>Click to reset</button>
      </CountText>
      <div className={boxClassName} onClick={() => reverseIsBlackedOut()}>
      </div>
    </div>
  )

}

// function App() {
//   // const [count, setCount] = useState(0)
//   // const firstNumber = 11;
//   // const secondNumber = 12;
//   const [randomNumberState, setRandomNumberState] = useState(1)

//   // let randomNumber = Math.floor(Math.random() * 10) + 1;

//   function generateRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 10) + 1;
//     setRandomNumberState(randomNumber);
//   }

//   return (
//     <div>
//       <div>Welcome to my app!  Here is a random number: {randomNumberState}</div>
//       <button onClick={() => generateRandomNumber()}>Click me for random number</button>
//     </div>
//   )
// }

// export default App



// let favFood = 'banana';

// function whatIsMyFavoriteFood() {

//   return favFood + '!';

// }

// const response = whatIsMyFavoriteFood();

// favFood = 'apple';

// console.log(response)


// const favMovies = ['Friday the 13th', 'Nightmare on Elm St', 'Star Wars'];
// // const firstFavMovie = favMovies[0];
// // const secondFavMovie = favMovies[1];

// const [firstFavMovie, secondFavMovie] = favMovies;

// 
{/* <Calculator>

</Calculator>

function Calculator() {
  // state = current number, function histrory
  return (
    <div>
      <Display />
      <Buttons />
    </div>
  )
}

function Display() {
  return <div>Current Display ?</div>
}

function Buttons() {

  return (
    <div>
      <NumberButtons />
      <AddButton />
      <MinusButton />
    </div>
  )
} */}