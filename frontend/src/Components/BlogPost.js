// Component for full details and body of individual blog post, and ability to edit and delete post

import React, { Component } from 'react';
import {
  Button,
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardSubtitle,
} from 'reactstrap';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.handleDelete(this.props.blog.id);
  }

  render() {
    return (
      <div className="BlogPost">
        <Card className="mb-5">
          <CardBody>
            <CardTitle>{this.props.blog.title}</CardTitle>
            <CardSubtitle>{this.props.blog.description}</CardSubtitle>
            <CardText>{this.props.blog.body}</CardText>
          </CardBody>
        </Card>
        <Button color="primary mx-2" onClick={this.props.handleEdit}>
          Edit
        </Button>
        <Button color="danger" onClick={this.handleDelete}>
          Delete
        </Button>
      </div>
    );
  }
}

export default BlogPost;
