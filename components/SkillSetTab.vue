<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    src: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      isActive: false,
    }
  },

  mounted() {
    this.isActive = this.selected
  },
})
</script>
