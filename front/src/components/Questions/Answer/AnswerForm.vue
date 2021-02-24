<template>
  <el-form ref="form" lazy-validation>
    <el-row>
      <el-col :span="3" class="left-container">
        <div>
          <el-button
            v-if="isGood"
            class="btn-check-answer"
            type="success"
            icon="el-icon-check"
            size="mini"
            circle
          ></el-button>
          <el-button
            v-else
            icon="el-icon-check"
            class="btn-check-answer"
            @click="isGoodAnswer"
            size="mini"
            circle
          ></el-button>
        </div>
      </el-col>
      <el-col :span="18">
        <!-- rules="required|egal" -->
        <ValidationProvider 
         v-slot="{errors}">
          <el-input
            label="Answer"
            v-model="answer"
            :placeholder="'Réponse ' + (index + 1)"
            class="answer-input"
            @change="changeAnswer"
            clearable
          ></el-input>
          <p class="text-red-900">{{errors[0]}}</p>
        </ValidationProvider>
      </el-col>
      <el-col :span="3" class="right-container">
        <div v-if="index > 1">
          <el-button
            type="danger"
            icon="el-icon-close"
            size="mini"
            @click="deleteAnswer"
            circle
          ></el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { ValidationProvider, extend, validate } from "vee-validate";
import { Vue, Prop, Component, Watch } from "vue-property-decorator";

extend('egal', value => {
    return value != null;
})

@Component({
  name: "AnswerForm",
  components: {
    ValidationProvider
  }
})
export default class AnswerForm extends Vue {
  @Prop({
    required: true
  })
  private isGood!: boolean;

  @Prop({
    required: true
  })
  private index!: number;

  private answer = "";

  private isGoodAnswer() {
    console.log('Trigger Good answer setted');
    this.$emit("good-answer",this.answer);
  }

  private deleteAnswer() {
    console.log('Trigger delete');
    this.$emit("delete-answer");
  }

  private changeAnswer() {
    console.log('Trigger change');
    if (this.answer != "") this.$emit("changea",this.answer);
  }
}
</script>

<style>
.left-container {
  padding-top: 5px;
}

.right-container {
  padding-top: 5px;
}
.answer-input .el-input__inner {
  border-radius: 100px !important;
  text-align: center;
}
</style>
