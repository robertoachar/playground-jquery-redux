const initialState = {
  counter: 0
};

function rootReducer(state = initialState, action) {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case 'INCREMENT':
      newState.counter++;
      return newState;

    case 'DECREMENT':
      newState.counter--;
      return newState;

    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

$(document).ready(() => {
  updateCounter();

  $('#increment').on('click', () => {
    store.dispatch({ type: 'INCREMENT' });

    updateCounter();
  });

  $('#decrement').on('click', () => {
    store.dispatch({ type: 'DECREMENT' });

    updateCounter();
  });
});

function updateCounter() {
  const state = store.getState();

  $('h2').text(state.counter);
}
