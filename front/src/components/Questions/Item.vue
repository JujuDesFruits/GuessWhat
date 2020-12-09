<template>
  <div>
    <el-collapse>
      <el-collapse-item :title="question.question" name="1">
        <el-card
          v-for="(rep,index) in question.answer"
          :key="rep"
          class="box-card card-reponse"
          :index="index"
          :ref="`reponse--${index}`"
        >
          <div slot="header" class="" v-on:click="checkUserAnswer(index,rep)">
            <center>
              <span>{{ rep }}</span>
            </center>
          </div>
        </el-card>
        <div>
          {{ question.soluce }}
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-card class="box-card">
      <div slot="header" class="clearfix">
        <center><span>Question Title</span></center>
         <el-button style="float: right; padding: 3px 0" type="text">Bouton</el-button> 
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ "List item " + o }}
      </div>
    </el-card> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Question from "./index.vue";

@Component({
  name: "Item",
  components: {
    Question
  }
})
export default class extends Vue {
  @Prop({
    required: true
  })
  private question!: Question;

  private checkUserAnswer(el,clicked) {
    console.log(this.$refs);
    this.verifyAnswer(clicked);
  }

  private verifyAnswer(answer) {
    return answer == this.question.getSoluce ? true : false;
  }
}
</script>

<style>
.card-reponse {
  width: min-content;
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
