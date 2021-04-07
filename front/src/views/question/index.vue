<template>
  <page-container>
    <QuestionCard v-for="question in questions" :key="question" :question="question">

    </QuestionCard>
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

  private async mounted() {
    const { data } = await QuestionAPI.getQuestions()
    this.questions = data;
    console.log(data);
  }

}
</script>

<style lang="scss" scoped>

</style>
