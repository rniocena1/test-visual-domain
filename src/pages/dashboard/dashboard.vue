<template>
  <v-layout>
    <v-card>
      <div slot="header">
        <label for="companyName" class="txt-label">Company name: </label>
        <input id="companyName" class="txt-input txt-input-dashboard" type="text"
               name="companyName"
               maxlength="38"
               placeholder="Visual Domain"
               v-model="companyName"
        >
      </div>
      <div slot="body">
        <div class="dashboard-body">


          <div class="company-div">
            <div id="companyNameBox" class="titleBox">
              <div class="companyNameOutput">
                <span>
                  {{ companyName }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  import VLayout from '@/layouts/default';
  import VCard from '@/components/card';

  export default {
    data() {
      return {
        companyName: null,
      };
    },

    components: {
      VLayout,
      VCard,
    },
  };
</script>

<style src="./style/dashboard.css"></style>
