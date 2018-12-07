// Connected component for rendering BlogList component for all blog posts

import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogList from '../Components/BlogList';
import { getBlogListFromAPI } from '../actionCreators';

class BlogListPage extends Component {
  async componentDidMount() {
    if (this.props.blogs.length === 0) {
      await this.props.getBlogListFromAPI();
    }
  }

  render() {
    return (
      <div className="BlogListPage">
        <p>Welcome to Microblog!</p>
        <div>{this.props.isLoading}</div>
        <div>
          <i style={{ color: 'red' }}>{this.props.errorMessage}</i>
        </div>
        <BlogList blogs={this.props.blogs} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    blogs: reduxState.blogTitles,
    error: reduxState.error,
    loading: reduxState.loading,
  };
}

export default connect(
  mapStateToProps,
  { getBlogListFromAPI }
)(BlogListPage);
