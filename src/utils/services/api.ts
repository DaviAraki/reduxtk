/* eslint-disable no-undef */
import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.REACT_APP_API,
});

export const baseURL = process.env.REACT_APP_API;

export default api;
