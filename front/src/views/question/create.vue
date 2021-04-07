<template>
  <page-container>
    <QuestionForm />
  </page-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageContainer from "@/components/PageContainer.vue";
import QuestionForm from "@/components/Questions/Form.vue";

@Component({
  name: 'QuestionCreate',
  components: {
    PageContainer,
    QuestionForm
  },
})
export default class extends Vue {

  get name() {
    return 'QuestionCreate';
  }

}
</script>

<style lang="scss" scoped>

</style>
