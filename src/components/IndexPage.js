import React from 'react';
import { PersonPreview } from './PersonPreview';

export const IndexPage = ({ persons }) => (
  <div className="home">
    <div className="athletes-selector">
      {persons.map(
        personData => <PersonPreview key={personData.id} {...personData} />,
      )}
    </div>
  </div>
);

export default IndexPage;
