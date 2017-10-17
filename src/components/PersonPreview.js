import React from 'react';
import { Link } from 'react-router-dom';

export const PersonPreview = props => (
  <div className="user-card">
    <Link to={`/vincoorbian/${props.id}`}>
      <img className="image" src="https://placem.at/people?w=200&h=200" alt={`${props.name}'s profile`} />
    </Link>
    <div className="usertitle">
      <h1 className="name">{props.name} {props.lastname}</h1>
      <h2 className="jobtitle">{props.role}</h2>
    </div>
    <hr />
    <div className="contactinfo">
      <a href={`https://twitter.com/${props.twitter}`} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter fa-2x" title="Twitter" />
      </a>
      <a href={`https://github.com/${props.github}`} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github fa-2x" title="GitHub" />
      </a>
      <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-envelope fa-2x" title="Email" />
      </a>
    </div>
  </div>
);

export default PersonPreview;
