import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {MenuItems} from "./MenuItems"
import './Navbar.css'


class Navbar extends Component {
state = { clicked: false}

  render(){
    return(
      <nav className ="NavbarItems">
        <h1 className="navbar-logo">HAMSTERS WAR</h1>
        <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'} >
          {MenuItems.map((item, index) => {
            return (
              <li key= {index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link> 
              </li>
            )
          })}
          
        </ul>
      </nav>
    )
  }
}

export default Navbar;