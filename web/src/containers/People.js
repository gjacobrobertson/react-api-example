import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import * as actions from '../actions/people';
import lazy from '../components/lazy';
import People from '../components/People';
import { projection } from '../lib/people';

const select = createSelector(
  state => state.people,
  people => ({ ...people, data: people.data && people.data.map(projection) })
);

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  ...select(state),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  load: dispatch.bind(null, actions.load(ownProps.location.search)),
});

const container = connect(mapStateToProps, mapDispatchToProps);
export default container(lazy(People));
