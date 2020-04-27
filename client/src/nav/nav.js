import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav> 
      <h3> Meal Mapper</h3>
      <ul className='nav-links'> 
      <Link to='/'> Home</Link>
      <Link to='/mealsPlan'> Meals Plan</Link>
      <Link to='/shoppingList'> Shopping List</Link>
      </ul>
    </nav>
  )
}

export default Nav