<template>
  <v-text-field
    v-model="model"
    placeholder="Search"
    color="secondary"
    hide-details
    style="max-width: 220px"
  >
    <template
      v-if="$vuetify.breakpoint.mdAndUp"
      v-slot:append-outer
    >
      <v-btn
        class="mt-n2 ml-n2"
        fab
        small
        elevation="2"
        height="44"
        width="44"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-text-field>
</template>

<script>
  export default {
    name: 'DefaultSearch',
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    computed: {
      model: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        },
      },
    },
  }
</script>
