import request from '@/utils/request';
import {UserForgotPassword, UserLoginOptions, UserRegisterOptions} from '@/types/User';

export const login = (data: UserLoginOptions) =>
  request({
    url: '/auth/local/',
    method: 'post',
    data
  });

export const logout = () =>
  request({
    url: '/auth/logout/',
    method: 'post'
  });

export const forgotPassword = (data: UserForgotPassword) =>
  request({
    url: '/auth/forgot-password/',
    method: 'post',
    data
  });

export const getUserInfo = () =>
  request({
    url: '/users/me/',
    method: 'get'
  });

export const register = (data: UserRegisterOptions) =>
  request({
    url: '/auth/local/register',
    method: 'post',
    data
  });

export default {
  login,
  logout,
  forgotPassword,
  getUserInfo,
  register
};
