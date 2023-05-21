import axios from 'axios';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGExY2NmOTA3MDI1YTFhNjQ2YjY3NGQzYTUzYmQ2NCIsInN1YiI6IjYzMWI5YTUxMzNhZDhmMDA3Y2M3MTNkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2mQcyao_Za4Ql2NiFv5nKFMgxj2ZYf1j8hkeGYdnN2s',
  },
};

export const getFilmsTrending = async () => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    );
    return response.data;
  } catch (error) {
    console.log('error');
  }
};

export const getFilm = async movie_id => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}`,
      options
    );
    return response.data;
  } catch (error) {
    console.log('error');
  }
};
