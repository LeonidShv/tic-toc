import axios from 'axios';
import { optionsConfig } from '@/constants';

export default {
  getFeed: (userName) => axios.request({
    ...optionsConfig,
    url: `https://tiktok33.p.rapidapi.com/user/feed/${userName}`,
  }),
  getInfo: (userName) => axios.request({
    ...optionsConfig,
    url: `https://tiktok33.p.rapidapi.com/user/info/${userName}`,
  }),
};
