import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, getAge, getWeight } from '../../selectors/dogDetails';
import { fetchDogDetails } from '../../actions/dogDetails';
import { withFetch } from '../../components/withFetch';
import Dog from '../../components/dogs/Dog';

const mapStateToProps = state => ({
  name: getName(state),
  age: getAge(state),
  weight: getWeight(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchDogDetails(props.match.params.id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withFetch(Dog)));
