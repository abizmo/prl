// actions
const CLEAR = "session/CLEAR";
const SET = "session/SET";

const DEFAULT_STATE = null;

// reducer
const sessionReducer = (state = DEFAULT_STATE, { session, type }) => {
  switch (type) {
    case SET:
      return session;
      break;
    case CLEAR:
      return null;
    default:
      return state;
      j;
  }
};

export default sessionReducer;

// action creators
export const setSession = (session) => {
  return { session, type: SET };
};

export const clearSession = () => {
  return { type: CLEAR };
};
