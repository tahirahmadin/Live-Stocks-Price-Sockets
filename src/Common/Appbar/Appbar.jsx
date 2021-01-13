import React from 'react';
import { Link } from 'react-router-dom';
import './Appbar.css';

function Appbar() {
  return (
    <div className="container-fluid appbar">
      <section className="py-1 pl-md-3 pr-md-3 pt-1">
        <nav className="container">
          <div className="row justify-content-between">
            <div className="col col-md-1 pr-0">
              <Link to="/">
                <h2 style={{ color: 'white' }} className="appbar-title">
                  Delta <strong style={{ color: '#66bb6a', fontSize: 36 }}>.</strong>
                </h2>
              </Link>
            </div>
            <div className="col col-md-7 px-md-0 d-block text-white mt-3">
              <div className="d-flex justify-content-start ">
                {' '}
                <p className="px-3">Markets.</p>
                <p className="px-3">Scripts.</p>
                <p className="px-3">Analyser.</p>
                <p className="px-3">Investment Guide.</p>
              </div>
            </div>
            <div className="col-auto text-right pr-0 mt-3">
              <span style={{ color: 'white' }}>Tahir Ahmad</span>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Appbar;
