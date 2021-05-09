const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const requests = {
  fetchTopRated: `movie/popular?api_key=${API_KEY}&page=1`,
  fetchPopular: `trending/all/day?api_key=${API_KEY}`,
  // fetchLatest: `movie/latest?api_key=${API_KEY}&language=en-US`,
  // fetchTrending: ``,
  // fetchTrending: ``,
  // fetchTrending: ``,
  // fetchTrending: ``,
};

export default requests;
