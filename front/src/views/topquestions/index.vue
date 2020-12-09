<template>
  <div>
    <el-container direction="vertical">
      <el-header height="">
        <!-- Header content -->
        <h1>Header {{ name }} content</h1>
      </el-header>
        <el-container direction="vertical">
          <el-main height="">
            <div>
              <itemQuestion v-for="question in questions" :key="question._id" :question="question"></itemQuestion>
            </div>
          </el-main>
          <el-footer height="">
            <!-- Footer content -->
          </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import itemQuestion from "./../../components/Questions/Item.vue";
// import { UserModule } from '@/store/modules/user'

@Component({
  name: "TopQuestions",
  components: {
    itemQuestion
  }
})
export default class extends Vue {
  get name() {
    return "Top Questions";
  }

  private questions: Array<object> = [
    {
      _id: 1,
      userPseudo: "Ronaldo",
      dateStart: Date(),
      dateEnd: Date(),
      categorie: "sport",
      question: "Est-ce que c'est bien le sport ?",
      like: 0,
      answer: ["Oui", "Non", "Peut-être"],
      soluce: "Oui",
      lang: "fr"
    },
    {
      _id: 2,
      userPseudo: "IronMan",
      dateStart: Date(),
      dateEnd: Date(),
      categorie: "cinema",
      question: "Est-ce que Avengers c'est bien ?",
      like: 0,
      answer: ["Non", "Oui", "Peut-être"],
      soluce: "Oui",
      lang: "fr"
    },
    {
      _id: 3,
      userPseudo: "FrançoisMaldives",
      dateStart: Date(),
      dateEnd: Date(),
      categorie: "politic",
      question: "Est-ce que c'est bien la politique ?",
      like: 0,
      answer: ["Oui", "Non", "Peut-être"],
      soluce: "Peut-être",
      lang: "fr"
    }
  ];
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
