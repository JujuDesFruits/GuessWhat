<template>
  <el-form ref="form" class="center-text-align">
    <!-- rules="required" -->
    <ValidationProvider
      v-slot="{errors}">
      <el-form-item
      style="margin: 3vh">
        <el-select v-model="category" class="category shadow t-violet" placeholder="Catégorie">
          <el-option
            v-for="cat in categories"
            class="category-option t-violet"
            :key="cat"
            :label="cat"
            :value="cat"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <p class="text-red-900">{{errors[0]}}</p>
    </ValidationProvider>
    <ValidationProvider
      rules="required"
      v-slot="{errors}">
      <el-form-item
      style="margin: 3vh">
        <el-input v-model="questionText" placeholder="Écrit ta question" class="question shadow" />
      </el-form-item>
      <p class="text-red-900">{{errors[0]}}</p>
    </ValidationProvider>

    <keep-alive
      v-for="(answer, index) in answersList"
      :key="answer">
      <AnswerForm
        :index="index"
        class="shadow"
        :isGood="isGoodAnswer(index)"
        @good-answer="setGoodAnswer(index)"
        @delete-answer="removeAnswer(answer)"
        @changea="setAnswer(index,$event)"
        style=""
      />
    </keep-alive>

    <!-- BTN ADD ANSWER -->
    <el-button type="default" class="addAnswer shadow-btn" style="margin: 1vh" size="mini" @click="addAnswer" round
      ><i class="el-icon-plus t-violet bold"></i></el-button
    >

    <el-row style="margin-top: 2vh">
      <!-- Time Picker -->
      <el-col :span="8" :offset="0"
          class="shadow"
      >
        <el-input-number
          v-model="dateH"
          size="medium"
          :min="0"
          :max="150"
          :step="1"
          :controls="false"
          class="shadow t-black"
          style="width: 100px;"
          @change="chooseHour"
        >
        </el-input-number>
        <span class="t-violet bold" style="margin: 5vh;">h</span>
      </el-col>
      <el-col :span="8" :offset="0"
          class="shadow"
      >
        <el-input-number
          v-model="dateM"
          size="medium"
          :min="0"
          :max="60"
          :step="1"
          :controls="false"
          class="shadow t-black"
          style="width: 100px;"
          @change="chooseMin"
        >
        </el-input-number>
        <span class="t-violet bold" style="margin: 5vh;">min</span>
      </el-col>
      <el-col :span="8" :offset="0"
          class="shadow"
      >
        <el-input-number
          v-model="dateS"
          size="medium"
          :min="0"
          :max="60"
          :step="1"
          class="shadow t-black"
          style="width: 100px;"
          :controls="false"
        >
        </el-input-number>
        <span class="t-violet bold" style="margin: 5vh;">sec</span>
      </el-col>
    </el-row>
    <el-row style="margin: 4vh;">
      <el-button type="submit" class="rounded shadow-btn t-violet bold" size="default" @click="submit">Enregistrer</el-button>
    </el-row>

    <!-- <v-btn @click="clear">clear</v-btn> -->
  </el-form>
</template>

<script lang="ts">
import axios from "axios";
import { ValidationProvider, extend, validate } from "vee-validate";
import { Vue, Prop, Component, Watch } from "vue-property-decorator";
import AnswerForm from "./Answer/AnswerForm.vue";
import { IQuestion } from "../../types/Question";
import AnswerAPI from "@/api/AnswerAPI";
import ListItem
  from "../../../../api/.cache/plugins/strapi-plugin-content-manager/admin/src/components/SelectMany/ListItem";
import QuestionAPI from "@/api/QuestionAPI";

extend('required', value => {
    return value != null || value != '';
})

extend('min', value => {
    return value != null || value != '';
})

@Component({
  name: "QuestionForm",
  components: {
    ValidationProvider,
    AnswerForm
  }
})
export default class QuestionForm extends Vue {
  public question: IQuestion[] = [];

  private questionText = "";
  private answersList: Array<string> = ["", ""];
  private soluce: any = null;
  private category = "";
  private categories: Array<string> = ["Sport", "Musique", "Cinéma", "Politique"];
  // private dateStart = Date();
  private dateEnd = new Date();

  private dateH = 1;
  private dateM = 0;
  private dateS = 0;

  private setAnswer(index: number, value: string) {
    this.answersList[index] = value;
  }

  private addAnswer() {
    this.answersList.push("");
  }

  private setGoodAnswer(ans: number) {    
    this.soluce = ans;
  }

  private get getGoodAnswer() {
    return this.soluce;
  }

  isGoodAnswer(answer: string) {
    return answer == this.getGoodAnswer && this.getGoodAnswer !== null;
  }

  private removeAnswer(answer: string) {
    const index = this.answersList.indexOf(answer);
    if (index > -1) {
      this.answersList.splice(index, 1);
    }
  }

  private chooseHour() {
    if (this.dateH == 0 && this.dateM == 0) {
      this.dateM = 10;
    };
  }

  private chooseMin() {
    if (this.dateH == 0 && this.dateM == 0) {
      this.dateH = 1;
    };
  }

  private async submit() {
    if (this.validate()) {

      const currentDate = new Date();
      let currentTime = currentDate.getTime();
      currentTime += this.dateH * 60 * 60 * 1000
      currentTime += this.dateM * 60 * 1000
      currentTime += this.dateS * 1000
      this.dateEnd = new Date(currentTime);

      const answersId: any = {}
      for( const ans in this.answersList) {
        const answer: string = this.answersList[ans];
        const {data} = await AnswerAPI.createAnswer({name: answer})
        answersId[answer] = data._id;
      }

      const quest = {
        dateStart: new Date(),
        endDate: this.dateEnd,
        name: this.questionText,
        answers: Object.values(answersId),
        correctAnswer: answersId[this.answersList[this.soluce]],
        category: this.category
      };
      console.log(quest);
      const {data} = await QuestionAPI.createQuestion(quest);

      this.$message.success("Question créée avec succès !")
    } else {
      console.log('not full')
    }


  }

  private validate() {
    let valid = true;
    if (this.questionText == '') {
      console.log('question empty');
      valid = false;} // Question
    if (this.soluce === null) {valid = false;
      console.log('Solution empty');
    } // Solution
    this.answersList.forEach(element => { // Réponses
      if (element == null || element == "") {valid = false;
      console.log('An answer empty');
      }
    });
    return valid;
  }
}
</script>

<style lang="scss">

.question .el-input__inner,
.category .el-input__inner,
.category-option {
  border-radius: 100px;
  text-align: center;
}

.addAnswer {
  margin-bottom: 10px;
}

.addAnswer i {
  // margin-right: 5px;
}

</style>
