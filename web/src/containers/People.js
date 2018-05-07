import { connect } from 'react-redux';
import * as actions from '../actions/people';
import lazy from '../components/lazy';
import People from '../components/People';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, ...state.people });
const mapDispatchToProps = (dispatch, ownProps) => ({
  load: dispatch.bind(null, actions.load(ownProps.location.search)),
});

const container = connect(mapStateToProps, mapDispatchToProps);
export default container(lazy(People));
