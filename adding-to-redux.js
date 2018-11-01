// questions:
// why are actions also in reducers? they'r imported from the actions file...




// add set action type to constants, which is grouped by category
// app/frontend/constants/action-types.js

SET_XXX_XXX: 'SET_XXX_XXX',


// add set action to category's action file
// method name matches constant, param name simple version of thing being set
// eg `path`, `error`, `isLoading`, `data`
// app/frontend/actions/xxxCategory.js

export const setXxxXxx = xxxSimple => ({
  type: actions.SET_XXX_XXX,
  xxxSimple,
});


// add set action to category's reducer file
// in data const for data, ui for ui control (loading, prompt open, etc)
// new categories must be imported to app/frontend/reducers/index.js
// app/frontend/reducers/xxxCategory.js

case actions.SET_XXX_XXX:
  return {
    ...state,
    xxxDescriptive: action.xxxSimple,
  };


// import setter to container/index
// app/frontend/components/containers/XxxContainer.js

import {
  setXxxXxx,
} from '~/actions/xxxCategory';

// dispatch (container)
store.dispatch(setXxxXxx(this.props.xxxDescriptive));
// (and include prop [xxxDescriptive] in proptypes)

// or map (index)
setXxxXxx: (xxxDescriptive) => {
  dispatch(setXxxXxx(xxxDescriptive));
},




// with getter


// add getter/"selector" to category's reducer file

export const getXxxXxx = state => state.data.xxxXxx;


// add getter to reducer index

export const getXxxXxx = state => fromXxxCategory.getXxxXxx(state.xxxXxx);






// with api call









// add action tests, in the category's matching test file (or create)
// app/frontend/actions/xxxCategory.test.js

import reducer, * as selectors from '~/reducers';
import * as actions from './xxxCategory';

const xxxFixture = {
  id: 1,
  param: 'xxxxxx',
};

describe('xxx category actions', () => {
  const initialState = reducer(undefined, {});

  describe('setXxxXxx', () => {
    it('sets xxx xxx', () => {
      const payload = xxxFixture;
      const state = initialState;
      const action = actions.setXxxXxx(payload);
      const newState = reducer(state, action);
      const xxxXxx = selectors.getXxxXxx(newState);

      expect(xxxXxx).toEqual(payload);
    });
  });

  describe('ui actions', () => {
    describe('setXxxUi', () => {
      it('sets xxx ui', () => {
        const state = initialState;
        const action = actions.setXxxUi(true);
        const newState = reducer(state, action);
        const xxxUi = selectors.getXxxUi(newState);

        expect(xxxUi).toEqual(true);
      });
    });
  });
});
