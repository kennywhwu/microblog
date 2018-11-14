// Routes component to define url renders

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <BlogList />} />
        <Route exact path="/new" render={props => <BlogForm {...props} />} />
        <Route
          exact
          path="/:postId"
          render={props => <BlogPost {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
