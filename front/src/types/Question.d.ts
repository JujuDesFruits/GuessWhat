export interface IQuestion {
  id: number
  userPseudo: string
  dateStart: date
  dateEnd: date
  category: string
  question: string
  like: number
  answers: string[]
  soluce: string
  lang: string
}