import axios from 'axios';
import { optionsConfig } from '@/constants';

export default {
  get: () => axios.request({
    ...optionsConfig,
    url: 'https://tiktok33.p.rapidapi.com/trending/feed',
  }),
};
