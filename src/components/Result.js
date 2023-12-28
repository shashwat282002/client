import React, { Component } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import { Table, Alert } from 'react-bootstrap';
import '../App.css';

export class Result extends Component {
  state = {
    cars: [],
  };

  search = (id) => {
    console.log(id);
    axios.get(`http://127.0.0.1:8080/api/query/${id}`)
      .then(res => this.setState({ cars: JSON.parse(res.data.response) }));
  }

  render() {
    const { cars } = this.state;

    return (
      <React.Fragment>
        <div className='search'>
          <SearchBar search={this.search} />
        </div>

        <div className="container">
          {cars.length > 0 ? (
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Make</th>
                  <th>Model</th>
                  <th>Colour</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car, index) => (
                  <tr key={index}>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.colour}</td>
                    <td>{car.owner}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="info">
              No results found. Try a different search.
            </Alert>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Result;
