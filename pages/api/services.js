import API from './api'

const AppID = 'cf51a46c6ac26bd4f4c55018fdad298d';

export const fetchSimilar = async (movie_id) => {
  try {
    const data = await API.get(`movie/${movie_id}/similar?api_key=${AppID}`);
    return data;
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}
