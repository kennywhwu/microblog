// Component to render individual comment

import React, { Component } from 'react';
import { Button, ListGroupItem } from 'reactstrap';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    return (
      <div className="Comment">
        <ListGroupItem>
          <p>
            {this.props.comment}{' '}
            <Button close onClick={this.handleDelete}>
              X
            </Button>
          </p>
        </ListGroupItem>
      </div>
    );
  }
}

export default Comment;
