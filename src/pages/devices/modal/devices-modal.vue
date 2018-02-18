<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          Edit Device Name
        </div>

        <div class="modal-body">
          <div v-for="device in selectedDevices">
            <label for="deviceName">
              Device Name:
            </label>
            <input
                type="text" name="deviceName"
                   v-model="device.name"
                   id="deviceName"
                   class="txt-input" >
            <br><br>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-default btn-full"
                  @click="closeEditModal">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  /* eslint-disable arrow-body-style */
  /* eslint-disable no-console */

  export default {
    props: ['value'],
    computed: {
      storeStates() {
        return this.$store.state;
      },

      devices() {
        return this.storeStates.devices.devices;
      },

      editDevices() {
        return this.devices.filter((device) => {
          return device.selected;
        });
      },

      selectedDevices: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue);
        },
      },
    },

    methods: {
      closeEditModal() {
        this.selectedDevices.forEach((device) => {
          device.selected = false;
        });

        this.$store.dispatch('devices/showEditModal', false);
      },
    },
  };
</script>
