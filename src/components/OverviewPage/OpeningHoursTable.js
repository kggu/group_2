import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./OpeningHours.css";

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
    <div className="opening-container">
      <div className="opening-header">
        <a>Opening hours</a>
      </div>
      <tbody className="opening-table">
        {props.openingHours.map(function (day, i) {
          return (
            <tr>
              <td className="opening-weekday">{day.weekDay.toLowerCase()}</td>
              <td className="opening-hours">
                <small>
                  {day.openingTime} - {day.closingTime}
                </small>
              </td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

export default OpeningHoursTable;
