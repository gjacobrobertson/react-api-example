import React from 'react';
import { Item } from 'semantic-ui-react';

const Person = ({ data }) => (
  <Item
    header={{ content: data.display_name }}
    meta={{ content: data.title }}
    description={{ content: data.email_address }}
  />
);

export default Person;
