import React, { useState } from "react";
import { Table } from "react-bootstrap";

const OpeningHoursTable = (props) => {
  const enumDays = {
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    SUNDAY: 7,
  };

  props.openingHours.sort((a, b) => enumDays[a.weekDay] > enumDays[b.weekDay]);

  return (
    <Table striped size="sm" bordered variant="light">
      <tbody>
        {props.openingHours.map(function (day, i) {
          return (
            <tr>
              <td>{day.weekDay}</td>
              <td>
                <small>{day.openingTime} - {day.closingTime}</small>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default OpeningHoursTable;
