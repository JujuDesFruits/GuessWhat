import request from '@/utils/request';

export const createAnswer = (data: any) =>
  request({
    url: '/answers/',
    method: 'post',
    data
  });

export default {
  createAnswer
};
