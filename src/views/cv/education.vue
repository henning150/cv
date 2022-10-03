<template>
  <v-container>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(event, i) in education"
        :key="i"
        :color="event.color"
        small
      >
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${event.color}--text`"
            v-text="event.year"
          />
        </template>
        <v-card class="elevation-2">
          <v-card-title class="text-h4">
            {{ event.title }}
          </v-card-title>
          <v-card-text class="text-h5">
            <span class="p">{{ event.place }}</span>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  import { get /*, sync, call */ } from 'vuex-pathify'
  export default {
    data: () => ({}),
    computed: {
      ...get('cv', ['info', 'education', 'work', 'keyPoints', 'personalPoints']),
    },
    methods: {},
  }
</script>
