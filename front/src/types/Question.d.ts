export interface IQuestion {
  id: number
  userPseudo: string
  dateStart: date
  dateEnd: date
  categorie: string
  question: string
  like: number
  answer: string[]
  soluce: string
  lang: string
}