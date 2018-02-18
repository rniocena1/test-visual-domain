<template>
  <v-layout>
    <v-card>
      <span slot="header">
        Devices
      </span>

      <div slot="body">
        <div class="devices-menu">
          <button class="btn btn-default"
              :class="{ 'disabled': !canEdit }"
                  @click="editDevice">
            Edit Name</button>
          <button class="btn btn-delete"
              :class="{ 'disabled': !canEdit }">
            Delete
          </button>
        </div>
        <table class="devices-table">
          <thead>
            <tr>
              <th class="table-options">
                <input type="checkbox" @click="selectAll" v-model="isSelectAll">
              </th>
              <th class="table-name">Name</th>
              <th class="table-description">Description</th>
              <th class="table-owners">Owner</th>
            </tr>
          </thead>
          <tbody class="table-body">
            <tr v-for="device in devices">
              <td class="table-options">
                <input type="checkbox" v-model="device.selected">
              </td>
              <td>{{ device.name }}</td>
              <td>{{ device.description }}</td>
              <td>{{ device.owner }}</td>
            </tr>
          </tbody>
        </table>

        <devices-modal
            v-if="storeStates.devices.showEditModal"
            v-model="selectedDevices"
        ></devices-modal>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* eslint-disable arrow-body-style */

  import VLayout from '@/layouts/default';
  import VCard from '@/components/card';
  import DevicesModal from '@/pages/devices/modal/devices-modal';

  export default {
    data() {
      return {
        devices: [
          {
            id: 1,
            name: 'Lorem ipsum dolor',
            description: 'Maecenas feugiat posuere urna, ut mollis odio volutpat eget.',
            owner: 'Aenean',
            selected: false,
          },
          {
            id: 2,
            name: 'Aliquam In',
            description: 'Ut consequat ex ac suscipit dapibus. Interdum et malesuada fames ac.',
            owner: 'Maecenas',
            selected: false,
          },
          {
            id: 3,
            name: 'Fusce nec',
            description: 'Fusce maximus tincidunt ipsum, quis suscipit enim tristique dignissim.',
            owner: 'Suspendisse',
            selected: false,
          },
        ],
      };
    },

    computed: {
      storeStates() {
        return this.$store.state;
      },

      canEdit() {
        const selectedDevices = this.devices.filter((device) => {
          return device.selected;
        });

        return selectedDevices.length > 0;
      },

      selectedDevices() {
        return this.devices.filter((device) => {
          return device.selected;
        });
      },

      isSelectAll() {
        return this.selectedDevices.length === this.devices.length;
      },
    },

    methods: {
      selectAll() {
        const devices = this.devices;

        if (!this.isSelectAll) {
          devices.forEach((device) => {
            device.selected = true;
          });
        } else {
          devices.forEach((device) => {
            device.selected = false;
          });
        }
      },

      editDevice() {
        this.$store.dispatch('devices/showEditModal', true);
      },
    },

    components: {
      VLayout,
      VCard,
      DevicesModal,
    },
  };
</script>

<style src="./style/devices.css"></style>
