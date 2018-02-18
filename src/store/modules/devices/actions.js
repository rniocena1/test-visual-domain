import * as types from './mutation-types';

export const showEditModal = ({ commit }, show) => {
  commit(types.SHOW_EDIT_MODAL, show);
};

export default {
  showEditModal,
};
