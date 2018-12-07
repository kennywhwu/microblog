// Component for adding and editing blog post

import React, { Component } from 'react';
// import './BlogForm.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.blog.title,
      description: this.props.blog.description,
      body: this.props.blog.body,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handle change to user input boxes
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  // Handle submission of form
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label htmlFor="blogform-title">Title</Label>
          <Input
            className="form-control"
            type="text"
            name="title"
            id="blogform-title"
            onChange={this.handleChange}
            placeholder="Title"
            value={this.state.title}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="blogform-description">Description</Label>
          <Input
            className="form-control"
            type="text"
            name="description"
            id="blogform-description"
            onChange={this.handleChange}
            placeholder="Description"
            value={this.state.description}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="blogform-body">Body</Label>
          <Input
            className="form-control"
            type="textarea"
            name="body"
            id="blogform-body"
            onChange={this.handleChange}
            placeholder="Body"
            value={this.state.body}
          />
        </FormGroup>

        <Button color="primary" className="mx-2">
          Save
        </Button>
        <Button onClick={this.props.handleCancel}>Cancel</Button>
      </Form>
    );
  }
}

export default BlogForm;
