import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card } from 'react-bootstrap';

export class SearchBar extends Component {
  state = {
    id: '',
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.id);
    this.setState({ id: '' });
  };

  render() {
    return (
      <React.Fragment>
        <Card style={{ width: '18rem', margin: '20px' }}>
          <Card.Body>
            <Card.Title>Search Car</Card.Title>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>CarID</Form.Label>
                <Form.Control
                  type="text"
                  name="id"
                  placeholder="Add Car ID"
                  value={this.state.id}
                  onChange={this.onChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.onSubmit}>
                Search Car
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

SearchBar.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchBar;
