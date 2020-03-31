<template>
  <b-button
    outline
    class="button"
    :class="'bg-' + bgColor + ' color-' + color"
    v-on:click="emitClick"
  >
    <slot></slot>
  </b-button>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  components: {}
})
export default class MyButton extends Vue {
  @Prop() bgColor!: string;
  @Prop() color!: string;

  @Emit()
  emitClick(event: any) {
    return event;
  }
}
</script>

<style lang="scss" scoped>
</style>
