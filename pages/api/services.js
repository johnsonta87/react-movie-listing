import API from './api'

const AppID = 'cf51a46c6ac26bd4f4c55018fdad298d';

export const fetchNowPlaying = async () => {
  try {
    const data = await API.get(`movie/now_playing?api_key=${AppID}`);
    return data;
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}

export const fetchTopRated = async () => {
  try {
    const data = await API.get(`movie/top_rated?api_key=${AppID}`);
    return data;
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}

export const fetchUpcoming = async () => {
  try {
    const data = await API.get(`movie/upcoming?api_key=${AppID}`);
    return data;
  }
  catch (e) {
    console.log('We have the error in services', e);
  }
}
