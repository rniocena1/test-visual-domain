import * as types from './mutation-types';

export const currentDevices = ({ commit }, devices) => {
  commit(types.DEVICES, devices);
};

export const showEditModal = ({ commit }, show) => {
  commit(types.SHOW_EDIT_MODAL, show);
};

export default {
  currentDevices,
  showEditModal,
};
