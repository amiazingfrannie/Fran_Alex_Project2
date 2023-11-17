import React from 'react';
import PlayGame from './PlayGame.jsx';

export default function PlayHard({ rows, columns, words }) {

    return (
        <PlayGame rows={rows} columns={columns} words={words} />
    );
}
