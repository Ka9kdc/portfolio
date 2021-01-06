import React from 'react';
import { Link } from 'react-router-dom';

const Exprience = () => {
  return (
    <div className="flexItem">
      <h2>Exprience</h2>
      <div>
        <img src="images/LittleLogo.png" alt="WCRA Logo" />
        <h3>Wheaton Community Radio Amateurs</h3>
        <h4><Link to="https://w9ccu.org">w9ccu.org</Link> Webmaster</h4>
        <h4>November 2019 - Present</h4>
        <ul>
          <li>
            Integrate PayPal allowing membership dues, Hamfest tickets and
            vendor orders to be processed and paid online
          </li>
          <li>
            Update website monthly with meeting minutes and notices for club
            membership
          </li>
          <li>
            Enhanced online renewals form using Javascript, PHP, HTML and CSS
            allowing for emails are sent upon submission.
          </li>
        </ul>
      </div>
      <div>
        <img
          src="images/209-2092285_office-depot-office-max-png-logo.png"
          alt="Office Depot Logo"
        />
        <h3>Office Depot</h3>
        <h4>Print and Copy Supervisor</h4> <h4>April 2015 – February 2020</h4>
        <ul>
          <li> Trained co-workers on new equipment and procedures</li>
          <li>Ensured supplies were in-stock to produce client orders</li>
          <li>
            Handled placing and producing orders for over 50 clients a week
          </li>
          <li>Achieved over department sales goals almost every quarter</li>
        </ul>
      </div>
      <div>
        <img src="images/LittleLogo.png" alt="WCRA Logo" />
        <h3>Wheaton Community Radio Amateurs</h3>
        <h4>Hamfest Chairman</h4>
        <h4>February 2016 – January 2020</h4>
        <ul>
          <li>
            Organized a radio, computer and electronics expo with over 750
            attendees
          </li>
          <li>Handled communication with vendors and six subcommittees</li>
          <li>Brought in $2000 each year for the club </li>
        </ul>
      </div>
    </div>
  );
};

export default Exprience;
