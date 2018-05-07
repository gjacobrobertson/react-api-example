import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Item, Pagination } from 'semantic-ui-react';
import Person from './Person';

const PageItem = props => {
  const search = new URLSearchParams(props.from);
  search.set('page', props.value);
  return (
    <Link {...props} to={{ search: `?${search}` }}>
      {props.children}
    </Link>
  );
};

export default class People extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.props.load();
    }
  }
  render() {
    const { data, metadata, location } = this.props;
    const { paging } = metadata;

    const augment = props => ({
      ...props,
      as: PageItem,
      from: location.search,
    });

    const pagination = (
      <Pagination
        activePage={paging.current_page}
        totalPages={paging.total_pages}
        pageItem={augment(Pagination.defaultProps.pageItem)}
        firstItem={augment(Pagination.defaultProps.firstItem)}
        lastItem={augment(Pagination.defaultProps.lastItem)}
        nextItem={augment(Pagination.defaultProps.nextItem)}
        prevItem={augment(Pagination.defaultProps.prevItem)}
      />
    );

    return (
      <React.Fragment>
        <Header as="h2">People</Header>
        {pagination}
        <Item.Group divided>
          {data.map(person => <Person key={person.id} data={person} />)}
        </Item.Group>
        {pagination}
      </React.Fragment>
    );
  }
}
