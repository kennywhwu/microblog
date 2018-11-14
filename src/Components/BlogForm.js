import React, { Component } from 'react';
// import './BlogForm.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: ''
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
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            className="form-control"
            type="text"
            name="title"
            id="title"
            onChange={this.handleChange}
            placeholder="Title"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <Input
            className="form-control"
            type="text"
            name="description"
            id="description"
            onChange={this.handleChange}
            placeholder="Description"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="body">Body</Label>
          <Input
            className="form-control"
            type="textarea"
            name="body"
            id="body"
            onChange={this.handleChange}
            placeholder="Body"
          />
        </FormGroup>
        <Button color="primary">Save</Button>
        <Link to="/">
          <Button>Cancel</Button>
        </Link>
      </Form>
    );
  }
}

export default BlogForm;
