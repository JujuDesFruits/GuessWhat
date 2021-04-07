<template>
  <el-card class="box-card" style="margin-bottom: 20px">
    <div class="clearfix">
      <span>{{ question.name }}</span> &nbsp;
      <br/>
      <el-tag type="warning">{{ question.category }}</el-tag>
      <span> &nbsp;{{ remainTime }}</span> &nbsp;
      <el-button v-if="isOver" style="float: right;" icon="el-icon-arrow-right" circle size="mini" type="danger" disabled></el-button>
      <router-link v-else="" :to="'/play/' + question.id">
        <el-button  style="float: right;" icon="el-icon-arrow-right" circle size="mini"></el-button>
      </router-link>
    </div>
  </el-card>

</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IQuestion } from "@/types/Question";
import Timeout = NodeJS.Timeout;


@Component({
  name: "QuestionCard",
  components: {
  }
})
export default class extends Vue {
  @Prop({ type: Object})
  public readonly question!: IQuestion;

  private remainTime = "";

  private interval: Timeout = setInterval(this.getRemainTime, 1000);

  get isOver() {
    const endDate = new Date(this.question.endDate).getTime()
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
    }
    else {
      remain = "Délai dépassé"
    }

    this.remainTime = remain;
  }

  private beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>

</style>
