import { connect } from 'react-redux';
import { fetchCurrentProfile, updateImage } from '../../actions/profile_actions';
import { logout } from '../../actions/session_actions';
import { fetchConversations, createConversation } from '../../actions/conversation_actions';
import { fetchLikes, createLike, destroyLike } from '../../actions/like_actions';
import Profile from './profile';


const mapStateToProps = (state) => ({
  profile: state.currentProfile.currentProfile,
  currentUser: state.session.currentUser,
  conversations: state.conversations.conversations,
  likes: state.likes.likes,
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentProfile: (user_id) => dispatch(fetchCurrentProfile(user_id)),
  logout: () => dispatch(logout()),
  fetchConversations: () => dispatch(fetchConversations()),
  createConversation: (conversation) => dispatch(createConversation(conversation)),
  fetchLikes: (from_id) => dispatch(fetchLikes(from_id)),
  createLike: (like) => dispatch(createLike(like)),
  destroyLike: (like_id) => dispatch(destroyLike(like_id)),
  updateImage: (formData, user) => dispatch(updateImage(formData, user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
