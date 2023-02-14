const getMovieData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const getMovie = await response.json();
  const selectedMovies = getMovie.slice(1, 201);
  return selectedMovies;
};

export default getMovieData;