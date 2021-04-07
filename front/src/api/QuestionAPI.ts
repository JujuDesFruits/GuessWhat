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

export const getQuestionsByCategory = (category: string) =>
  request({
    url: `/questions/?category=${category}`,
    method: 'get'
  });

export const getQuestionById = (id: string) =>
  request({
    url: `/questions/${id}`,
    method: 'get'
  });

export default {
  createQuestion,
  getQuestions,
  getQuestionsByCategory,
  getQuestionById
};
