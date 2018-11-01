import { combineReducers } from 'redux';
import actions from '~/constants/action-types';

const dataInitialState = {};
const uiInitialState = {};

// REDUCERS

const data = (state = dataInitialState, action) => {
  switch (action.type) {
    case actions.SET_XXX:
      return {
        ...state,
        xxx: action.xxx,
      };
    case actions.SET_XXX_XXX:
      return {
        ...state,
        xxxXxx: action.xxxXxx,
      };
    default:
      return state;
  }
};

const ui = (state = uiInitialState, action) => {
  switch (action.type) {
    case actions.SET_XXX_UI:
      return {
        ...state,
        xxxUi: action.xxxUi,
      };
    default:
      return state;
  }
};

export default combineReducers({
  data,
  ui,
});


// SELECTORS

// data
export const getXxx = state => state.data.xxx;
export const getXxxXxx = state => state.data.xxxXxx;

// ui
export const getXxxUi = state => state.ui.xxxUi;
