import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

export default function Welcome() {
  return (
    <div>
      <header className="App-header">
        <img src="assets/logo.svg" height="100px" alt="delta-logo" />
        <h1>Live Stock Analysis</h1>
        <div>
          <Link to={'/home'}>
            <button className="btn button flat-button">Begin Here</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
