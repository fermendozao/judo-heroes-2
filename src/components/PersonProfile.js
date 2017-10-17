import React from 'react';
import { Link } from 'react-router-dom';
import { AthletesMenu } from './AthletesMenu';

export const PersonProfile = ({ person, persons }) => {
  return (
    <section className="container">
      <aside className="lateral-info _text-center">
        <div className="border-image">
          <img alt={`${person.name}'s profile`} src="https://placem.at/people?w=200&h=200" />
        </div>

        <div className="usertitle">
          <h1 className="name">{person.name} {person.lastname} {person.secondLastname}</h1>
          <h2 className="jobtitle">{person.role}</h2>
        </div>

        <div className="contactinfo">
          <a href={`https://twitter.com/${person.twitter}`} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter fa-2x" title="Twitter" />
          </a>
          <a href={`https://github.com/${person.github}`} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github fa-2x" title="GitHub" />
          </a>
          <a href={`mailto:${person.email}`} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-envelope fa-2x" title="Email" />
          </a>
        </div>
      </aside>

      <div className="workers">
        <div>
          <h1 className="index">Habilidades</h1>
          <div className="_marginbottom30">
            {person.skills.map(
              skill => <span className="tag">{skill}{' '}</span>,
            )}
          </div>

          {persons.map(
            person => <PersonPreview small info={person.info}/>
          }
        </div>

        <div>
          <h1 className="index">Proyectos Recientes</h1>
          <ul className="listproyects">
            {person.recentProjects.map(
              project => <li><i className="fa fa-circle fa-lg" /> {project}{' '}</li>,
            )}
          </ul>
        </div>

        <div>
          <h1 className="index">PERFILES SIMILARES</h1>
          <div className="user-card">
            <AthletesMenu athletes={persons} />
          </div>
        </div>

        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    </section>
  );
};

export default PersonProfile;
