import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ModalReducer from './modal_reducer';
import ProfileReducer from './profile_reducer';
import ConversationReducer from './conversation_reducer';
import LikeReducer from './like_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  modal: ModalReducer,
  currentProfile: ProfileReducer,
  conversations: ConversationReducer,
  likes: LikeReducer,
});

export default rootReducer;
