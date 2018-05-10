import React from 'react';
import { List, Card } from 'semantic-ui-react';
import Person from '../Person';

const DuplicateItem = ({ entry: [a, b] }) => (
  <List.Item>
    <Card.Group centered>
      <Person {...a} />
      <Person {...b} />
    </Card.Group>
  </List.Item>
);

export default DuplicateItem;
