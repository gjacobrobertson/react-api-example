import React from 'react';
import { Card } from 'semantic-ui-react';

const Person = ({ name, title, email }) => (
  <Card
    header={{ content: name }}
    meta={{ content: title }}
    description={{ content: email }}
  />
);

export default Person;
