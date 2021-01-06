<template>
  <el-button
    round
    :plain="checkPlain()"
    :type="checkAnswered()"
    :icon="checkIconButton()"
    size="default"
    @click="eventClick"
    >{{ answer }}</el-button
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IQuestion } from "../../../types/Question";

@Component({
  name: "Answer"
})
export default class extends Vue {
  @Prop({ required: true }) private question!: IQuestion;
  @Prop({ required: true }) private answer!: string;
  @Prop({ default: false }) private hasAnswered!: boolean;

  private _clicked!: boolean;

  private eventClick() {
    this.$emit("answer-click");
    this._clicked = true;
  }

  private verifyAnswer() {
    return this.answer == this.question.soluce ? true : false;
  }

  private checkPlain() {
    return this._clicked ? false : true;
  }

  private checkIconButton() {
    return this._clicked
      ? this.verifyAnswer()
        ? "el-icon-circle-check pull-right"
        : "el-icon-circle-close"
      : "";
  }

  private checkAnswered() {
    return this.hasAnswered ? (this.verifyAnswer() ? "success" : "danger") : "";
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  vertical-align: middle;
}

.is-active {
  transform: rotate(180deg);
}
</style>
