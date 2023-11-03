
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CountProvider from './CountProvider.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './Info.jsx';
import PlayNormal from './PlayNormal.jsx';

const normalState = {
    rows: 6,
    columns: 6,
    words: ["banana", "strike", "wordle", "bottom"]
};

const hardState = {
    rows: 5,
    columns: 7,
    words: ["sneaker", "notable", "expense"]
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/info' element={<Info />} />
          <Route path='/play/normal' element={<PlayNormal {...normalState} />} />
          {/* <Route path='/play/hard' element={<PlayHard {...hardState} />} /> */}
        </Routes>
      </Router>
    </CountProvider>
  </React.StrictMode>
);

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import CountProvider from './CountProvider.jsx'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Info from './Info.jsx'
// import PlayNormal from './PlayNormal.jsx'
// import GamePage from './freecode/GamePage.jsx'
// import PlayHard from './PlayHard.jsx'
// import './index.css'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: '/info',
//     element: <Info />
//   },
//   {
//     path: '/play/normal',
//     element: <PlayNormal />,
//     render: <PlayNormal {...normalState} />,
//   },
//   {
//     path: '/play/hard',
//     element: <PlayHard />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <CountProvider>
//       <RouterProvider router={router} />
//       {/* <App /> same as calling App() */}
//     </CountProvider>
//   </React.StrictMode>
// )
