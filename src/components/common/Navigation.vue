<template>
  <div 
    class="row layout-padding"
    :style="'background-color:' + componentData.backgroundColor"
  >
    <div
      v-for="(item, index) in componentData.navigationRoutes"
      class="justify-around"
    >
      <q-btn
        :color="item.buttonColor"
        @click="$router.push(item.route)"
      >
          {{ item.title }}
      </q-btn>
      </div>
  </div>
</template>

<script>
import c from '../../js/logs'
export default {
  data () {
    return {
      backgroundColor: 'background-color',
    }
  },
  props:{
    componentData: {},
  },
  computed: {
    nav() {
        return this.$store.state
    },
  },
  methods: {
    navigate() {
      c.o('hey')
    }
  }
}
</script>
