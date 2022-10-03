<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <h1>{{ trans('jobs') }}</h1>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <work />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import work from './cv/work.vue'
  export default {
    name: 'WorkPage',
    components: {
      work,
    },
  }
</script>
