import { DateType } from 'element-ui/types/calendar';
import { Component, Vue, Prop } from 'vue-property-decorator';
// import WithRender from './to-do-form.html';

// @WithRender
@Component
export default class QuestionForm extends Vue {

  @Prop({ type: String, default: 'Ajouter'}) public readonly buttonText!: string;

  public userPseudo: string = 'Jacques';

  public dateStart: DateType = Date();

  public dateEnd: DateType = Date();

  public question: string = '';

  public category: string = '';

  public answers: Array<String> = [];

  public soluce: string = '';

  public like: number = 0;

  public lang: string = 'fr';

  public emitQuestion(): void {
      const question = {
        userPseudo: this.userPseudo,
        dateStart: this.dateStart,
        dateEnd: this.dateEnd,
        category: this.category,
        question: this.question,
        like: this.like,
        answers: this.answers,
        soluce: this.soluce,
        lang: this.lang
      }
    this.$emit('created', question);
    this.userPseudo = '';
    this.dateStart = Date();
    this.dateEnd = Date();
    this.category = '';
    this.question = '';
    this.like = 0;
    this.answers = [];
    this.soluce = '';
    this.lang = '';
  }
}
