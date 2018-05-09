import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/duplicates';
import Duplicates from '../components/Duplicates';

const mapStateToProps = ({ duplicates }, ownProps) => ({
  ...ownProps,
  dupes: duplicates.dupes,
  loading: duplicates.loading,
  loaded: duplicates.loaded,
});

const mapDispatchToProps = bindActionCreators.bind(null, actions);
export default connect(mapStateToProps, mapDispatchToProps)(Duplicates);
