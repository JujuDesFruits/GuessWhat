import request from '@/utils/request';
import { UserLoginOptions } from '@/types/User';

export const login = (data: UserLoginOptions) =>
  request({
    url: '/auth/local/',
    method: 'post',
    data
  });

export default {
  login
};
