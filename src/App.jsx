// Potential HomePage File
import { useContext, useEffect, useState } from 'react'
import CountText from './CountText';
import './App.css'
import { CountContext } from './CountProvider';
import Header from './Header';
import React from 'react';
import NavBar from './NavBar/NavBar';


// homepage
export default function App() {

  return (
    <div>
        {/* <NavBar /> */}
      <Header />
      {/* <CountText color='red' nickname='Bobby' countAmount={countState} >
        <button onClick={() => reset()}>Click to reset</button>
      </CountText>
      <div className={boxClassName} onClick={() => reverseIsBlackedOut()}>
      </div> */}
    </div>
  )

}

