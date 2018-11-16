// Routes component to define url renders

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import BlogListPage from '../Containers/BlogListPage';
import BlogPostPage from '../Containers/BlogPostPage';
import NewBlogPage from '../Containers/NewBlogPage';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <BlogListPage />} />
        <Route exact path="/new" render={props => <NewBlogPage {...props} />} />
        <Route
          exact
          path="/:postId"
          render={props => <BlogPostPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default Routes;
