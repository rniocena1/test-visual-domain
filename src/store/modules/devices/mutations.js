import {
  DEVICES,
  SHOW_EDIT_MODAL,
} from './mutation-types';

export default {
  [DEVICES](state, devices) {
    state.devices = devices;
  },
  [SHOW_EDIT_MODAL](state, show) {
    state.showEditModal = show;
  },
};
