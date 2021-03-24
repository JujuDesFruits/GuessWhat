<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="question.name" name="1">
        <Answer v-for="(rep) in question.answers" :key="rep" :question="question" :answer="rep" :hasAnswered="clicked" @answer-click="answerClicked()" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Answer from "./Answer/index.vue";
import { IQuestion } from "../../types/Question";

@Component({
  name: "Question",
  components: {
    Answer
  }
})
export default class extends Vue {
  @Prop({
    required: true
  })
  private question!: IQuestion;

  private typeButton = '';
  private clicked = false;

  private answerClicked() {
    this.clicked = true;
  }
}
</script>

<style>
.btn-reponse {
  width: 200px;
  min-width: 300px;
  margin-bottom: 5px;
  margin: auto;
}

.card-reponse.success {
  background-color: rgb(85, 145, 85) !important;
  color: white !important;
}
.card-reponse .el-card__header {
  padding: 7px 20px;
}

.card-reponse .el-card__body {
  padding: 0;
}
</style>
