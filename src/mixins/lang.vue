<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters('lang', ['trans']),
    },
  }
</script>
