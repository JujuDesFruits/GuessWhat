<template>
  <page-container>
    <div class="center-text-align">
      <!-- Time  -->
      <el-row style="margin-top: 2vh">
        <el-col :span="8" :offset="0" class="shadow">
          <el-input
            v-model="heure"
            size="medium"
            class="shadow text-center t-black"
            style="width: 100px;"
            :readonly="true"
          >
          </el-input>
          <span class="t-violet bold" style="margin: 5vh;">h</span>
        </el-col>
        <el-col :span="8" :offset="0" class="shadow">
          <el-input
            v-model="minute"
            size="medium"
            :readonly="true"
            class="shadow text-center t-black"
            style="width: 100px;"
          >
          </el-input>
          <span class="t-violet bold" style="margin: 5vh;">min</span>
        </el-col>
        <el-col :span="8" :offset="0" class="shadow">
          <el-input
            v-model="sec"
            size="medium"
            :readonly="true"
            class="shadow text-center t-black"
            style="width: 100px;"
          >
          </el-input>
          <span class="t-violet bold" style="margin: 5vh;">sec</span>
        </el-col>
      </el-row>
      <!-- Category  -->
      <div style="margin: 5vh">
        <el-input v-model="question.category" :readonly="true" class="question shadow" />
      </div>
      <!-- Question  -->
      <div style="margin: 3vh">
        <el-input v-model="question.name" :readonly="true" class="question shadow" />
      </div>
      <!-- Answers  -->
      <div>
        <el-row v-for="(answer, index) in question.answers" :key="answer" :index="index">
          <el-button
            style="margin: 1vh;width:100%"
            @click="eventClick(answer, index)"
            v-model="answer.name"
            class="question rounded shadow-btn shadow"
            >{{ answer.name }}
          </el-button>
        </el-row>
      </div>
      <!-- Validation -->
      <div style="margin: 1vh">
        <el-button
          v-if="isAnswered"
          class="rounded shadow-btn shadow"
          size="default"
          @click="submit()"
          >Valider</el-button
        >
        <el-button v-else :disabled="true" class="rounded shadow-btn shadow" size="default"
          >Valider</el-button
        >
      </div>
    </div>
  </page-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PageContainer from "../../components/PageContainer.vue";
import Answer from "../../components/Questions/Answer/index.vue";
import QuestionAPI from "../../api/QuestionAPI";
import Timeout = NodeJS.Timeout;

@Component({
  name: "QuestionView",
  components: {
    PageContainer,
    Answer
  }
})
export default class extends Vue {
  private isAnswered = false;
  private answer: Object;
  private questiond = {
    category: this.questionId,
    question: "Sport",
    answers: [],
    dateStart: new Date("now"),
    endDate: new Date("+ 1 day")
  };
  private question = this.questiond;
  private interval: Timeout = setInterval(this.getRemainTime, 1000);
  private heure = 0;
  private minute = 0;
  private sec = 0;
  private clicked = false;

  get name() {
    return "QuestionView";
  }

  get questionId() {
    return this.$route.params.id;
  }

  private async mounted() {
    const { data } = await QuestionAPI.getQuestionById(this.questionId);
    this.question = data;
    const dateFin = new Date(data.endDate).getTime();
    const dateCurr = Date.now();
    console.log(data);
    if (dateFin < dateCurr) {
      this.$router.go(-1);
    }
  }

  private eventClick(answer: any, index: number) {
    console.log("Click on (" + index + ")", answer);
    this.answer = answer;
    if (!this.isAnswered) {
      this.isAnswered = true;
    }
  }

  private answerClicked() {
    this.clicked = true;
  }

  get isOver() {
    const endDate = new Date(this.question.endDate).getTime();
    const currentDate = Date.now();
    return endDate < currentDate;
  }

  getRemainTime() {
    let remain: string;
    if (!this.isOver) {
      let distance = Math.abs(new Date(this.question.endDate).getTime() - Date.now());
      const hours = Math.floor(distance / 3600000);
      distance -= hours * 3600000;
      const minutes = Math.floor(distance / 60000);
      distance -= minutes * 60000;
      const seconds = Math.floor(distance / 1000);
      remain = `${hours}h${minutes}m${seconds}s`;
      this.heure = hours;
      this.minute = minutes;
      this.sec = seconds;
    }
  }

  submit() {
    console.log(this.answer);
  }
}
</script>

<style lang="scss">
.text-center input {
  text-align: center;
  text-align: -webkit-center;
}
.question .el-input__inner,
.category .el-input__inner,
.category-option {
  border-radius: 100px;
  text-align: center;
}
</style>
