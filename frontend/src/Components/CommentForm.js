// Component for form to add comment to specific blog post

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change to user input boxes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  // Handle submission of form
  handleSubmit(evt) {
    evt.preventDefault();
    // ADD VALIDATION AND ALERT
    this.props.handleSubmit(this.state);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="CommentForm">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              className="form-control"
              type="text"
              name="text"
              id="text"
              onChange={this.handleChange}
              placeholder="New Comment"
              value={this.state.text}
            />
          </FormGroup>
          <Button color="primary">Add</Button>
        </Form>
      </div>
    );
  }
}

export default CommentForm;
