// NavHeader component for showing header and links

import React, { Component } from 'react';
// import './NavHeader.css';
import { Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavHeader extends Component {
  render() {
    return (
      <div className="NavHeader">
        <Jumbotron>
          <h1 className="display-3">Microblog</h1>
          <p className="lead">Get in the Rithm of blogging!</p>
          <hr className="my-2" />
          <p>
            <Link to="/">Blog</Link>
          </p>
          <p>
            <Link to="/new">Add a new post</Link>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default NavHeader;
