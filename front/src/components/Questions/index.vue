<template>
<div></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "Question"
})
export default class Question extends Vue {
  @Prop({
    default: Math.floor(Math.random() * (999999 - 0 + 1)) + 0
    // , required: true
  })
  private _id!: number;

  public getID() {
    return this._id;
  }

  @Prop({ required: true })
  private userPseudo!: string;

  public getUserPseudo() {
    return this.userPseudo;
  }

  public setUserPseudo(newer) {
      this.userPseudo = newer;
  }

  @Prop({ required: true })
  private dateStart!: Date;

  public getDateStart() {
    return this.dateStart;
  }

  public setDateStart(newer) {
      this.dateStart = newer;
  }

  @Prop({ required: true })
  private dateEnd!: Date;

  public getDateEnd() {
    return this.dateEnd;
  }

  public setDateEnd(newer) {
      this.dateEnd = newer;
  }

  @Prop({ required: true })
  private categorie!: string;

  public getCategorie() {
    return this.categorie;
  }

  public setCategorie(newer) {
      this.categorie = newer;
  }

  @Prop({ required: true })
  private question!: string;

  public getQuestion() {
    return this.question;
  }

  public setQuestion(newer) {
      this.question = newer;
  }

  @Prop({ default: 0 })
  private like!: number;

  public getLike() {
    return this.like;
  }

  public setLike(newer) {
      this.like = newer;
  }

  @Prop({ default: 0 })
  private answer!: Array<String>;

  public getAnswer() {
    return this.answer;
  }

  public setAnswer(newer: Array<String>) {
      this.answer = newer;
  }
  
  @Prop({ required: true })
  private soluce!: String;

  public getSoluce() {
    return this.soluce;
  }

  public setSoluce(newer) {
      this.soluce = newer;
  }
  
  @Prop({ default: 'fr', required: true })
  private lang!: String;

  public getLang() {
    return this.lang;
  }

  public setLang(newer) {
      this.lang = newer;
  }

public constructor() {
    super();
    this.dateStart = new Date('now');
    this.dateEnd = new Date('+1');
}
}
</script>

<style></style>
