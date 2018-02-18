<template>
  <v-layout>
    <v-card>
      <span slot="header">
        Assets
      </span>
    </v-card>
  </v-layout>
</template>

<script>
  import VLayout from '@/layouts/default';
  import VCard from '@/components/card';

  export default {
    components: {
      VLayout,
      VCard,
    },
  };
</script>
