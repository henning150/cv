<template>
  <v-menu
    bottom
    left
    min-width="200"
    offset-y
    origin="top right"
    transition="scale-transition"
  >
    <template v-slot:activator="{ attrs, on }">
      <v-btn
        class="ml-2"
        min-width="0"
        text
        v-bind="attrs"
        v-on="on"
      >
        <gb-flag code="no" />
      </v-btn>
    </template>

    <v-list
      :tile="false"
      flat
      nav
    >
      <template v-for="(l, i) in langs">
        <v-divider
          v-if="l.divider"
          :key="`divider-${i}`"
          class="mb-2 mt-2"
        />

        <app-bar-item
          v-else
          :key="`item-${i}`"
          @click="setLocale(l.code)"
        >
          <v-list-item-title>
            <gb-flag :code="l.code" />
          </v-list-item-title>
        </app-bar-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script>
  export default {
    name: 'DefaultAccount',

    data: () => ({
      langs: [
        { code: 'no' },
        { code: 'gb' },
      ],
      current: 'no',
    }),
    watch: {
      current () {
        this.$store.dispatch('lang/setLocale', this.current)
      },
    },
    methods: {
      setLocale (code) {
        this.current = code
      },
    },
  }
</script>
