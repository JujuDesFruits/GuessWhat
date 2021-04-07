import request from '@/utils/request';
import {CreateQuestionData} from "@/types/Question";

export const createQuestion = (data: CreateQuestionData) =>
  request({
    url: '/questions/',
    method: 'post',
    data
  });

export default {
  createQuestion
};
