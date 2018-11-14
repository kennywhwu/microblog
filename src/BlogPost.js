import React, { Component } from 'react';
import { Button } from 'reactstrap';
import BlogForm from './BlogForm';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.switchEditing = this.switchEditing.bind(this);
  }

  switchEditing() {
    this.setState({ isEditing: true });
  }

  render() {
    return (
      <div className="BlogPost">
        {!this.state.isEditing ? (
          <div>
            <h1>Title</h1>
            <p>
              <i>Description</i>
            </p>
            <p>Body</p>

            <Button color="primary" onClick={this.switchEditing}>
              Edit
            </Button>
            <Button color="danger">Delete</Button>
          </div>
        ) : (
          <BlogForm />
        )}
      </div>
    );
  }
}

export default BlogPost;
