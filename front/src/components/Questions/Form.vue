<template>
  <el-form ref="form" class="questionForm">
    <ValidationProvider rules="required" v-slot="{errors}">
      <el-form-item>
        <el-select v-model="category" class="category" placeholder="Catégorie">
          <el-option
            v-for="cat in categories"
            class="category-option"
            :key="cat"
            :label="cat"
            :value="cat"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <p class="text-red-900">{{errors[0]}}</p>
    </ValidationProvider>
    <ValidationProvider rules="required|min:3" v-slot="{errors}">
      <el-form-item>
        <el-input v-model="questionText" placeholder="Question" class="question" />
      </el-form-item>
      <p class="text-red-900">{{errors[0]}}</p>
    </ValidationProvider>
    <AnswerForm
      v-for="(answer, index) in answers"
      :key="answer"
      :index="index"
      :isGood="isGoodAnswer(answer)"
      @good-answer="setGoodAnswer(answer)"
      @delete-answer="removeAnswer(answer)"
      @change-a="answers[index] = $event"
    />

    <el-button type="default" class="addAnswer" size="mini" @click="addAnswer" round
      ><i class="el-icon-plus el-icon-left"></i>Ajouter une réponse</el-button
    >

    <el-row>
      <el-col :span="8" :offset="0">
        <el-input-number
          v-model="dateH"
          size="normal"
          :min="0"
          :max="150"
          :step="1"
          :controls="true"
          @change="chooseHour()"
          controls-position="both"
        >
        </el-input-number>
        h
      </el-col>
      <el-col :span="8" :offset="0">
        <el-input-number
          v-model="dateM"
          size="normal"
          :min="0"
          :max="60"
          :step="1"
          :controls="true"
          @change="chooseMin"
          controls-position="both"
        >
        </el-input-number>
        min
      </el-col>
      <el-col :span="8" :offset="0">
        <el-input-number
          v-model="dateS"
          size="normal"
          :min="0"
          :max="60"
          :step="1"
          :controls="true"
          controls-position="both"
        >
        </el-input-number>
        sec
      </el-col>
    </el-row>

    <el-button type="success" size="default" @click="submit">Enregistrer</el-button>

    <!-- <v-btn @click="clear">clear</v-btn> -->
  </el-form>
</template>

<script lang="ts">
import axios from "axios";
import { ValidationProvider, extend } from "vee-validate";
import { Vue, Prop, Component, Watch } from "vue-property-decorator";
import AnswerForm from "./Answer/AnswerForm.vue";
import { IQuestion } from "../../types/Question";

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
  private answers: Array<String|null> = [null, null];
  private soluce = "";
  private category = "";
  private categories: Array<String> = ["Sport", "Musique", "Cinéma", "Politique"];
  // private dateStart = Date();
  private dateEnd = new Date();

  private dateH = 1;
  private dateM = 0;
  private dateS = 0;

  private setGoodAnswer(ans: string) {
    this.soluce = ans;
  }

  private get getGoodAnswer() {
    return this.soluce;
  }

  isGoodAnswer(answer: string) {
    return answer == this.getGoodAnswer ? true : false;
  }

  private addAnswer() {
    const answ = null; // une valeur par déf. différente à chaque fois
    // this.soluce = ""; // reset de la bonne réponse (optionnel)
    this.answers.push(answ);
  }

  private removeAnswer(answer: string) {
    const index = this.answers.indexOf(answer);
    if (index > -1) {
      this.answers.splice(index, 1);
    }
  }

  private chooseHour() {
    console.log(this.dateH);
    if (this.dateH == 0 && this.dateM == 0) {
      this.dateM = 10;
    }; 
  }

  private chooseMin() {
    console.log(this.dateH);
    if (this.dateH == 0 && this.dateM == 0) {
      this.dateH = 1;
    }; 
  }

  private submit() {
    this.dateEnd = new Date();
    this.dateEnd.setHours(this.dateH);
    this.dateEnd.setMinutes(this.dateM);
    this.dateEnd.setSeconds(this.dateS);
    
    const quest = {
      userPseudo: "Jacques",
      dateStart: new Date(),
      dateEnd: this.dateEnd,
      category: this.category,
      question: this.questionText,
      like: 0,
      answers: this.answers,
      soluce: this.soluce,
      lang: "fr"
    };
    console.log(quest);
  }

  // submit() {
  //         if (this.$refs.form.validate()) {
  //             // Native form submission is not yet supported
  //             axios.post("/api/submit", {
  //                 question: this.question,
  //                 email: this.email,
  //                 select: this.select,
  //                 checkbox: this.checkbox
  //             });
  //         }
  //     }
  // clear() {
  //     this.$refs.form.reset();
  // }
}
</script>

<style lang="scss">
.questionForm {
  text-align: center;
}
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
  margin-right: 5px;
}
</style>
