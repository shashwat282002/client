import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

export class Tab extends Component {
  render() {
    return (
      <Table striped bordered hover variant="dark" className="custom-tab">
        <thead>
          <tr>
            <th className="custom-make">Make</th>
            <th className="custom-model">Model</th>
            <th className="custom-colour">Colour</th>
            <th className="custom-owner">Owner</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cars.map((res) => (
            <tr key={res.Key}>
              <td className="custom-make">{res.Record.make}</td>
              <td className="custom-model">{res.Record.model}</td>
              <td className="custom-colour">{res.Record.colour}</td>
              <td className="custom-owner">{res.Record.owner}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

Tab.propTypes = {
  cars: PropTypes.array,
};

export default Tab;
