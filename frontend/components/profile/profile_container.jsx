import { connect } from 'react-redux';
import { fetchCurrentProfile } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import Profile from './profile';


const mapStateToProps = (state) => ({
  profile: state.currentProfile.currentProfile,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentProfile: (user_id) => dispatch(fetchCurrentProfile(user_id)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);