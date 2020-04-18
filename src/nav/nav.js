import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './nav.css'

function Nav() {
  return (
    <nav> 
      <h3> Meal Mapper</h3>
      <Link to='/'> Home</Link>
      <ul className='nav-links'> 
      <Link to='/mealsPlan'> Meals Plan</Link>
      <Link to='/shoppingList'> Shopping List</Link>
      </ul>
    </nav>
  )
}

export default Nav