import React from "react";
import { Table } from "react-bootstrap";

const OpeningHoursTable = props => {
  return (
    <Table striped bordered size="sm">
      <tbody>
        <tr>
          <td>Monday</td>
          <td>00.00 - 00.00</td>
        </tr>
        <tr>
          <td>Tuesday</td>
          <td>00.00 - 00.00</td>
        </tr>
        <tr>
          <td>Wednesday</td>
          <td>00.00 - 00.00</td>
        </tr>
        <tr>
          <td>Thursday</td>
          <td>00.00 - 00.00</td>
        </tr>
        <tr>
          <td>Friday</td>
          <td>00.00 - 00.00</td>
        </tr>
        <tr>
          <td>Saturday</td>
          <td>00.00 - 00.00</td>
        </tr>
        <tr>
          <td>Sunday</td>
          <td>00.00 - 00.00</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default OpeningHoursTable;
