
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import CountProvider from './CountProvider.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rules from './Rules.jsx';
import PlayNormal from './PlayNormal.jsx';
import PlayHard from './PlayHard.jsx';
import SixLetterWords from './assets/six-letter-words.json';
import SevenLetterWords from './assets/7_letter_words.json';


const normalState = {
    rows: 6,
    columns: 6,
    words: SixLetterWords
};

const hardState = {
    rows: 5,
    columns: 7,
    words: SevenLetterWords
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/play/normal' element={<PlayNormal {...normalState} />} />
          <Route path='/play/hard' element={<PlayHard {...hardState} />} />
        </Routes>
      </Router>
    </CountProvider>
  </React.StrictMode>
);
