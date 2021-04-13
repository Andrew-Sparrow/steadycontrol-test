import React from 'react';
// import he from 'he';

const header = () => (
  <header className="header">
    <h1 className="header__title">Our Latest Developments</h1>
    <label className="header__label" htmlFor="filter">Filter</label>
    <input className="header__filter" id="filter" name="filter" type="text" />
  </header>
);

export default header;
