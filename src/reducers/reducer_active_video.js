// reducer is just a function who returns a piece of state
// State argument is not application state, only the state this reducer is
// responsible for
export default (state = null, action) => {
  switch (action.type) {
    case 'VIDEO_SELECTED':
      return action.payload;
  }
  return state;
};
