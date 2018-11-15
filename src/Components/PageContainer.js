// Component for displaying main content depending on route

import React, { Component } from 'react';
import './PageContainer.css';
import Routes from './Routes';

class PageContainer extends Component {
  render() {
    return (
      <div className="PageContainer container">
        <div className="row">
          <div className="col-sm-12  col-md-8 col-lg-6 offset-lg-3 offset-md-2">
            <Routes />
          </div>
        </div>
      </div>
    );
  }
}

export default PageContainer;
