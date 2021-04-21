<template>
  <page-container>
    <router-link to="/question/create" style="position: fixed;margin-top: -33px;right: 0px">
      <el-button type="danger" icon="el-icon-plus" circle></el-button>
    </router-link> -->
    <QuestionCard v-for="question in questions" :key="question.name" :question="question"></QuestionCard>
  </page-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageContainer from "@/components/PageContainer.vue";
import QuestionAPI from "@/api/QuestionAPI";
import {IQuestion} from "@/types/Question";
import QuestionCard from "@/components/Questions/QuestionCard/index.vue";

@Component({
  name: 'Questions',
  components: {
    QuestionCard,
    PageContainer
  },
})
export default class extends Vue {

  private questions: IQuestion[] = [];

  get name() {
    return 'Questions';
  }

  get category() {
    return this.$route.params.category;
  }

  private async mounted() {
    let data: any;
    console.log(this.category);
    if (this.category) {
      data = (await QuestionAPI.getQuestionsByCategory(this.category)).data;
    }
    else {
      data = (await QuestionAPI.getQuestions()).data;
    }
    this.questions = data;
    console.log(data);
  }

}
</script>

<style lang="scss" scoped>
.add_button {
  float: right;
}
</style>
