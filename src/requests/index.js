const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const requests = {
  fetchTopRated: `movie/popular?api_key=${API_KEY}&page=1`,
  fetchPopular: `trending/all/day?api_key=${API_KEY}`,
  // fetchTrending: ``,
  // fetchTrending: ``,
  // fetchTrending: ``,
  // fetchTrending: ``,
  // fetchTrending: ``,
};

export default requests;
