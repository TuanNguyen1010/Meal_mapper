import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";


function Nav() {
  return (
    <nav data-test='Nav-Bar'> 
      <h1> Meal Mapper</h1>
      <ul className='nav-links'> 
      <Link className='nav-link' to='/'> Home</Link>
      <Link className='nav-link' to='/mealsPlan'> Meals Plan</Link>
      <Link className='nav-link' to='/shoppingList'> Shopping List</Link>
      </ul>
    </nav>
  )
}

export default Nav