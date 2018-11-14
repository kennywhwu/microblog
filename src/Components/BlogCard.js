import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogCard extends Component {
  render() {
    return (
      <div className="BlogCard">
        <Card>
          <CardBody>
            <Link to={`/${this.props.blog.id}`}>
              <CardTitle>{this.props.blog.title}</CardTitle>
            </Link>
            <CardSubtitle>{this.props.blog.description}</CardSubtitle>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default BlogCard;
