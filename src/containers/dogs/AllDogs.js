import { connect } from 'react-redux';
import DogsList from '../../components/dogs/DogsList';
import { getDogs } from '../../selectors/dogs';
import { fetchDogs } from '../../actions/dogs';
import { withFetch } from '../../components/withFetch';

const mapStateToProps = state => ({
  dogs: getDogs(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchDogs());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(DogsList));
