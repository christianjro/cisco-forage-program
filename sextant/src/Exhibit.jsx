import React from 'react';
import './Exhibit.css';

export default function Exhibit(props) {
  return (
    <div className="Exhibit">
        <h3>{props.name}</h3>
        <div className="ExhibitContent">
            {props.children}
        </div>
    </div>
  )
}
