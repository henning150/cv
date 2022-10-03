<template>
  <v-container
    id="user-profile-view"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <h1>{{ trans('education') }}</h1>
    </v-row>
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <education />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import education from './cv/education.vue'
  export default {
    name: 'EducationPage',
    components: {
      education,
    },
  }
</script>
