<template>
  <el-form ref="form" class="questionForm">
    Formulaire
    <!-- rules="required" -->
    <ValidationProvider 
      v-slot="{errors}">
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
    <ValidationProvider 
      rules="required"    
      v-slot="{errors}">
      <el-form-item>
        <el-input v-model="questionText" placeholder="Question" class="question" />
      </el-form-item>
      <p class="text-red-900">{{errors[0]}}</p>
    </ValidationProvider>

    <AnswerForm
      v-for="(answer, index) in answersList"
      :key="answer"
      :index="index"
      :isGood="isGoodAnswer(answer)"
      @good-answer="setGoodAnswer(answer)"
      @delete-answer="removeAnswer(answer)"
      @changea="setAnswer(index,$event)" 
    /> 

    <!-- BTN ADD ANSWER -->
    <el-button type="default" class="addAnswer" size="mini" @click="addAnswer" round
      ><i class="el-icon-plus el-icon-left"></i>Ajouter une réponse</el-button
    >

    <el-row>
      <!-- Time Picker -->
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

    <el-button type="submit" size="default" @click="submit">Enregistrer</el-button>

    <!-- <v-btn @click="clear">clear</v-btn> -->
  </el-form>
</template>

<script lang="ts">
import axios from "axios";
import { ValidationProvider, extend, validate } from "vee-validate";
import { Vue, Prop, Component, Watch } from "vue-property-decorator";
import AnswerForm from "./Answer/AnswerForm.vue";
import { IQuestion } from "../../types/Question";

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
  private answersList: Array<String|null> = [null, null];
  private soluce = "";
  private category = "";
  private categories: Array<String> = ["Sport", "Musique", "Cinéma", "Politique"];
  // private dateStart = Date();
  private dateEnd = new Date();

  private dateH = 1;
  private dateM = 0;
  private dateS = 0;

  private setAnswer(index: number, value: string) {
    console.log(this.answersList[index]);
    // this.answersList[index] = value;    // change bug (re-set all anwsers on view not in var) 
    console.log('params',this.answersList);
  }

  private addAnswer() {
    console.log(this.answersList);
    const answ = this.answersList.length + 1; // une valeur par déf. différente à chaque fois
    // this.soluce = ""; // reset de la bonne réponse (optionnel)answ.toString()
    this.answersList.push(null);
  }

  private setGoodAnswer(ans: string) {
    this.soluce = ans;
  }

  private get getGoodAnswer() {
    return this.soluce;
  }

  isGoodAnswer(answer: string) {
    return answer == this.getGoodAnswer ? true : false;
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

  private submit() {
    if (this.validate()) {

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
        answers: this.answersList,
        soluce: this.soluce,
        lang: "fr"
      };
      console.log(quest);
    } else {
      console.log('not full')
    }
    
    
  }

  private validate() {
    let valid = true;
    if (this.questionText == '') {
      console.log('question empty');
      valid = false;} // Question
    if (this.soluce == '') {valid = false;
      console.log('Solution empty');
    } // Solution
    this.answersList.forEach(element => { // Réponses
      if (element == null || element == "") {valid = false;
      console.log('An answer empty');
      }
    });
    return valid;
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
