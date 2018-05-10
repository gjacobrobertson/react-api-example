import React from 'react';
import { Link } from 'react-router-dom';

const PageItem = props => {
  const search = new URLSearchParams(props.from);
  search.set('page', props.value);
  return (
    <Link {...props} to={{ search: `?${search}` }}>
      {props.children}
    </Link>
  );
};

export default PageItem;
