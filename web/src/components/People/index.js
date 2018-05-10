import React, { Component } from 'react';
import { Header, Card, Pagination, Grid } from 'semantic-ui-react';
import Person from '../Person';
import PageItem from './PageItem';

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
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>{pagination}</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Card.Group>
                {data.map(person => <Person key={person.id} {...person} />)}
              </Card.Group>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>{pagination}</Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}
