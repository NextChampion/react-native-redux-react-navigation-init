import Immutable from 'immutable';

export const version = {
  default: Immutable.fromJS({
    test: 1
  }),
  persist: true,
  actions: {
    SET_VERSION: {
      reducer: (state, { payload }) => state.merge(payload),
    },
  },
};
