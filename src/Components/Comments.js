import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    comments: []
  };

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
      <div className="Comments">
        <h1>Comments</h1>
        {this.props.comments.map(comment => (
          <div>
            <button>X</button>
            <p>{comment.text}</p>
          </div>
        ))}

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              className="form-control"
              type="text"
              name="comment"
              id="comment"
              onChange={this.handleChange}
              placeholder="New Comment"
            />
          </FormGroup>
          <Button color="primary">Add</Button>
        </Form>
      </div>
    );
  }
}

export default Comments;
