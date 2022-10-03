<template>
  <v-container>
    <v-row justify="center">
      <h1>{{ trans('Experience and Frameworks') }}</h1>
    </v-row>
    <v-row justify="center">
      <search v-model="search" />
    </v-row>
    <v-row justify="center">
      <v-col
        v-for="item in items"
        :key="item.title"
        :cols="2"
      >
        <v-icon>{{ item.icon }}</v-icon>
        <span class="ml-1">{{ item.title }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Search from '../layouts/default/widgets/Search.vue'
  export default {
    components: { Search },
    data () {
      return {
        search: '',
      }
    },
    computed: {
      ...mapGetters('cv', ['experience']),
      items () {
        return this.experience.filter(i => {
          return i.title.toLowerCase().includes(this.search.toLowerCase())
        })
      },
    },
  }
</script>
