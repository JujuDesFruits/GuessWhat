export interface IQuestion {
  id: number
  createdBy?: string
  dateStart?: date
  dateEnd: date
  category: string
  name: string
  like?: number
  answers: string[]
  correctAnswer: string
  lang?: string
}

export interface CreateQuestionData {
  dateEnd: date
  category: string
  name: string
  answers: string[]
  correctAnswer: string
}
