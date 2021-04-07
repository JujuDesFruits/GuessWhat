import request from '@/utils/request';
import {CreateQuestionData} from "@/types/Question";

export const createQuestion = (data: CreateQuestionData) =>
  request({
    url: '/questions/',
    method: 'post',
    data
  });

export const getQuestions = () =>
  request({
    url: '/questions/',
    method: 'get'
  });

export default {
  createQuestion,
  getQuestions
};
